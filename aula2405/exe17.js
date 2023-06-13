const io = require("../io")

/*Faça um programa de computador que receba um número natural e acuse
se é primo ou não. Números primos são os naturais maiores que 1 que que
possui somente 2 divisores.*/


let numero

let divisores = 0

io.write('Qual numero deseja verifica se é primo ou não')

numero = io.readInt()

for(let i = 2; i < numero ; i++){
   
    if(numero % i === 0){
      divisores = divisores + 1
       
    }
    }
    io.write(divisores)

if(divisores > 0){ 
    io.write('Não é primo')

}else{
    io.write('O numero ' + numero + ' è primo')

}
