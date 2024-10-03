function numerosCreciendo(){
    let contador = 0
    let Array = []
    while(contador <= 100){
        Array.push(contador)
        contador += 5
    }
    document.getElementById("lista").innerHTML = `<h2>Numeros del 0 al 100: <br>${Array}</h2>`
}