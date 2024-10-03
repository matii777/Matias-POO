function noNegative(arr){
    let array = []
    let nums = parseInt(prompt("Ingrese numeros"));
    for(let i = 0; i < nums; i++){
        let num = parseInt(prompt("Ingrese numeros positivos y negativos"))
        array.push(num)
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
};
document.getElementById("Elemento").innerHTML = `arreglo original:${original.join(", ")} <br> Nuevo arreglo: ${array.join(", ")}`;