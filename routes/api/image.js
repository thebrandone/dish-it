const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// SINGLE UPLOAD
// const multer  = require('multer');
// const { mongo, connection } = require('mongoose');
// const Grid = require('gridfs-stream');
// Grid.mongo = mongo;


// const storage = require('multer-gridfs-storage')({
//    db: connection.db,
//    file: (req, file) => {
//       return {
//          filename: file.originalname
//       }
//    }
// });
// // sets file input to single file
// const singleUpload = multer({ storage: storage }).single('file');

router.route("/files:filename")
   .get(imageController.findById);

router.route("/files")
   .get(imageController.findAll)
   .post(/*single upload */);

router.route("/files/:id")
   .delete(imageController.remove);

// router.delete('/files/:id', (req, res) => {
//    gfs.remove({ _id: req.params.id }, (err) => {
//       if (err) return res.status(500).json({ success: false })
//       return res.json({ success: true });
//    })
// })

// module.exports = router;