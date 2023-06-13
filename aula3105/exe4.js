const io = require("../io")

/*Faça um programa que peça ao usuário um número natural e imprima seus divisores.
Faça um programa de computador para contar e imprimir a quantidade de divisores que 
um número natural possui. Este número deverá ser fornecido pelo usuário.*/

let numero

io.write('------------------------------------------------')
io.write('Qual é numero que deseja imprimir os divisores?')
io.write('------------------------------------------------')

numero = io.readInt()

for(let i = 1; i < numero ; i++){
   
    if(numero % i === 0){
        io.write('')
        io.write('o numero ' + numero + ' é divisivel por: ' + i)
       
    }
    }