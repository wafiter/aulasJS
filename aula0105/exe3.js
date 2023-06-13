const io = require('../io')

/*Faça um programa de computador que recebe do usuário 10 números
 e depois imprime os pares e depois os ímpares*/

io.write('----------------------------------------------------')
io.write('Digite 10 Numeros para separar os pares dos impares')
io.write('----------------------------------------------------')

let numeros = []
let numero
let par = []
let impar = []

for(let i = 1; i <=10; i++){
    io.write('Digite o numero ' + i + ' da lista')
    numero = io.readFloat()
    numeros.push(numero)
}

io.write('A lista de numeros é ' + numeros)


for(let i = 0; i < numeros.length; i++){
    
    if(numeros[i] % 2 == 0){
       
       
        par.push(numeros[i])

    }else{      
        impar.push(numeros[i])
    }


}
io.write(numeros[3])

io.write('Os numeros Pares são ' + par)
io.write('Os numeros impares são ' + impar)