const io = require('../io')


/*Faça um programa de computador para receber preços de
 10 produtos e depois imprimir os preços que estão acima da média.*/

let produtos = []
let produto 


io.write('------------------------------')
io.write('Digite os preços do produto: ')
io.write('------------------------------')

for(let i = 1; i <= 10; i++){
    io.write('preço do produto Numero '+ i)
    produto = io.readFloat()
    produtos.push(produto)

}
let somaP = 0
io.write(produtos)

for(let i = 0; i < produtos.length; i++){
    
    somaP = somaP + produtos[i]
    io.write(somaP)


}
let media = (somaP/produtos.length)

io.write('A media de preços é ' + media)



