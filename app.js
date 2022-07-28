const express = require("express");
const bodyparser = require("body-parser");


const app = express();

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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
})
