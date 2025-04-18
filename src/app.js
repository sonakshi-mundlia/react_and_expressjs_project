const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");
const { registerPartials } = require("hbs");

require("./db/conn"); 

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"./templates/views");
const partialPath = path.join(__dirname,"./templates/partials");

app.use("/css" , express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js" , express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq" , express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.static(staticPath))
app.set("view engine" , "hbs");

app.set("views" , templatePath);
hbs.registerPartials(partialPath);


app.get("/" , (req,res) => {
    res.render("index");
})
app.get("/contact" , (req,res) => {
    res.render("contact");
})
app.listen(port ,() => {
    console.log(`server is running on port no ${port}`);
})
