const io = require("../io")

/*Faça um programa de computador para escrever  1 - ímpar, 2 - par, 3 - ímpar, …. até n,
 sendo n fornecido por um usuário.*/

let n 
let i = 1
io.write('--------------------------------')
io.write('Ate qual numero quer contar? ')
io.write('--------------------------------')
n = io.readInt()

while(i <= n){
    io.write((i + ' - impar'))
   
    i++
   
    io.write((i + ' - par'))
    
    i++
}