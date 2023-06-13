const io = require('../io')

//Faça um programa  de computador para receber 10 números inteiros e depois imprimir seus sucessores.

let listaDeNumeros = []
let numero

io.write('----------------------------------------------')
io.write('Digite 10 numeros, devolveirei os sucessores.')
io.write('----------------------------------------------')

for(let i = 0;i < 10; i++){

    io.write('digite o numero')
    numero = io.readInt()
    listaDeNumeros.push(numero + 1)
    
    
}
io.write('Os sucessores são ' + listaDeNumeros)