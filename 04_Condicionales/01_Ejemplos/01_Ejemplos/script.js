console.log("Elpepe")

function IdentificarMayorEdad(){
    let resultado = ""
    //Identificar si es mayor o menor de edad
    let edad = prompt(`Porfavor ingrese su Edad: `)

    if(edad >= 18){
        resultado = (`Usted es mayor de Edad, Usted tiene: <h2>${edad} Años</h2>`)
    }
    else{
        resultado = (`Usted es menor de Edad - Usted tiene: <h2>${edad} Años</h2>`)
    }
    document.getElementById(`lista`).innerHTML = resultado
}