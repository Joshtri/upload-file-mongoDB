const Employee = require('../models/Employee')


//add new employee
const Store = (req,res, next)=>{
    /*
        name 
        designation
        email
        phone
        age   
    */
    let employee = new Employee({
        name : req.body.name,
        designation : req.body.designation,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age 
    });

    if(req.file){
        employee.avatar = req.file.path
    }


    employee.save().then(response =>{

        res.json({
            message : "employee added succesfully"
        })
    })
    .catch(error =>{
        res.json({
            message : "an error occured"
        });
    })
}


const ReadData = async (req, res) => {
    try {
        // Ambil data employee dari database
        const employees = await Employee.find();

        // Beri nama variabel lokal untuk ditampilkan di template
        const locals = {
            title: "Data Employee",
            employees: employees // mengirim data employee ke template
        };

        // Render template dan kirim data lokal
        res.render('data_employee', locals);
    } catch (error) {
        console.error("Error reading data:", error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports = {
    Store: Store,
    ReadData
};