const io = require('../io')


/*Faça um programa de computador para receber 10 nomes de alunos
 e suas respectivas notas e depois imprimir as notas e nomes daqueles
  que obtiveram notas maiores que 7 */
let nomes = []
let notas = []


io.write('-------------------------------')
io.write('Cadastre o alunoe e sua nota.')
io.write('-------------------------------')  

for(let i =1; i <= 10; i++){
    io.write('Digite o nome do aluno: ')
    let nome = io.read()
    io.write('Digite a nota do aluto: ')
    let nota = io.readFloat()
    nomes.push(nome)
    notas.push(nota)
}

for(let i = 0; i < notas.length; i ++){
    
    if(notas[i] > 7){
        io.write('aluno aprovado -- nome: ' + nomes[i] + ' nota: ' + notas[i] )
    }


}


  
  
