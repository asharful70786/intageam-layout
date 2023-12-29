const { error } = require("console");
const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
 
app.set("views" ,path.join(__dirname, "/views"));

app.set("view engine" , "ejs");


app.get("/",(req,res) =>{
    res.send("you Re on the home page")
});

app.get("/ig/:username" , (req , res) =>{
    let {username} = req.params;
    const instadata = require("./data.json");
   let data = instadata[username]; 
  if(data){
    res.render("instagram.ejs",{data});
  }else{
    res.render("error.ejs")
  }

   
});

app.get('/scarch' , (req, res) =>{
   res.render("home.ejs")
});

app.get("/dice" , (req,res) =>{
    let random =Math.floor(Math.random()*6)+1;
   res.render("dice.ejs" , {random})
});


app.listen(port ,() => {
    console.log("port number ", port);
});


