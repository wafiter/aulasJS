const io = require("../io")

/* Faça um programa que leia a idade e altura de diversas pessoas. Calcule e
imprima maior idade e a altura média*/
let idadet
let idade = 0 
let altura
let alturat 
let contador = 0
let deslog
let alturaM

while(deslog !== 0 ){
    
    io.write('digite a idade')
    idadet = io.readFloat()
    if(idadet > idade){
        idade = idadet
    }
    
    io.write('digite a altura')
    alturat = io.readFloat()
    altura = altura + alturat
    contador++  

    io.write('Para sair digite 0')
    deslog = io.readInt()
    alturaM = (altura/contador)
} 

io.write ('a maior idade é ' + idade)
io.write('A altura media é '+ (alturaM) )
  