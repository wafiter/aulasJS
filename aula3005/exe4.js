const io = require("../io")

/*Faça um programa para escrever de 1 a n, sendo n fornecido pelo usuário */

let n
io.write('Até que numero deseja contar?')
n =io.readInt()
for(let i = 0; i <= n; i++){
    io.write(i)
}