function temperatura(){
    let temp = prompt("Cual es la temperatura actual") 
    if(temp <= 0){
        resultado = (`<h2>Ta siendo frio: ${temp}°</h2>`)
    }
    else if (temp >= 25 )
    {
        resultado = (`<h2>Ta haciendo calor: ${temp}°</h2>`)
    }
    else if(temp > 0, temp <= 25){
        resultado = (`<h2>Ta agradable: ${temp}°</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}