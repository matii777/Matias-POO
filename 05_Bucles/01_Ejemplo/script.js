function contarwhile(){
    let contador = 20
    let array = []

    while(contador >= 10){
        array.push(contador)
        contador--
    }
    document.getElementById("lista").innerHTML = `<h2>Numeros del 20 al 10 con while: <br>${array}</h2>`
}

function contarfor(){
    let array = []

    for (let i = 20; i >= 10; i--){
        array.push(i)
    }
    document.getElementById("lista").innerHTML = `<h2>Numeros del 20 al 10 con for: <br>${array}</h2>`
}