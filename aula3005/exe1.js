const io = require("../io")

/*Faça um programa para escrever seu nome 100 vezes*/

let nome
let n

io.write('qual o seu nome e quanta vezes quer que escreva')
nome = io.read()
n = io.readInt()

for(let i=1;i <= n;i++){
    io.write(nome)
}