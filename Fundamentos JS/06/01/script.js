function traerTabla(){
    let num = parseInt(document.getElementById("inputText").value);
    alert(num);

    let result = `La tabla `;
    for(let i =1; 1<=10; i++){
    result = `${i} x ${num} = ${i*num}<br>`
    }
    document.getElementById("lista").innerHTML = result
}