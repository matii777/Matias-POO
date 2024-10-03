//Ejercicios Creación de variables
//Una variable global de tipo 
var global ="Global";
//Variable local
let local = "Local";
//Constante 
const Constante = "Constante";
//Numero Entero
let entero = 420
//Numero decimal
let decimal = 1.23
//Cadenas
const palabra = "Yo"
const cadena = palabra + " nose" + " historia"
//Boleano
function Boleano(){
    return true;
}
function boleano2(){
    return false;
}
//Arreglo
let Array = ["Goku ", 420 , "Nose ", 1];
//Objeto
let Objeto = {Edad: 18, Nombre: "Vac"}
//Indefinida
let Indefinida
//Nulo
nulo = null
//Operacion
function multiplicacion(num1, num2){
    return num1 * num2;
};
console.log("Variables: Global: " + global)
console.log("Local: " + local)
console.log("Constante: " + Constante)
console.log("Entero: " + entero)
console.log("Decimal: " + decimal)
console.log("Cadena: " + cadena)
console.log("Boleano: " + Boleano + " " + boleano2) 
console.log("Arreglo: " + Array) 
console.log("Clave Objeto: " + JSON.stringify(Objeto))
console.log("Indefinida: " + Indefinida)
console.log("Nulo: " + nulo)
console.log("Multiplicaciones: " + multiplicacion(23, 420))
