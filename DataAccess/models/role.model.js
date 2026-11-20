const { DataTypes}=require('sequelize')
const database=require('../dbconfig')
const Role=database.define('tbl_role',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    description:{
        type:DataTypes.STRING(255),
        allowNull:false
    }
},
    {
        freezeTableName:true,
        timestamps:false
    }
)
module.exports=Role
