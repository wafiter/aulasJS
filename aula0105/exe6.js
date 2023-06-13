const io = require('../io')

/*Desafio: faça um programa para imprimir em ordem inversa a sequência de Fibonacci.
 O número de elementos na sequência deverá ser informado pelo usuário.*/


 io.write('--------------------------------------------------------')
 io.write('Quantos numeros da sequencia fibonacci vc quer imprimir')
 io.write('--------------------------------------------------------')

let Q = io.readInt()

let fibonacci = [1,1] 


for(let i = 2; i < Q  ; i++){
    let proximoNumero = fibonacci[ i - 1] + fibonacci [i - 2]
    
    fibonacci.push(proximoNumero)


}

io.write(fibonacci)

for(let i = Q -1; i >= 0; i--){

    io.write (fibonacci[i])
}

