const mysql = require("mysql");

// Conexcion a la Base de datos 
const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"registroclientes",
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Conectado a la Base de Datos")
})


module.exports= connection