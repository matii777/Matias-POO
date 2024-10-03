function compararMayor(){
    let = resultado = "";
    num1 = parseInt(prompt("Ingrese el primer numero: "));
    num2 = parseInt(prompt("Ingrese el segundo numero: "));

if(num1>num2){
    resultado = `El ${num1} es mayor que ${num2}`
} else if(num2>num1){
    resultado = `El ${num2} es mayor que ${num1}`
} else if(resultado < 0) {
    resultado = `El ${num1} es igual que ${num2}`
}
else{
    resultado = `Ingrese un caracter válido`;
}


document.getElementById("lista").innerHTML = resultado;
}