/*
um exemplo de callback
*/
const io = require("../io")


function saudacao(nome){
    io.write('Olá ' + nome)
}

function despedida(nome){
    io.write('Adeus ' + nome)
}

// Uma callback é uma função que é passada como parâmetro de outra função.
// Como a função 'pai' recebe outra função por parâmetro dentro dela (a callback), essa callback pode ser chamada dentro dela com os parênteses
function processaEntrada(callback) {
    io.write("Digite o seu nome")
    const nome = io.read()
    callback(nome)
}

processaEntrada(saudacao)
processaEntrada(despedida)