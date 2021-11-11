function validarFormulario(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let localidad = document.getElementById("localidad").value;
    let cp = document.getElementById("cp").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let boleana = false;
  
    
    if(!nombre || nombre.length == 0){
        alert("Error: El campo nombre no debe ir vacio o con espacios en blanco");
        return false;
    }

    if(!apellido || apellido.length == 0){
        alert("Error: El campo apellido no debe ir vacio o con espacios en blanco");
        return false;
    }
    

    if(!dni || dni.length == 0 || isNaN(dni)){
        alert("Error: Debe ingresar un DNI");
        return false;
    }
    if(!direccion || direccion.length == 0){
        alert("Error: El campo direccion no debe ir vacio o con espacios en blanco");
        return false;
    }

    if(!telefono || telefono.length == 0 || isNaN(telefono)){
        alert("Error: Debe ingresar un número de telefono");
        return false;
    }

    if(!localidad || localidad == 0){
        alert("Error: Debe ingresar una localidad");
        return false;
    }
    if(!cp || cp.length == 0 || isNaN(cp)){
        alert("Error: Debe ingresar un número de telefono");
        return false;
    }
    if((!(/\S+@\S+\.\S+/.test(correo)))){
        alert("Error: Escribir un correo válido");
        return false;
    }

    if(!isNaN(fecha)){
        alert("Error: Debe elegir una fecha");
        return false;
    }

    
 return true;   
}

console.log("Estoy conectada")