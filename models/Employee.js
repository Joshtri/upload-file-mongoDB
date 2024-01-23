const mongoose = require('mongoose');
// const { type } = require('os');
const Schema = mongoose.Schema;



const EmployeeSchema = new Schema({
    // attribute 

    /*
    name 
    designation
    email
    phone
    age   
    */

    name : {
        type: String,
        required : true
    },

    designation : {
        type: String,
        required : true
    },

    email : {
        type: String,
        required : true
    },

    phone : {
        type: String,
        required : true
    },

    age : {
        type: String,
        required : true
    },
    
    avatar : {
        type: String
    }

}, {timestamps:true});



const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;

