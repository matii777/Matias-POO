function contar(){
    let contador = 20;
    let array = [];
    
    while (contador > 0){
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML = `numeros del 20 al 10: \n ${array} <h2></h2>`
}