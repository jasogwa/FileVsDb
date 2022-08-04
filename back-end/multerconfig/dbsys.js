const multer = require('multer');

var storage = multer.memoryStorage()
var stream = multer({ storage: storage })

module.exports = stream;