function primerosPares(){
    let N = parseInt(prompt("Ingresa cuántos números pares quieres encontrar:"));
    let Array = []
    for (let i = 2; i < N; i++) {
        Array.push(i*2)
    }
    document.getElementById("lista").innerHTML = `Los primeros numeors pares de <h2>${N}</h2> son: <br><h2>${Array}</h2> `
}