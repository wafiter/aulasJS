const io = require("../io")


/*Desafio: A sequência de Fibonacci é a sequência de números naturais que começa
 onde os dois primeiros são 1 e o próximo é a soma dos dois anteriores. Faça um
  programa que imprime os 50 primeiros termos dessa sequência*/

let Fibonacci = [1,1] 
let proximoNumero

for(let i = 2; i < 50; i++){
    proximoNumero = Fibonacci[ i - 1] + Fibonacci [i - 2]
    
    Fibonacci.push(proximoNumero)


}
    io.write(Fibonacci)
    io.write(Fibonacci.length)
