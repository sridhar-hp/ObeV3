const {Sequelize,DataTypes}=require('sequelize');

const sequelize =new Sequelize('obe_2','root','thirumayil'{

    host:'localhost',
    dirlect:'mysql'
});

const StaffMaster = sequelize.define('StaffMaster',{
    s_no:{
        type:DataTypesa.INTEGER,
        primearyKey:true,
        autoIncrement:true
    },
    course_title: DataTypes.STRING,
    academic_sem: DataTypes.STRING,
    staff_name:DataTypes.STRING
},

{
    tableName:'staff_list',
    timestamps:false
});

module.exports={staffMaster};