var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoodPost = new Schema({
    user: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    image: {
        type: String,
        ref: "Image",
        required: false
    },
    description: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
});

var Dish = mongoose.model("Dish", FoodPost);

module.exports = Dish;