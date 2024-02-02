const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Use urlencoded middleware
app.use(express.urlencoded({ extended: true }));

// Set the view engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set static directory
app.use(express.static(path.join(__dirname, "public")));

let posts = [{
    username:"Max",
    content:"loremmmmmmmmmmmmmmmmmmmmm"
},
{
    username:"maxxy",
    content:"loremmmmmmmmmmmmmmmmmmmmm"
},
{
    username:"haha",
    content:"loremmmmmmmmmmmmmmmmmmmmm"
}
]

// Correct the order of parameters in the callback function
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
