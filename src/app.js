const express = require("express");
require("./db/conn")
const User= require("./models/user")
const path = require("path");
const hbs = require('hbs');
const async = require("hbs/lib/async");
//const res = require("express/lib/response");
const app=express();
const port = process.env.PORT || 3000;
const staticpath =path.join(__dirname,"../public")
const partitalspath= path.join(__dirname,"../tamplates/partials");


//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
//for getting data form form
app.use(express.urlencoded({extended:false}))
///for use static file 
app.use(express.static(staticpath))
//for set hbs file 
app.set("view engine","hbs");
app.set('views',path.join(__dirname,'../tamplates/views'))
hbs.registerPartials(partitalspath);




//routing
//home 
app.get("/",(req,res)=>{
    res.render("index");
})

//req.body thi user fill that that give to us
app.post("/contect",async(req,res)=>{
   try{
         //res.send(req.body);
         const userData = new User(req.body);
        await  userData.save();
        res.status(201).render("index")
   }catch(error){
    res.status(500).send(error);
   }
})
//server created
app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
})