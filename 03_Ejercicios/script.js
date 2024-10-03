console.log(`XD`)
function modificarMensaje(){
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const eliminado = [];
    eliminado.push(mensajeModificado.shift())
    eliminado.push(mensajeModificado.shift())
    eliminado.push(mensajeModificado.pop())
    eliminado.push(mensajeModificado.pop())
    eliminado.push(mensajeModificado.pop())
    mensajeModificado.unshift("Somos","Nosotros")
    mensajeModificado.push("los","Mejores","del mundo")
    const agregados = []
    agregados.shift("Somos","Nosotros")
    agregados.push("los","mejores","del mundo")
    alert(`Sin modificacion: ${mensajeInicial} \nCon modificacion: ${mensajeModificado} \nEliminados: ${eliminado} \nAgregados: ${agregados}`
    )
}

function operandoMetodos(){
    const operacionInicial = [12,14,666,22,55,88,124,23,420,777];
    const operacionModificada = [12,14,666,22,55,88,124,23,420,777]
    const eliminado = []
    eliminado.push(operacionModificada.pop())
    eliminado.push(operacionModificada.pop())
    eliminado.push(operacionModificada.pop())
    eliminado.push(operacionModificada.shift())
    eliminado.push(operacionModificada.shift())
    eliminado.push(operacionModificada.shift())
    operacionModificada.unshift(5,3,300)
    operacionModificada.push(500,4,60)
    const suma = operacionModificada[0] + operacionModificada[1] + operacionModificada[2] + operacionModificada[3] + operacionModificada[4] + operacionModificada[5] + operacionModificada[6] + operacionModificada[7] + operacionModificada[8] + operacionModificada[9]
    alert(`Sin modificacion: ${operacionInicial} \nCon modificacion: ${operacionModificada} \nAgregados: 5,3,300,500,4,60 \nEliminados: ${eliminado} \nSuma: ${suma}`)
}