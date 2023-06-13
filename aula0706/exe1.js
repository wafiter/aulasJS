const io = require("../io")


/*Faça um programa para receber dados de 10 pessoas (nome, idade e documento)
 criando um objeto para cada pessoa. 
Depois mostrar as que são maiores de idade (use o método de array .filter() para filtrar).*/

const pessoas = []

for(let i = 0; i <= 10; i++){
    io.write('Digite o nome da pessoa: ')
    let nome = io.read()
    io.write('Digite a Idade da pessoa: ')
    let idade = io.read()
    io.write('Digite o CPF da pessoa: ')
    let cpf = io.readInt()
    let id = i
    
    const pessoa ={
        id, 
        nome,
        idade,
        cpf,

    }  
    pessoas.push(pessoa)
}


io.write(pessoas)