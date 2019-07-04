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
  // Deletes the book with the given id
  deleteDish: function(id) {
    return axios.delete("/api/dish/" + id);
  },
  // Saves a book to the database
  saveDish: function(dishData) {
    return axios.post("/api/dish", dishData);
  }
};
