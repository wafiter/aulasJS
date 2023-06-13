const io = require("../io")

/*Fatorial de um número natural é a multiplicação dos naturais menores ou igual a ele. 5! = 5x4x3x2x1. 
Faça um programa que receba do usuário um número n calcule seu fatorial */

let n
let i = 2
let fatorial = 1


io.write('--------------------------------------------')
io.write('Digite o numero para calcular o fatorial')
io.write('--------------------------------------------')
n = io.readInt()

if(n === 0){
    fatorial = 0
}else if(n === 1){
    fatorial = 1 
    
}else{

    while(i <= n){
        
        fatorial = fatorial*i

          i++

}



}
io.write('o fatorial de '+ n + ' é ' + fatorial)
io.write('fim' )
