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

const handleDatabaseError = (res, error) => {
    if (error.name === 'MongooseTimeoutError') {
        res.status(500).send("Database operation timed out");
    } else {
        console.error("Error reading data:", error);
        res.status(500).send("Internal Server Error");
    }
};



const ReadData = async (req, res) => {
    let perPage = 12;
    let page = req.query.page || 1;
    try {
        const totalEmployees = await Employee.countDocuments({});
        const totalPages = Math.ceil(totalEmployees / perPage);

        if (page < 1 || page > totalPages) {
            return res.status(404).send("Page not found");
        }

        const employees = await Employee.find({})
            .sort({ createdAt: -1 })
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const locals = {
            title: "Data Employee",
  
            totalPages: totalPages,
            currentPage: page
        };

        res.render('data_employee',{
            locals,
            employees
        });
    } catch (error) {
        handleDatabaseError(res, error);
    }
};




module.exports = {
    Store: Store,
    ReadData
};