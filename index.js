require('dotenv').config();
const connectDB = require('./config/dbConfig');
const express = require('express');

const mongoose = require('mongoose');
const path = require('path');


const routerEmplooye = require('./routes/emplooye');


const app = express();
const PORT = process.env.PORT;


connectDB();

app.set("view engine", "ejs")

app.set("views", [
    path.join(__dirname, "/views"),
]);

// Menyediakan rute statis untuk file foto di direktori 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(express.static)


app.use('/',routerEmplooye);

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
});