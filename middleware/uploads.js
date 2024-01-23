const { model } = require('mongoose');
const multer = require('multer');
const path = require('path');




var storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, 'uploads/')
    },

    filename: function(req,file,cb){
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});



var upload  = multer ({
    storage : storage,
    fileFilter : function(req,file, callback){
        if(file.mimetype === "image/png" || file.mimetype === "image/jpg"){
            callback(null,true);
        }
        else{
            console.log('only jpg and png file support');
            callback(null,false);
        }
    },
    limits:{
        fileSize : 1024 * 1024 * 2
    }
});

module.exports = upload;


// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         let ext = path.extname(file.originalname);
//         cb(null, Date.now() + ext);
//     }
// });

// const fileFilter = function (req, file, callback) {
//     // Perbolehkan hanya file dengan ekstensi pdf
//     if (file.mimetype === 'application/pdf') {
//         callback(null, true);
//     } else {
//         console.log('Only PDF files are supported');
//         callback(null, false);
//     }
// };

// const limits = {
//     fileSize: 1024 * 1024 * 5, // Batas ukuran file (dalam byte), disetel ke 5 MB sebagai contoh
// };

// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: limits,
// });

// module.exports = upload;
