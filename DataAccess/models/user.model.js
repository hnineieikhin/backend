//model create
const {DataTypes}= require('sequelize')
const database = require('../dbconfig')
const { password, user } = require('pg/lib/defaults')
const User = database.define('tbl_user',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name:{
        type:DataTypes.STRING(255),
        allowNull : false,

        
    },
    username:{
        type:DataTypes.STRING(255),
        allowNull : false,

    },
    password:{
        type:DataTypes.STRING(255),
        allowNull : false
    }
    },
    {
        freezeTableName:true,
        timestamps: false

    })
module.exports=User
