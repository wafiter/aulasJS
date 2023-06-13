const io = require("../io")

/*Faça um programa que leia a idade e a altura de 5 pessoas. 
 Ao final, o programa deverá acusar a maior 
 Idade e a média das alturas. */

let idade
let altura

let maiorIdade = 0
let mediaAltura = 0


for(let i = 1; i <= 5; i++){
    io.write('Digite a idade e a altura (em cm), sucessivamente')
    idade = io.readInt()
    altura = io.readFloat()
    
    if(idade > maiorIdade){
        maiorIdade = idade
    }
    mediaAltura = altura + mediaAltura
}

io.write ('A maior idade é '+ maiorIdade + ', e a media das altura é ' + (mediaAltura/5) ) 

