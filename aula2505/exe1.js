const io = require("../io")

/*Faça um programa de computador que receba do usuário 2 números e acuse qual é o maior*/

let numb1
let numb2

io.write('Digite o primiero numero')
numb1 = io.readFloat()
io.write('Digite o segundo numero')
numb2 = io.readFloat()

if(numb1 > numb2 ){
    io.write('o primeiro é maior')
}else if(numb1 == numb2){
    io.write('os numeros são iguais')
    
}else{
    io.write('O segundo é maior')
}
    
