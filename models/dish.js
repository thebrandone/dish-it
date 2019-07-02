var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoodPost = new Schema({
    user: {
        type: String,
        required : true
    },
    img: {
        Type: String,
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

var Dish = mongoose.model("Dish", FoodPost);

module.exports = Dish;