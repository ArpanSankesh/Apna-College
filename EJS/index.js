const express = require("express");
const app = express();
const path = require("path");
const { constrainedMemory } = require("process");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/ig/:username",(req, res) => {
    let {username} = req.params;
   const igData = require("./data.json");
   const data = igData[username];
   console.log(data);
    res.render("ig.ejs", {date});
});

app.get("/",(req, res) => {
    res.render("home.ejs");
});
app.get("/rolldice",(req, res) => {
    let roll = Math.floor(Math.random() *6 ) + 1; 
    res.render("rolldice.ejs", {num : roll});
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});