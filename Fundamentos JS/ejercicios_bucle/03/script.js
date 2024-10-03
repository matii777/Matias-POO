function Pares(){
    let numPares = [];
    let numero = 2;
    let contador = 0;

    while(contador < 10){
        numPares.push(numero);
        numero += 2;
        contador++;
    }
    document.getElementById("lista").innerHTML = `Primeros 10 números pares: <br> <h2>${numPares}</h2>`
}