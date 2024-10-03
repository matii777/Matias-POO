//Ejercicios Creación de variables

//Una variable global de tipo
var global = "Global";
//Variable local
let local = "local";
//Constante
const Constante = "Constante";

console.log("Variables: Global:"+ global + " local: "
            + local + " -  + Constante: " + Constante);

//variable de tipo decimal
var numeroDecimal = 7.2;
//variable cadena de texto
var cadenaTexto = "Hola mi gente";
//variable booleano
var booleano = true;
//variable arreglo
var arreglo = [1, 2, 3, 4, 5];
//variable objeto
var objeto ={ Nombre: "Matias", Apellido: "Toledo", Rut: "22200279-6" };
//variable indefinida
var indefinida = "";
//variable nulo
var nulo = null;  
//definicion de funcion
function sumar(num1, num2){
    return 777 + 77;
};           
console.log("Variables:\nnumeroDecimal: " + numeroDecimal + "\ncadena de texto : " + cadenaTexto + "\nBooleano: "
 + booleano + "\nArreglo: " + arreglo + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinida: " + indefinida + "\nNulo: " + nulo + "\nResultado de función: " +
 + sumar());
 console.log( sumar()  );
