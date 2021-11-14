$(document).ready(function(){
    // Mostrar datos al modal para editar registros
    $("#mytable").on("click", ".edit", function() {
        let id =        $(this).data("id");
        let nombre =    $(this).data("nombre");
        let apellido =  $(this).data("apellido");
        let dni =       $(this).data("dni");
        let direccion = $(this).data("direccion");
        let telefono =  $(this).data("telefono");
        let localidad= $(this).data("localidad");
        let cp =        $(this).data("cp");
        let email =     $(this).data("email");
        let fn =        $(this).data("fn");
        $("#EditModal").modal("show");
        $(".nombre").val(nombre);
        $(".apellido").val(apellido);
        $(".dni").val(dni);
        $(".direccion").val(direccion);
        $(".telefono").val(telefono);
        $(".localidad_provincia").val(localidad);
        $(".cp").val(cp);
        $(".email").val(email);
        $(".fn").val(fn);
        $(".id").val(id);
    });


// Delete 
$("#mytable").on("click", ".delete", function(){
    let id = $(this).data("id");
    $("#DeleteModal").modal("show");
    $(".id").val(id)
    })

});