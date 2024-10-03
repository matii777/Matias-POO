function Suma(){
    let contador = 1
    let suma = 0
    let sumaStr = ""
    let Array = []
    while(contador < 10){
        suma += contador
        sumaStr += contador + "+"
        Array.push(suma,contador)
        contador++
    }
    suma += contador
    sumaStr += contador + " = " +  suma
    document.getElementById("lista").innerHTML = `<h2>Numeros del 1 al 10: <br>${sumaStr}</h2>`
}