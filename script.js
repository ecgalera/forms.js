function validarFormulario(){

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let selector = document.getElementById("selector").selectedIndex;
    let checkbox = document.getElementById("checkBox").value;
    let radiobtn = document.getElementById("radioButton").value;
    let boleana = false;
  
    
    if(!nombre || nombre.length == 0){
        alert("Error: El campo nombre no debe ir vacio o con espacios en blanco");
        return false;
    }
    

    if(!edad || edad.length == 0 || isNaN(edad)){
        alert("Error: Debe ingresar una edad");
        return false;
    }

   
    if((!(/\S+@\S+\.\S+/.test(correo)))){
        alert("Error: Escribir un correo válido");
        return false;
    }

    if(!selector || selector == 0){
        alert("Error: Debe selecionar una opción del selector");
        return false;
    }

    if(!isNaN(fecha)){
        alert("Error: Debe elegir una fecha");
        return false;
    }

    if(!checkbox.checked){
        alert("Error: debe selecionar el checkbox");
        return false;
    }

    for(let i = 0; i<radiobtn.length; i++){
        if(radiobtn[i].checked){
            boleana = true;
            break;
     }
    }

    if(!boleana){
        alert("Error: Debe elegir una opción de radio button");
        return false;
    }


 return true;   
}

