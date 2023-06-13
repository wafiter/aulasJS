const io = require("../io")

/*Crie um programa que peça os nomes e as notas
dos alunos em uma prova onde compareceram 10 alunos e depois imprima o
nome do aluno que teve a maior nota. À medida que digita um nome o
usuário deverá digitar sua nota.*/

let nomet
let notat

let nome = ' '
let nota = 0

let i = 0

while (i < 10){
    io.write('Digite o nome do aluno')
    nomet = io.read()
    io.write('Digite a nota')
    notat = io.readFloat()
   
    if(notat > nota){
        nome = nomet
        nota = notat
    }
    i++
    
}

io.write( 'o aluno com maior nota foi, nome:' + nome + ' nota:'+ nota)






