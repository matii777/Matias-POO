function puntaje(){
    let puntuacion = parseInt(prompt(`Ingrese su puntuacion`))
    if(puntuacion >= 90){
        resultado = (`<h2>${puntuacion} WoW exelente puntaje</h2>`)
    }
    else if(puntuacion >= 70 && puntuacion <= 89){
        resultado = (`<h2>${puntuacion} buen trabajo, sigue mejorando</h2>`)
    }
    else if(puntuacion < 70){
        resultado = (`<h2>${puntuacion} Necesitas mejorar</h2`)
    }
    else{
        resultado = (`<h2>Ingrese el valor valido</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}