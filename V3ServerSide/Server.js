const express = require ('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});



app.listen(5000,console.log("backend run on 5000"))