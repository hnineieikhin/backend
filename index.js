const express = require('express');
const cors = require('cors')
const bodyParser= require('body-parser')
const database= require('./DataAccess/dbconfig')
const User = require('./DataAccess/models/user.model')
const Role = require('./DataAccess/models/role.model')
const app = express(); //server create
const port=3000;
const options = {
    origin: ['http://localhost:5173'],
    methods: ['GET','POST','PUT','DELETE'

    ]
}

app.use(cors(options))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
database.authenticate().then((res)=>{
    console.log('database successfully connected')
}).catch((err)=>{
    console.log(err)
})   

database.sync({force:false}).then((res)=>{
        }).catch((err)=>{
    console.log(err)
})
// ?name=user&&roleid=1
//getall မှာ searchလုပ်ချင်ရင် သုံး
 app.get('/',async(req,res)=>{
    const name=req.query.name
    let filter={ }
    if(name){
       filter.name = name
    }
   const list= await User.findAll({where:filter})
   console.log(list)
    res.json(list)
})


app.get('/role',async(req,res)=>{
    const name=req.query.name
    let filter={}
    if(name){
        filter.name=name
    }
    const list= await Role.findAll({where:filter})
    console.log(list)
    res.json(list)

})
app.post('/',async(req,res)=>{
    let returnVal;
    const user={
        id:req.body.id==0 ? null: req.body.id,
        name:req.body.name,
        username:req.body.username,
        password:req.body.password
    }
    if(user.id>0){
        returnVal = await User.update(user,{where:{id:user.id}})
        
    }else{
         returnVal= await User.create(user)
    }
   
    console.log(returnVal)
    res.json({success:true})
})


app.post('/role',async(req,res)=>{
    let returnVal;
    const role={
        id:req.body.id==0? null:req.body.id,
        name:req.body.name,
        description:req.body.description
    }
    if(role.id>0){
        returnVal= await Role.update(role,{where:{id:role.id}})
    }else{
        returnVal=await Role.create(role)
    }

    console.log(returnVal)
    res.json({success:true})
})

//editအတွက် idခေါ်ပြီး dbထဲမှာ ရှာ
//parameter getbyid>id=1 -- getbyid?id=1&name=heek -req.query.id
//findbyPK ---> promise---> awaitသုံး
//id,{id:id}--->identifier key ,{user.id:}
app.get('/getbyid',async(req,res)=>{
    const id= req.query.id
    const result = await User.findByPk(id,{id:id})
    res.json(result)
})
//delete?id=1
app.delete('/delete',async(req,res)=>{
    const id=req.query.id
    const result= await User.destroy({where:{id:id}})
    res.json(result)
})

app.get('/role/getbyid',async(req,res)=>{
    const id=req.query.id
    const result = await Role.findByPk(id,{id:id})
    res.json(result)

})
app.delete('/role/delete',async(req,res)=>{
    const id=req.query.id
    const result= await Role.destroy({where:{id:id}})
    res.json(result)
})

//param /getbyid/1 param
// app.get('/getbyid/:id',(req,res)=>{

// })
app.listen(port,()=>{
console.log(`app listening on  http://localhost:${port}`);
})
