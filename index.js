/*Here we are goind to create AudioParam
Step1: initialize package.json files on project
Step 2:install all mangoose,express and requiremtn modeule for prject 
Step 3: create server with node js or express
Step 4: check database is there or not (conncet mangoode with mongodb) 
step 5: index file request the routes file to get data and send it responce */

const express=require("express")
const mongoose=require("mongoose")
const routes=require("./routes")
var bodyParser =require('body-parser')

//ApiDemo is an database name
mongoose.connect("mongodb://localhost:27017/ApiDemo").then(()=>{

    var app=express()
    app.use(bodyParser.urlencoded({extended:false}))
    app.use("/api",routes);
    app.use(express.json()) // new
    app.listen(3000,()=>
    {
        console.log("Server created")
    })

}).catch((e)=>{
    console.log("error are coming")
})

