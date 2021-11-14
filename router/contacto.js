const {Router} = require("express");
const nodemailer = require("nodemailer");
const contacto = new Router();


// Enivo de mail ----------------------------------------------------------------

contacto.get("/contacto", (req,res)=>{
    res.render("contacto");
})


// Declare las variables en el form de contacto.hbs
contacto.post("/send-email", (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const asunto = req.body.asunto;
    const mensaje = req.body.mensaje;


// traigo la configuración que establecí en .env
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,  
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
           }
      });

    //   configuro la información del remitente:
    const mailOptions = {
        from: "Remitente",
        to:"galera.eduardo@gmail.com",  // donde voy a reccecionar 
        subject: `${asunto}`,  
        // armamos la plantilla para rececionar la consulta del cliente
        html: `<h3>Consulta de <br>${nombre} ${apellido} <br>sobre<br> ${mensaje} Responder a <br>${email}</h3>`, // puedo usar ul y li
    };

    //  uso el manejo de errores:
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log("Email enviado");
            res.render("enviado")         // Para que me envie un mensaje del envio del mail
            res.status(200).jsonp(reqbody);
        }
    });

});

module.exports=contacto;