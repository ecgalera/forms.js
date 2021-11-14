const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Conexión a la Base de Datos 
const connection = require("../database/db");

// Select
router.get("/", (req, res)=>{
    let sql = "SELECT * FROM datosclientes";
    let query = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.render("admin", {
            results:results
        })
    })
})


// Insert
router.get("/registrarse",(req,res)=>{
    res.render("registrarse")
})


router.post("/save", (req,res)=>{
    let data = {
        nombre:     req.body.nombre,
        apellido:   req.body.apellido,
        dni:        req.body.dni,
        direccion:  req.body.direccion,
        telefono:   req.body.telefono,
        localidad:  req.body.localidad,
        cp:         req.body. cp,
        email:      req.body. email,
        fn:         req.body.fn,
    }
    let sql = "INSERT INTO datosclientes SET ?";
    let query = connection.query(sql, data, (err, results)=>{
        if(err) throw err;
        res.redirect("/");
    })


})

// update

router.get("/editar", (req, res)=>{
    let sql = "SELECT * FROM datosclientes";
    let query = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.render("editar", {
            results:results
        })
    })
})

router.post('/update', (req, res) => {
    let sql = "UPDATE datosclientes SET nombre='" + req.body.nombre + "', apellido='" + req.body.apellido + "' , dni='" + req.body.dni + "', direccion='" + req.body.direccion + "', telefono='" + req.body.telefono + "', localidad='" + req.body.localidad + "', cp='" + req.body.cp + "', email='" + req.body.email + "', fn='" + req.body.fn + "' WHERE id=" + req.body.id;
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// DELETE
router.post('/delete', (req, res) => {
    let sql = "DELETE FROM datosclientes WHERE id=" + req.body.id + "";
    let query = connection.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});


module.exports = router;

