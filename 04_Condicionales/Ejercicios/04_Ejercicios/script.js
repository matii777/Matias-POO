function detectar(){
    let numero =  parseInt(prompt(`Ingrese un numero`))
    if(numero <= -1){
        resultado = (`Es negativo: ${numero}`)
    }
    else if(numero >= 1){
        resultado = (`Es Positivo: ${numero}`)
    }
    else if(numero == 0){
        resultado = (`Es igual a cero ${numero}`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}