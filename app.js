const { urlencoded } = require('express');
const express = require("express");
const mongoose = require("mongoose");
const TestContract = require('./models/contracts');
const TestCareer = require('./models/careers');
const bodyparser = require("body-parser");


const app = express();

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("Connected!");
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/test", function(req, res) {
  res.render("test");
})

app.get("/", function(req, res) {
  res.render("home");
})

app.get("/installations", function(req, res) {
  res.render("installations");
})

app.get("/temps", function(req, res) {
  res.render("temps");
})

app.get("/projects", function(req, res) {

  res.render("projects");
})

app.get("/careers", function(req, res) {
  res.render("careers");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.get("/contact", function(req, res) {
  res.render("contact");
})

//Routes

app.post('/save/contract', (req, res) => {
  const data = req.body;

  const newTestContract = new TestContract(data);

  newTestContract.save((error) => {
      if(error){
          res.status(500).json({msg: "sorry, internal server error"});
          return;
      }
      res.redirect("/");
  })
  
});

app.post('/save/career', (req, res) => {
  const data = req.body;

  const newTestCareer = new TestCareer(data);

  newTestCareer.save((error) => {
      if(error){
          res.status(500).json({msg: "sorry, internal server error"});
          return;
      }
      res.redirect("/");
  })
  
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
})
