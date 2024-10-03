function Pares(){
    let contador = 2
    let Array = []
    while(contador <= 20){
        Array.push(contador)
        contador += 2
    }
    document.getElementById("lista").innerHTML = `<h2>Primero 10 Numeros Pares: <br>${Array}</h2>`
}