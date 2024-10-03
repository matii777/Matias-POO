function promedio(){
let suma = 0;
for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt("Ingresa la calificación " + (i + 1) + ":"));
    suma += calificacion;
}
let promedio = suma / 5;
document.getElementById("lista").innerHTML = (`<h2>Su Promedio es un: ${promedio}</h2>`)
}