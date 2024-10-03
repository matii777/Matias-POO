function Verificar(){
    let numeroMayor = 0
    let array = []

    for(let i = 0; i < 5; i++){
        let numero = parseInt(prompt("Ingrese el numero " + i + ":"))
        array.push(numero)
        /*
        if (numeroMayor < numero){
            numeroMayor = numero }else{
                numeroMayor = numeroMayor
        }*/
        numeroMayor = (numeroMayor < numero) ? num : numeroMayor
    }
document.getElementById(`lista`).innerHTML = `<p>${array.join(", ")} el numero mayor es: <h1>${numeroMayor}</h1></p>`
}