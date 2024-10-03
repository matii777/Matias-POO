function primeroPares(){
    let n = parseInt(prompt("Ingrese la cantidad de numeros pares que desa encontrar"));
    let array = [];

        for(i = 1; i <= n; i++){
            array.push(i * 2);
        }
        document.getElementById("lista").innerHTML = `Los primeros ${n} numeros oares son: <h1>${array}</h1>`;
}