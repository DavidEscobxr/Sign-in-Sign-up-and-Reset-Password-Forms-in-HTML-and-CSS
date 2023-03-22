

function guardar(){
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;;
    var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;;
    var email = document.getElementById("email").value;;
    var telefono = document.getElementById("telefono").value;;
    var direccion = document.getElementById("direccion").value;;
    
    if(nombre==""){
        alert("Nombre inválido");
    }else if (apellido==""){
        alert("Apellido inválido");
    }else if (email==""){
        alert("Correo electrónico inválido");
    }else if (telefono==""){
        alert("Teléfono inválido");
    }else if (direccion==""){
        alert("Dirección inválida");
    }else{
        console.log({nombre, apellido, email, telefono, direccion})
    }

}

