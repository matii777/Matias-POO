function verificacion(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    let contraseña = prompt("Ingrese su contraseña")
    if(nombreUsuario == "usuario123" , contraseña == "secreto"){
        veri = (`Ingreso correctamente`)
    }
    else
    {
        veri = (`Contraseña o usuario incorrecto`)
    }
    document.getElementById(`lista`).innerHTML = veri
}