const io = require("../io")

/*Faça um programa de computador que receba do usuário três tamanhos de segmentos de reta
 e acuse se estes segmentos formam ou não os lados de um triângulo. Para formar um
  triângulo o maior segmento deve ser menor que a soma dos outros dois. Suponha que o maior
   lado sempre será digitado primeiro.*/

let maiorLado
let ladoA
let ladoB

io.write('----------------------------------------------------------')
io.write('Vou verificar se os seguimentos podem formar um triangulo')
io.write('----------------------------------------------------------')

io.write('Digite o valor do maior lado')
maiorLado = io.readFloat()
io.write('Digite um dos lados restantes: ')
ladoA = io.readFloat()
io.write('Digite um dos lados restantes: ')
ladoB = io.readFloat()



if(ladoA + ladoB > maiorLado){
    io.write('Forma-se um tringulo.')
}else{
    io.write('Não Forma um triangulo.')
}

   

