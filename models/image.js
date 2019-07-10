var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ImagePost = new Schema({
    image: {
        type: String,
        required: true
    }
});

var Image = mongoose.model("Image", ImagePost);

module.exports = Image;