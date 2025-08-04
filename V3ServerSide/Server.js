const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');
const { CourseMaping } = require('./TABLE/CourseMaping');
const { StaffMaster } = require('./TABLE/StaffMaster');
//const {staffmaster}= require('./TABLE/StaffMaster');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.post('/login', async (req, res) => {
    try {
        const { staffId, staffPass } = req.body;
        const user = await CourseMaping.findOne({ where: { staff_id: staffId, staff_pass: staffPass } });
        if (user) {
            console.log(user);
            res.json({ success: true, message: "login success", user });
        }
        else {
            res.status(401).json({ success: false, message: "logun failed" });
        }
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

});

// ================================================================================================================

app.get('/staff/:id/classes',async(req,res)=>{
    const staffId = req.params.id;
    try {
        const hour = await StaffMaster.findAll({where:{staff_id:staffId}});
        if(hour)
        res.json(hour);
    }
    catch(err)
    {
        console.error(err);
    }
});

//adimn page code start hear



app.listen(5000,() => {
     console.log("backend run on 5000") 
    });
