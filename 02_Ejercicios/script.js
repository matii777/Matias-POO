console.log("Vinculado Correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'Ahora' y 'Fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables(){
    // Tu código aquí
    let ahora = 2024
    let fecha_nac = 2005
    let resultado = ahora - fecha_nac
    alert(`Mi edad actual es: ${resultado}`)
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores(){
// Tu código aquí
let var1 = "El pepe"
let var2 = var1
alert(`El valor de var2 es: ${var2}`)
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1' y 'num2' y "num3", resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones(){
// Tu código aquí
let num1 = 4
let num2 = 10
let num3 = 20
let suma = num1 + num2 + num3
let resta = num1 + num3
let multiplicacion = num2 * num3
let divicion = num1/120
alert(`La suma es: ${suma}\nla resta es: ${resta}\nla multiplicacion es: ${multiplicacion}\nla divicion es: ${divicion}`)
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y antepenultimo en el mensaje. (.length)
function manipularCadenas(){
// Tu código aqui
let direccion = "Ejercito libertador"
let n_casa = "3084"
let mensaje = "La comuna es: " + direccion +  " " + n_casa
let longitud = mensaje.length
alert(`Mensaje: ${mensaje}\nLongitud: ${longitud}\nAnte penultimo: ${mensaje[30]}`)
}

function suma_indices(){
    let Array = [1,2,3,4,5,6,7]
    let suma = Array[6] + Array[5] + Array[0]
    alert(`La suma de indices es: ${suma}`)
}