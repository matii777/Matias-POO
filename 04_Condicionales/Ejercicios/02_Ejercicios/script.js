function temp(){
    let temperatura = parseInt(prompt("Ingrese la temperatura actual"))
    if(temperatura <= 0){
        ambiente = (`<h2>Hace frio ${temperatura}°</h2>`)
    }
    else if(temperatura >= 25)
    {
        ambiente = (`<h2>Hace calor ${temperatura}°</h2>`)
    }
    else if(temperatura > 0, temperatura <=25){
        ambiente = (`<h2>se siente agradable ${temperatura}°</h2>`)
    }
    else{
        ambiente = (`<h2>Porfavor ingrese un dato valido</h2>`)
    }
    document.getElementById(`lista`).innerHTML = ambiente
}