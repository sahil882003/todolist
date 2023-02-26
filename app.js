const express = require("express");
const app = express();
app.set("view engine", "ejs");
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];
var workitems=[];
app.get("/", function (req, res) {
    const date = new Date("2023-02-28");
    var options = { weekday: 'long',month: 'long', day: 'numeric'};
    today=date.toLocaleDateString("en-US", options);
    res.render("list", { listtitle: today,items:items,route:"/" });
});
app.get("/work",function(req,res)
{
    res.render("list",{listtitle:"work",items:workitems,route:"/work"})
});
app.get("/about",function(req,res)
{
    res.render("about");
});
app.post("/work",function(req,res)
{
    var item=req.body.newitem;
    workitems.push(item);
    res.redirect("/work");
})
app.post("/",function(req,res)
{
    var item=req.body.newitem;
    console.log(item);
    items.push(item);
    res.redirect("/");
})
app.listen(3000, function () {
    console.log("server is on and running on port 3000");
});