const express  = require('express');
const router = express.Router();
const { Store, ReadData } = require('../controllers/employeeController');

const upload = require("../middleware/uploads");



router.post('/store', upload.single('avatar'),Store)
router.get('/data-employee', ReadData)

router.get('/testaja', (req,res)=>{
    res.send('test');
})



// Rute API untuk menampilkan foto berdasarkan nama file
// router.get('/employee/avatar/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const filePath = path.join(__dirname, '../uploads', filename);

//     res.sendFile(filePath);
// });

module.exports=router