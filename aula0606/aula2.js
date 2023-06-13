/*
Uso do filter com arrow function
Filtra os elementos do array gerando um novo array apenas com os elementos que atendem a condição do return 
*/
const io = require("../io")

const notas = [7, 8.1, 6.7, 9.2, 5.9]

const novoArray = notas.filter((elem) => {
    return elem > 7
})

io.write(novoArray)
