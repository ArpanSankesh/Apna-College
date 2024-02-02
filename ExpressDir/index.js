const express = require("express");
const { lazyrouter } = require("express/lib/application");
const app = express();

let port = 3000;

app.listen(port,()=> {
    console.log(`app is listining on port ${port}`);
});


app.get("/",(req , res) => {
    res.send("Hello, i am ROOT path");
});
app.get("/:username/:id",(req , res) => {
    let {username, id} = req.params;
    res.send(`<h1>Welcome to the page of @${username}, ${id}</h1>` );
});

app.get("/searh", (req,res) =>{
    console.log(req.query);
    let {q} = req.query;
    res.send(`Theses are the search result for query ${q}`);
});


// app.use ((req, res) => {
//     // console.log(req);
//     let indexHtml = "<h1><b>Hello World</b></h1>";

//     res.send(indexHtml);
// });




