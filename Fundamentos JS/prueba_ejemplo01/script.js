1 */ Recibir un arreglo numerico con numeros negativos y positivos. Todos los valore negativos remplezarlos por 0*/

function noNegative(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
};
document.getElementById("elemento").innerHTML = `La respuesta es: <h2>${arr}</h2>`; 

let array = [-2,5,6,10,-20]
noNegative(array);