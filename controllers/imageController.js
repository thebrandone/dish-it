// const db = require("../models");

// module.exports = {
//     findById: function(req, res) {
//         db.Image
//             .findById(req.params.id)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));

//     },
//     findAll: function(req, res) {
//         db.Image
//             .findAll(req.query)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));

//     },
//     /*single upload: function(req, res) {

//     },*/
//     remove: function(req, res) {
//         db.Image
//             .findById({_id: req.params.id})
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));

//     }
// }