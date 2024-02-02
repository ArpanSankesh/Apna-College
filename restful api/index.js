const { log } = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();
var methodOverride = require('method-override')


// Use urlencoded middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// Set the view engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set static directory
app.use(express.static(path.join(__dirname, "public")));

let posts = [{
    id: uuidv4(),
    username:"Max",
    content:"loremmmmmmmmmmmmmmmmmmmmm"
},
{
    id: uuidv4(),
    username:"maxxy",
    content:"loremmmmmmmmmmmmmmmmmmmmm"
},
{
    id: uuidv4(),
    username:"haha",
    content:"loremmmmmmmmmmmmmmmmmmmmm"
}
]

// Correct the order of parameters in the callback function
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post }); 
});


app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect('/posts')
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let {newContent} = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post})
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
