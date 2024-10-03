function numeroMayor(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i = 0; i< 5; i++){
        let num = parseInt(prompt("Ingrese un numero: "));
        arrayNum.push(num);
            //if(numMayor < num)numMayor = num;
            numMayor = (numMayor < num) ? num : numMayor;
            
    }
    document.getElementById("lista").innerHTML = `De los numeros ingresados: ${arrayNum.join(", ")} Numero mayor: <h1>${numMayor}</h1>`
}