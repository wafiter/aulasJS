const io = require("../io")

/*Faça um programa para imprimir os múltiplos de 5 menores ou igual a n,
sendo n fornecido pelos usuários.*/

let n
io.write('-----------------------------------------------')
io.write('Até onde devo mostar os multiplos de 5 ? ' )
io.write('-----------------------------------------------')

n = io.readInt()

for (let i = 0; i <= n ; i++) {
    if( i % 5 === 0 ){
        io.write(i)
    }
    
    
    
}