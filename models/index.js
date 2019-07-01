var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoodPost = new Schema({
    user: {
        type: String,
        required : true
    },
    img: {
        Type: Image,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

var Post = mongoose.model("Post", FoodPost);

module.exports = Post;