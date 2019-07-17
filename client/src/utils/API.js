import axios from "axios";

export default {
  // Gets all books
  getDishes: function() {
    return axios.get("/api/dish");
  },
  // Gets the book with the given id
  getDish: function(id) {
    return axios.get("/api/dish/" + id);
  },
  getProfileDish: function(name) {
    return axios.get("/api/dish/" + name)
  },
  // Deletes the book with the given id
  deleteDish: function(id) {
    return axios.delete("/api/dish/" + id);
  },
  // Saves a book to the database
  saveDish: function(dishData) {
    return axios.post("/api/dish", dishData);
  },
  saveImage: function(imgData) {
    return axios.post("/api/image", imgData);
  },
  findByUser: function(user) {
    return axios.get("/api/dish/?user=" + user);
  },
  findByLocation: function(location) {
    return axios.get("/api/dish/?location=" + location);
  },
  findByTags: function(tag) {
    return axios.get("/api/dish/?tag=" + tag);
  }

};
