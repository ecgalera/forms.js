const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require("./router/contacto"))  // mail importado

// Motor de plantillas 
app.set("view engine", "hbs");
app.set("veiws", path.join(__dirname,"views"))

// router
app.use("/", require("./router/router"))


// Puerto 
require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Conectado al puerto 3000")
});