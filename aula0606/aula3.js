/*
Uso do reduce com arrow function
Utilizado para acumular os elementos de um array (soma ou multiplicação)
*/
const io = require("../io")

const notas = [7, 8.1, 6.7, 9.2, 5.9]

const somaNotas = notas.reduce((acumulador, item) => {
    return acumulador + item
}, 0)

io.write(somaNotas)
