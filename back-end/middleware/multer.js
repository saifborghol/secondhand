const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './controllers/imagesUploads')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname)
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter })
module.exports = upload