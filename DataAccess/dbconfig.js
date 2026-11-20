const { Sequelize} =require('sequelize') // main entry point
    const database=new Sequelize('postgresql://neondb_owner:npg_3mjVgk1sJWKB@ep-floral-wave-bev00s4m-pooler.c-9.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',{
    dialect: 'postgres',
    //logging:console.log
     ssl:{
        require: true,
        rejectUnauthorized: false
    },
})
//postgresql://neondb_owner:npg_3mjVgk1sJWKB@ep-floral-wave-bev00s4m-pooler.c-9.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require
module.exports= database // db သုံးလို့ရအောင်လုပ်


/*
const { Sequelize} =require('sequelize') // main entry point
//const database=new Sequelize('rfid_vms','sa','sasa@123',{
    dialect: 'mssql',
    logging:console.log
    
})
module.exports= database

*/
