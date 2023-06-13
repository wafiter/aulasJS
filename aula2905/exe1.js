const io = require("../io")



//Faça um programa que recebe do usuário um número inteiro
// n e uma frase e escreva esta frase n vezes

let frase
let n
let i = 0

io.write('---------------------------------------------------------')
io.write("Escreva a frase que deseja escrever e o numero de vezes.")
io.write('---------------------------------------------------------')
frase = io.read()
n = io.readInt()

while(i <= n){
    io.write(frase)
    i++
}
