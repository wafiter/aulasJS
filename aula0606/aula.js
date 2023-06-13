/*
Uso do forEach para mostrar os dados/percorrer o array
Recebe uma função e para cada elemento do array ele executa esta 
função que recebe o elemento como parâmetro
*/
/*
Uso do forEach
Exemplo com arrow function
*/
const io = require("../io")

const paises = ["Brasil", "México", "Argentina"]

paises.forEach((elem) => {
    io.write(elem + " - América do Sul")
})
