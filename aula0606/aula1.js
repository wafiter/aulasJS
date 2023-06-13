/*
Uso do map com arrow function
Altera cada elemento do array gerando um novo array
*/
const io = require("../io")

const paises = ["Brasil", "México", "Argentina", "Bolívia"]

const novoArray = paises.map((elem) => {
    return elem + " - América do Sul"
})

io.write(novoArray)
