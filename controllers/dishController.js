const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Dish
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel, console.log(dbModel)))
      .catch(err => res.status(422).json(err));
  },

  // will need to be changed to find by hashtag
  findById: function(req, res) {
    db.Dish
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Dish
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Dish
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Dish
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Dish
      .find({user: req.body})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};