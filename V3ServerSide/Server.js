const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');
const { CourseMaping } = require('./TABLE/CourseMaping');
const { StaffMaster } = require('./TABLE/StaffMaster');
const { where } = require('sequelize');
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

app.get('/staff/:id/classes', async (req, res) => {
    const staffId = req.params.id;
    try {
        const hour = await StaffMaster.findAll({ where: { staff_id: staffId } });
        if (hour)
            res.json(hour);
    }
    catch (err) {
        console.error(err);
    }
});
//==========================================================================================================================================
//adimn page code start hear
app.get('/Admin/stafdet', async (req, res) => {
    try {
        const staffD = await StaffMaster.findAll();
        res.json(staffD);
    }
    catch (err) {
        console.error(err);
    }
});

// deleting code =======================================================================================================================================

app.delete('/Admin/:id', async (req, res) => {
    const staff_id = req.params.id;
    try {
        // const deletstaff = await CourseMaping.destroy({where:{staff_id}});
        const deleteStaff = await StaffMaster.destroy({ where: { staff_id } });
        const deletecourse = await CourseMaping.destroy({ where: { staff_id } });

        if (deleteStaff || deletecourse) {
            res.status(200).json({ success: true, message: "deletsucces" });
        }
        else {
            res.status(500).json({ success: false, message: "canot delete" });
        }

    }
    catch (err) {
        console.error(err);
    }

});

// adding new staff ======================================================================================================================================


app.post('/Admin/newstaff', async (req, res) => {
    const { staff_name, staff_id, course_title, dept_name, academic_sem, staff_pass } = req.body;
    console.log("Incoming data:", req.body);


    if (!staff_id || !staff_name || !course_title || !dept_name || !academic_sem || !staff_pass) {
        return res.status(400).json({ success: false, message: "all input required" });
    }

    try {
        const adds = await StaffMaster.create({
            course_title,
            academic_sem,
            staff_name,
            staff_id,
            dept_name
        });

        const addc = await CourseMaping.create({
            staff_id,
            staff_pass,
            staff_name
        });
        res.status(201).json({ success: true, message: "staff create succesfully" });
    }

    catch (err) {
        console.error("New Staff Error:", err.message);
        res.status(500).json({ success: false, message: "failed" });
    }
});












app.listen(5000, () => {
    console.log("backend run on 5000")
});
