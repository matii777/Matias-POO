function IndetificarMayor(){
    let num1 = parseInt(prompt(`Ingrese un numero: `))
    let num2 = parseInt(prompt(`Ingrese otro numero: `))
    
    if(num1 > num2){
        resultado = (`<h2>${num1} es mayor que ${num2}</h2>`)
    }
    else if(num1 < num2){
        resultado = (`<h2>${num2} es mayor que ${num1}</h2>`)
    }
    else if(num1 == num2){
        resultado = (`<h2>${num1} es igual a ${num2}</h2>`)
    }
    else{
        resultado = (`<h2>Porfavor ingrese numeros</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}