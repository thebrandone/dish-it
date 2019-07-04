var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ImageUpload = new Schema({
    filename: {
        type: String,
        require: true
    }
});

var Image = mongoose.model("Image", ImageUpload);

module.exports = Image;