function creciendo(){
    let contador = 0;
    let array = [];

    while (contador <= 100){
        array.push(contador);
        contador += 5;
    }
    document.getElementById("lista").innerHTML = `<p>Numeros del 5 al 100 con while</p> <br> <h2> ${array}</h2}`
}