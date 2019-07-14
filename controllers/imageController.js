const db = require("../models");

module.exports = {
<<<<<<< HEAD
    findById: function(req, res) {
        db.Image
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findAll: function(req, res) {
        db.Image
            .findAll(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    /*single upload: function(req, res) {

    },*/
    remove: function(req, res) {
        db.Image
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    }
}
=======
create: function(req, res) {
    db.Image
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
>>>>>>> 210e0b7678e6ca7ed952861b4cbc226ff6812b3b
