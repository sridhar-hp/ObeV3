const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');
const { CourseMaping } = require('./TABLE/CourseMaping');
const { StaffMaster } = require('./TABLE/StaffMaster');
const { where } = require('sequelize');
const { MarkEntry } = require('./TABLE/MarkEntry');

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

// class ===========================================================================================================================================

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


// deleting code =======================================================================================================================================

app.delete('/Admin/staffdelet/:id', async (req, res) => {
    const staff_id = req.params.id;
    try {
        const deletestaff = await CourseMaping.destroy({ where: { staff_id } });

        if (deletestaff) {
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
//====================================================================================================================================================

app.delete('/Admin/coursedelet/:id', async (req, res) => {
    const staff_id = req.params.id;
    try {
        const deletecourse = await StaffMaster.destroy({ where: { staff_id } });

        if (deletecourse) {
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
//course edit =======================================================================================================================================================

app.put('/Admin/editcourse/:id', async (req, res) => {

    const { category,
        batch,
        dept_id,
        degree,
        dept_name,
        semester,
        section,
        course_code,
        staff_id,
        staff_name,
        course_title,
        academic_sem } = req.body;
    console.log("Incoming data:", req.body);


    if (!category || !batch || !dept_id || !degree || !dept_name || !semester || !section || !course_code || !staff_id || !staff_name || !course_title || !academic_sem) {
        return res.status(400).json({ success: false, message: "all input required" });
    }

    try {
        const staffId = req.params.id;
        const [cupdate] = await StaffMaster.update({
            category,
            batch,
            dept_id,
            degree,
            dept_name,
            semester,
            section,
            course_code,
            staff_id,
            staff_name,
            course_title,
            academic_sem
        },
            {
                where: { staff_id: staffId }
            });


        if (cupdate) {
            res.status(201).json({ success: true, message: "course create succesfully" });
        }
        else {
            res.status(201).json({ success: false, message: "course canot edit" });

        }
    }


    catch (err) {
        console.error("New Staff Error:", err.message);
        res.status(500).json({ success: false, message: "failed" });
    }
});
//edit staff detiles =======================================================================================================================================
app.put('/Admin/editStaff/:id', async (req, res) => {
    const { staff_id,
        staff_pass,
        staff_name,
        staff_category,
        staff_dept,
        dept_catagry,
        Role } = req.body;
    console.log("Incoming data:", req.body);


    if (!staff_id || !staff_pass || !staff_name || !staff_category || !staff_dept || !dept_catagry || !Role) {
        return res.status(400).json({ success: false, message: "all input required" });
    }

    try {
        const staffId = req.params.id;

        const [update] = await CourseMaping.update({
            staff_id,
            staff_pass,
            staff_name,
            staff_category,
            staff_dept,
            dept_catagry,
            Role,
        },
            { where: { staff_id: staffId } });

        if (update) {
            res.status(201).json({ success: true, message: "staff create succesfully" });
        }
        else {
            res.status(404).json({ success: false, message: "server side errorr" });
        }
    }

    catch (err) {
        console.error("New Staff Error:", err.message);
        res.status(500).json({ success: false, message: "failed" });
    }

})

// adding new staff ======================================================================================================================================
app.post('/Admin/addnewstaff', async (req, res) => {
    const { staff_id,
        staff_pass,
        staff_name,
        staff_category,
        staff_dept,
        dept_catagry,
        Role } = req.body;
    console.log("Incoming data:", req.body);


    if (!staff_id || !staff_pass || !staff_name || !staff_category || !staff_dept || !dept_catagry || !Role) {
        return res.status(400).json({ success: false, message: "all input required" });
    }

    try {


        const adds = await CourseMaping.create({
            staff_id,
            staff_pass,
            staff_name,
            staff_category,
            staff_dept,
            dept_catagry,
            Role,
        });
        res.status(201).json({ success: true, message: "staff create succesfully" });
    }

    catch (err) {
        console.error("New Staff Error:", err.message);
        res.status(500).json({ success: false, message: "failed" });
    }
});

// adding new course======================================================================================================================================


app.post('/Admin/ncourse', async (req, res) => {
    const { category,
        batch,
        dept_id,
        degree,
        dept_name,
        semester,
        section,
        course_code,
        staff_id,
        staff_name,
        course_title,
        academic_sem } = req.body;
    console.log("Incoming data:", req.body);


    if (!category || !batch || !dept_id || !degree || !dept_name || !semester || !section || !course_code || !staff_id || !staff_name || !course_title || !academic_sem) {
        return res.status(400).json({ success: false, message: "all input required" });
    }

    try {
        const addc = await StaffMaster.create({
            category,
            batch,
            dept_id,
            degree,
            dept_name,
            semester,
            section,
            course_code,
            staff_id,
            staff_name,
            course_title,
            academic_sem
        });

        res.status(201).json({ success: true, message: "staff create succesfully" });
    }

    catch (err) {
        console.error("New Staff Error:", err.message);
        res.status(500).json({ success: false, message: "failed" });
    }
});

////display all staff detiles=================================================================================================================================================
app.get('/Admin/stafflist', async (req, res) => {
    try {
        const astaffD = await CourseMaping.findAll();
        res.json(astaffD);
    }
    catch (err) {
        console.error(err);
    }
});

////display all course detiles==================================================================================================================================================
app.get('/Admin/courselist', async (req, res) => {
    try {
        const CourseD = await StaffMaster.findAll();
        res.json(CourseD);
    }
    catch (err) {
        console.error(err);
    }
});

// mark display  =====================================================================================================================================
app.get("/mark", async (req, res) => {

    try {
        const { section, degree, category, semester } = req.query;

        console.log("check:", section, degree, category, semester);//

        const mark = await MarkEntry.findAll({ where: { section: section, class_name: degree, Dept_type: category, Semester: semester } });
        if (mark) {
            res.json(mark);
        }
        else {
            res.status(401).json({ success: false, message: "error in db", mark });
        }
    }
    catch (err) {
        console.error(err);
    }
});

//mark entry into db
app.put("/MarkEntry", async (req, res) => {
    const { students, context } = req.body;//specify thinks - students,context - coman thinks

    try {
        for (const student of students) {
            await MarkEntry.update({
                LOT: student.LOT,
                MOT: student.MOT,
                HOT: student.HOT,
                TOTAL: student.TOTAL
            },
                {
                    where: {
                        Register_number: student.Register_number,
                        section: student.section,
                        class_name: context.degree,
                        Dept_type: context.category,
                        Semester: context.semester,
                    }
                }
            );
        }
        res.status(200).json({ success: true, message: "done" });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "failed" });
        console.log(err);
    }

});
app.listen(5000, () => {
    console.log("backend run on 5000")
});
