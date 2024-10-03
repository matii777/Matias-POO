/* Recibir un arreglo numerico con arreglos negativos y positivos. Todos los valores negativos remplazarlos por 0 */

function noNeg(){
    let array = []
    let N = parseInt(prompt("Ingresa cuántos números quiera:"));
    for(let i = 0; i < N; i++){
        let num = parseInt(prompt("Ingresa numeros positivos y negativos: "));
        array.push(num)
    }

    let original = [...array]
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            array[i] = 0
        }
    }
    document.getElementById(`Elemento`).innerHTML = `Arreglo original: ${original.join(",")} <br> Arreglo modificado: ${array.join(",")}`
};