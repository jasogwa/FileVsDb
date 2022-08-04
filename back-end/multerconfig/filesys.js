const multer = require('multer');

var upload = multer({ dest: 'uploads/' });
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
})
var upload = multer({ storage: storage })

module.exports = upload;