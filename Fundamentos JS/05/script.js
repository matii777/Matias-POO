function valorarPuntuaciones(){
    let puntuacion = parseInt(prompt("Ingrese su puntuacion: "))
    let resultado = "";

    if(puntuacion >= 90){
        resultado = `excelente - ${puntuacion}`;
    }
    else if(puntuacion >= 70 && puntuacion <=89){
        resultado = `buen trabajo - ${puntuacion}`;
        }
        else if (puntuacion < 70){
            resultado = `necesitas mejorar - ${puntuacion}`;
            }
            else{
                resultado = `ingrese un valor valido`;
            }
    document.getElementById("lista").innerHTML = resultado;
}

