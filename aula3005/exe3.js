const io = require("../io")


/*Faça um programa para pedir 10 nomes de pessoas ao usuário e acusar quantas se chamam “Maria” */

let nome
let n = 0

io.write('-------------------------------')
io.write('Escreva o nome de 10 pessoas: ')
io.write('-------------------------------')

    for(let i =1; i <= 10; i++){
        nome = io.read()
        if(nome == 'maria'){
            n++
        }
    }

io.write('Escreveu maria '+ n + ' vezes' )