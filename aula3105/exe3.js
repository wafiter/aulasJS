const io = require("../io")


/*Faça um programa de computador que leia números reais maiores que zero. Quando for digitado o número zero, o programa deverá apresentar 
quantos números foram entrados e a média destes.*/
let numero
let soma = 0

io.write('-------------------------------------------')
io.write('Digite os numeros que deseja tirar a media')
io.write('-------------------------------------------')


for(let i = 0; numero != 0; i++ ){
    
    numero = io.readInt()
    soma = numero + soma
    
    if(numero == 0){

        io.write('a media é = ' + (soma/i) )
    }
}
