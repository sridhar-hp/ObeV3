const express = require ('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');
const {CourseMaping} = require ('/TABLE/CourseMaping');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

app.post('/login',async (req,res)=>{
const {staffId,staffPass}=req.body;

const user = await CourseMaping.findOne({where:{staffId,staffPass}});

if(user)
{
	res.status(200).json({success:true,message:"login success",user});
}
else{
	res.status(500).json({success:false,message:"logun failed"});
}
	});

app.listen(5000,
    ()=>{console.log("backend run on 5000")});
