function InvertirCadenas(){
    const input = document.getElementById(`InputText`).value
    const resultado = document.getElementById(`resultado`)
    const InvertirCadenas = input.split(``).reverse().join(``)
    resultado.textContent = `Cadenas Invertidas: ` + InvertirCadenas
}