const {Sequelize,DataTypes, Sequelize}=require('sequelize');

const Sequelize = new Sequelize('obe_2','root','thirumayil',{
    host:'localhost',
    dirlect:'mysql'
})

const CourseMaping = sequelize.define('Coursemapign',{
    staff_id:{
        type:DataTypes.STRING,
        primaryKey:true,
        autoIncrement:true
    },
    staff_pass:DataTypes.STRING,
    staff_name:DataTypes.STRING,
    Role:DataTypes.STRING,
},{
    tableName:'coursemapping',
    timestamps:false
});

module.exports={CourseMaping};

