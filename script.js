function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
  
    // test obligatorio 
    if(!nombre || nombre.length == 0){
        alert("Error: El campo nombre no debe ir vacio o con espacios en blanco");
        return false;
    }
    // test edad

    if(!edad || edad.length == 0 || isNaN(edad)){
        alert("Error: Debe ingresar una edad");
        return false;
    }

    //test correo
    if((!(/\S+@\S+\.\S+/.test(correo)))){
        alert("Error: Escribir un correo válido");
        return false
    }

 return true;   
}

