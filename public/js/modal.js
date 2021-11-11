$(document).ready(function(){
    // Mostrar datos al modal para editar registros
    $("#mytable").on("click", ".edit", function() {
        let cliente_id =        $(this).data("id");
        let cliente_nombre =    $(this).data("cliente_nombre");
        let cliente_apellido =  $(this).data("cliente_apellido");
        let cliente_dni =       $(this).data("cliente_dni");
        let cliente_direccion = $(this).data("cliente_direccion");
        let cliente_telefono =  $(this).data("cliente_telefono");
        let cliente_localidad_provincia = $(this).data("cliente_localidad_provincia");
        let cliente_cp =        $(this).data("cliente_cp");
        let cliente_fn =        $(this).data("cliente_fn");
        $("#EditModal").modal("show");
        $(".cliente_nombre").val(cliente_nombre);
        $(".cliente_apellido").val(cliente_apellido);
        $(".cliente_dni").val(cliente_dni);
        $(".cliente_direccion").val(cliente_direccion);
        $(".cliente_telefono").val(cliente_telefono);
        $(".cliente_localidad_provincia").val(cliente_localidad_provincia);
        $(".cliente_cp").val(cliente_cp);
        $(".cliente_email").val(cliente_email);
        $(".cliente_fn").val(cliente_fn);
        $(".cliente_id").val(cliente_id);
    });


// Delete 
$("#mytable").on("click", ".delete", function(){
    let cliente_id = $(this).data("id");
    $("#DeleteModal").modal("show");
    $(".cliente_id").val(cliente_id)
    })

});