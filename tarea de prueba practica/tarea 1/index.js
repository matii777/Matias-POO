/*Leer los datos de una persona (nombre, apellido, edad) y mostrar a traves de una inscripcion*/
/*
let nombre = prompt("Escribe un Nombre: ");
let apellido = prompt("Escribe un apellido: ");
let edad = prompt("Escribe tu edad: ");

function mostrarDatos(nombre, apellido, edad){   
    console.log(`El nombre completo es: ${nombre} apellido ${apellido}, edad: ${edad}`);
}

mostrarDatos(nombre, apellido, edad);
*/



// segundo ejercicio

/*
let numero = parseInt(prompt("Ingrese un valor numerico: "));
function operar(num){
    return (num / 3 + 10 ) * 2;
}
console.log(`El resultado es: ${operar(numero)}`);
*/


// tercer ejecicio
/*
let numero1 = parseInt(prompt("Ingrese un valor numerico"));
let numero2 = parseInt(prompt("Ingrese un segunco valor numerico"));

function mayorMenor(){
    if(numero1 < numero2){
        console.log(`Esta creciente`);
    }
    else if(numero1 > numero2){
        console.log(`Esta decreciente`);
    }
}
mayorMenor();
*/

// CUARTO EJERCICIO
/*
let num1 = parseFloat(prompt("Ingrese un numero: "));
let num2 = parseFloat(prompt("Ingrese un numero: "));
let num3 = parseFloat(prompt("Ingrese un numero: "));
let num4 = parseFloat(prompt("Ingrese un numero: "));
let num5 = parseFloat(prompt("Ingrese un numero: "));
let operacion = (num1 + num2 + num3 + num4 + num5) / 5;
function promedio(){
    console.log(`El promedio es: ${operacion}`);  
}
promedio();
*/

// QUINTO EJERCICIO
/*
let vueltas = parseInt(prompt("Ingrese la cantidad de números: "));
let suma = 0;

for(i = 1; i <= vueltas; i++){
    suma += i;
}

console.log(`La suma de los primeros ${vueltas} números naturales es: ${suma}`);
*/
 
// 100 Primeros pares
/*
let suma = 0;
function operacion(){
    for(let i = 0; i < 100; i++){
        suma += 2;
        console.log(suma);
    }
}
operacion()
*/

// 100 Primeros impares
/*
function operacion(inpar){
    for(let i = 0; i < 100; i++){
        inpar += 2;
        console.log(inpar)
        
    }
}
operacion(-1);
*/

// tarea 8
/*
function operacion(suma){
    for(let i = 0; i < 5; i++){
        let numero = parseInt(prompt("Ingrese los numeros: "));
        suma += numero;
        console.log(suma);
    }
}
operacion(0);
*/

// tarea 9 

/*
let n = parseInt(prompt("Ingrese la cantidad de nuemeros a recibir: "));
function operacion(suma){
    for(let i = 0; i < n; i++){
        let numero = parseInt(prompt("Ingrese los numeros: "));
        suma += numero;
        console.log(suma);
    }
}
operacion(0);
*/

// tarea 10
/*
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let opcion  = parseInt(prompt("Seleccione una operacion:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.division"));
function operacion(){
    switch(opcion){
        case 1:
            suma = num1 + num2;
            console.log("la suma es: " + suma);
            break;
        case 2:
            resta = num1 - num2;
            console.log("la resta es: " + resta);
            break;
        case 3:
            multiplicacion = num1 * num2;
            console.log("la multiplicacion es: " + multiplicacion);
            break;
        case 4:
            division = num1 / num2;
            console.log("la division es: " + division);
            break;
    }
}
operacion();
*/

//tarea 11

/*
let n = parseInt(prompt("Ingrese la catidad numeros que desee: "));
let array = [];
function operacion(suma){
    for(let i = 0; i < n; i++){
        let numero = parseInt(prompt("Ingrese un numero: "));

        if (numero % 2 === 0){
            array.push(numero);
            suma += numero;
        }else{
            console.log("El numero ingresado no es par, intente denuevo");
            i--;
        }
    }
    return suma;
}
let totalSuma = operacion(0);
console.log("La suma de los numeros pares es: " + totalSuma);
*/

//tarea 12
/*
let n = parseInt(prompt("Ingrese el numero que desee: "));
let suma = 0;
function operacion(){
    for(let i = 0; i < n; i++){
        let num = 2 * (i + 1);
        suma += num;
    }
}
operacion();
console.log("La suma de los numeros pares es: " + suma);
*/

// tarea 13

/*
let n = parseInt(prompt("Ingrese la catidad numeros que desee: "));
let array = [];
function operacion(suma){
    for(let i = 0; i < n; i++){
        let numero = parseInt(prompt("Ingrese un numero: "));

        if (numero % 2 === 1){
            array.push(numero);
            suma += numero;
        }else{
            console.log("El numero ingresado no es par, intente denuevo");
            i--;
        }
    }
    return suma;
}
let totalSuma = operacion(0);
console.log("La suma de los numeros inpares es: " + totalSuma);
/*


// tarea 14
/*
let n = parseInt(prompt("Ingrese el numero que desee: "));
let suma = 0;
function operacion(){
    for(let i = 0; i < n; i++){
        let num = 2 * i + 1;
        suma += num;
    }
}
operacion();
console.log("La suma de los numeros inpares es: " + suma);
*/

// tarea 15
/*
let n = parseInt(prompt("Ingrese el numero que desee: "));
let multi = 0;
function operacion(){
    for(let i = 0; i < n; i++){
        let num = 3 * (i + 1);
        multi += num;
    }
}
operacion();
console.log(`La suma de los primeros: ${n} da como resultado: ${multi}`);
*/

// 16
/*
let input = prompt("Ingrese un número entero no negativo para calcular su factorial:");
let N = parseInt(input); 

function calcularFactorial(N) {
    
    if (N < 0 || !Number.isInteger(N)) {
        console.log("Por favor, ingrese un número entero no negativo.");
        return;
    }

    let factorial = 1; 
    console.log(`Cálculo del factorial de ${N}:`);

    for (let i = 1; i <= N; i++) {
        factorial *= i; 
        console.log(`${i}! = ${factorial}`); 
    }

    console.log(`El factorial de ${N} es: ${factorial}`);
}

calcularFactorial(N);
*/

// 17
/*
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

function celsiusAFahrenheit(celsius) {
    
    if(isNaN(celsius)){
        return "Por favor, ingrese un número válido.";
    }
    else{
        return (celsius * 9/5) + 32; 
    }
}


let resultado = celsiusAFahrenheit(celsius);
console.log(`El equivalente de ${celsius}° celsius a fahrenheit es: ${resultado}°`);
*/

//18
/*
let frase=prompt("ingrese una frase: ").split(" ");
let largo = 0;
function frasePalabraLarga(){
    
    for (let i=0; i<frase.length; i++){
        if(frase[i] > largo){
            largo=frase[i]
            console.log(`La palabra mas larga es ${largo}`)
        }
    }
    
}
*/

// 19
/*
let num= parseInt(prompt("Ingrese un numero:" ))

function numPrimos(num){
    for (let i=0; i<num; i++){
        if(num[i] / 1){
            num[i] = num
        }
        else if(num[i] / num){
            num[i] = num
        }
    }
    console.log(`el numero primo es  ${num}`);
}
numPrimos(num);
*/

// 20

let texto = prompt("Ingrese un texto");
let contador = {};

function contadorCaracteres(cadena) {
    let contador = {};  
    for (let caracter of cadena) {
        
        if (caracter !== ' ') {
            contador[caracter] = (contador[caracter] || 0) + 1;
        }
    }
    return contador;
}

let resultado = contadorCaracteres(texto);
console.log("Conteo de caracteres:", resultado);

let caracterMasRepetido = '';
let maxRepeticiones = 0;

for (let caracter in resultado) {
    if (resultado[caracter] > maxRepeticiones) {
        maxRepeticiones = resultado[caracter];
        caracterMasRepetido = caracter;
    }
}

console.log(`El carácter más repetido es "${caracterMasRepetido}" con un máximo de ${maxRepeticiones} repeticiones.`);