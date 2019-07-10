const express = require("express");
const app = express();
// the usual
const path = require('path');
const mongoose = require("mongoose");
const morgan = require('morgan');
// aws
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const bodyParser = require('body-parser');

// DOTENV to secure AWS creds
require('dotenv').config();

// our files
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan('dev'));

// AWS
AWS.config.update({
  accessKeyId: process.env.ACCESS,
  secretAccessKey: process.env.SECRET,
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_Bucket,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  // ********* this was commentsed out to test if we are able to grab URL
  // return s3.upload(params).promise();
  // ********* 
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err) {
      console.log(err);
      return res.end();
      
    }
  })
};

// Define POST route
app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `bucketFolder/${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      };
    });
});

// app.get('/test-download', (request, response) => {
//   const s3 = new AWS.S3();
//   response = s3.listObjectsV2({
//     Bucket: process.env.S3_Bucket
//   })
// })



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(morgan('dev'));
// Put all API endpoints under '/api'

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Add routes, both API and view
app.use(routes);

// catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build'));
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dishit", {
  useNewUrlParser: true
});

mongoose.connection.once("open", () => {

  app.use('/api', require('./routes/index'));
  //app.use('/api', require('./routes/file'));

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
})

