function modificarMensaje() {
    let mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let mensajeModificado = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];

    let eliminados = [];
    let agregados = [];

    // Eliminar y agregar elementos utilizando solo los métodos pop, shift, unshift y push
    eliminados.push(mensajeModificado.shift()); // Elimina "Hola"
    eliminados.push(mensajeModificado.pop()); // Elimina "C"
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());
    eliminados.push(mensajeModificado.shift());

    
    agregados.unshift(mensajeModificado.push("somos"));
    agregados.unshift(mensajeModificado.push("nosotros"));
    agregados.unshift(mensajeModificado.push("todos"));
    agregados.unshift(mensajeModificado.push("los"));
    agregados.unshift(mensajeModificado.push("estudiantes"));
    agregados.unshift(mensajeModificado.push("de"));
    agregados.unshift(mensajeModificado.push("programacion"));
    agregados.unshift(mensajeModificado.push("los"));
    agregados.unshift(mensajeModificado.push("mejores"));
    agregados.unshift(mensajeModificado.push("del mundo"));

    // Mostrar resultados en una alerta
    alert("Arreglo inicial: " + mensajeInicial + "\n" +
        "Arreglo final: " + mensajeModificado + "\n" +
        "Valores eliminados: " + eliminados + "\n" +
        "Valores agregados: " + mensajeModificado);
}

function operandoMetodos() {
    let numerosAleatorios = [4, 7, 5, 9, 6, 22, 35, 12, 55, 32];
    let numerosFinales = [4, 7, 5, 9, 6, 22, 35, 12, 55, 32]; // Copiar los valores de numerosAleatorios a numerosFinales

    let eliminados = [];
    let agregados = [];

    // Eliminar y agregar elementos utilizando solo los métodos pop, shift, unshift y push
    

    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento
    eliminados.push(numerosFinales.shift()); // Elimina el primer elemento

    agregados.unshift(numerosFinales.push(30)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(77)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(22)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(89)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(12)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(11)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(15)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(66)); // Agrega un nuevo número al inicio
    agregados.unshift(numerosFinales.push(99)); // Agrega un nuevo número al inicio

    // Suma de todos los elementos
    let sumaTotal = numerosFinales.reduce((total, num) => total + num, 0);

    // Mostrar resultados en una alerta
    alert("Arreglo inicial: " + numerosAleatorios + "\n" +
        "Arreglo final: " + numerosFinales + "\n" +
        "Valores eliminados: " + eliminados + "\n" +
        "Valores agregados: " + numerosFinales + "\n" +
        "Suma total: " + sumaTotal);
}
