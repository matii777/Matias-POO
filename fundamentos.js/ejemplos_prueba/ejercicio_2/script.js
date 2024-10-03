/* Recibir un arreglo numerico con arreglos negativos y positivos. Todos los valores negativos remplazarlos por 0 */

function noNeg(){
    let array = []
    let N = parseInt(prompt("Ingresa cuántos números quiera:"));
    for(let i = 0; i < N; i++){
        let num = parseInt(prompt("Ingresa numeros positivos y negativos: "));
        array.push(num)
        if(array[i] + num){
            array[i] + num
        }
    }
    document.getElementById(`Elemento`).innerHTML = `Arreglo sumado: ${sum} <br> Arreglo modificado: ${array.join(",")}`
};