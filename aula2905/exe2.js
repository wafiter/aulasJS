const io = require("../io")

/*Faça um programa que receba do usuário 20 números
 e imprima a média aritmética desses números*/

let numero
let i = 0 
let soma = 0


while(i <= 20 ){
    io.write('Digite os numeros para ser feita a M.A.')
    numero = io.readInt()
    soma = numero + soma
    i++

}

io.write('a soma é ' + soma)
io.write('A media é ' + (soma/20))
