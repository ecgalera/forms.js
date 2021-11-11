const express = require("express");
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
        cliente_nombre:     req.body.cliente_nombre,
        cliente_apellido:   req.body.cliente_apellido,
        cliente_dni:        req.body.cliente_dni,
        cliente_direccion:  req.body.cliente_direccion,
        cliente_telefono:   req.body.cliente_telefono,
        cliente_localidad_provincia: req.body.cliente_localidad_provincia,
        cliente_cp:         req.body.cliente_cp,
        cliente_email:      req.body.cliente_email,
        cliente_fn:         req.body.cliente_fn,
    }
    let sql = "INSERT INTO datosclientes SET ?";
    let query = connection.query(sql, data, (err, results)=>{
        if(err) throw err;
        res.redirect("/");
    })


})

// update

router.get("/update", (req, res)=>{
    let sql = "SELECT * FROM datosclientes";
    let query = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.render("update", {
            results:results
        })
    })
})

router.post("/update", (req, res)=>{
    let sql = "UPDATE datosclientes SET cliente_nombre='" + req.body.cliente_nombre + "', cliente_apellido='" + req.body.cliente_apellido + "', cliente_dni='" + req.body.cliente_dni + "', cliente_direccion='" + req.body.cliente_direccion + "', cliente_telefono='" + req.body.telefono_telefono + "', cliente_localidad_provincia='" + req.body.cliente_localidad_provincia + "', cliente_cp='" + req.body.cliente_cp + "', cliente_email='" + req.body.cliente_email + "' ,cliente_fn='" + req.body.cliente_fn + "' WHERE cliente_id=" + req.body.id;
    let query = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.redirect("/")
    })
})

router.post("/delete", (req,res)=>{
    let sql = "DELETE FROM datosclientes WHERE cliente_id=" + req.body.id;
    let query =connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.redirect("/");
    })
})

module.exports = router;

