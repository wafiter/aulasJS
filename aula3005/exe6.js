const io = require("../io")

/*Faça um programa para receber 10 números do usuário e acusar qual deles é o maior número */
let maior = 0
let numero = 0
io.write('Digite 10 numeros')

for(let i = 1; i <= 10; i++){
    io.write(i + ' numero')
    numero = io.readInt()
    if(numero > maior){
        maior = numero
    }
}

io.write('O maior numero é '+ maior)
