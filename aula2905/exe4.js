const io = require("../io")

let i = 5
let n


/**Faça um programa para imprimir os múltiplos de 5 menores ou igual a n,
 *  sendo n fornecido pelos usuários. Não use comando de decisão. */

io.write('Ate onde quer ver os multiplos de 5 ?')
n = io.readInt()

while(i <= n ){
    io.write(i)
    i+=5
    
}
