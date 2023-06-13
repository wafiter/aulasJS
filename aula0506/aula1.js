/*
um exemplo de arrow function
*/
const io = require("../io")

//Forma tradicional de declarar uma função
function media1(n1,n2){
    return (n1 + n2)/2
}

//Função anônima salva em uma variável
const media2 = function (n1,n2){
    return (n1 + n2)/2
}

//Arrow function salva em uma variável
const media = (n1,n2) => {
    return (n1 + n2)/2
}

io.write(media(10,20))