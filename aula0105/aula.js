const io = require('../io')

let listaNomes = []

for(let i = 0; i < 5; i++){
    io.write("Digite um nome:")
    const nome = io.read()
    listaNomes.push(nome)
}

io.write(listaNomes)


//


const io = require('../io')

const listaNumeros = []

for(let i = 0; i < 5; i++){
    io.write("Digite um número:")
    const num = io.readInt()
    listaNumeros.push(num)
}

for(let i = 4; i >=0; i--){
    io.write(listaNumeros[i])
}


io.write(listaNumeros)


//
const io = require('../io')

const listaNumeros = []

//Adiciona todos os números no array
for(let i = 0; i < 10; i++){
    io.write("Digite um número:")
    const num = io.readInt()
    listaNumeros.push(num)
}

//Itera o array, somando todos os números dentro dele e salvando em uma variável
let total = 0
for(let i = 0; i < listaNumeros.length; i++){
    total = total + listaNumeros[i]
}

//Calcula a média aritmética
const media = total / listaNumeros.length
io.write(listaNumeros)
io.write(media)

//Itera o array, verificando se cada número é menor do que a média. Se verdadeiro, imprime o número
for(let i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] < media){
        io.write(listaNumeros[i])
    }
}