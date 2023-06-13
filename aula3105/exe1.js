const io = require("../io")

/*Escreva um programa de computador que solicite login e senha para um usuário. 
Caso o login e senha estejam corretos, exiba na tela a mensagem "Bem vindo ao sistema", 
caso contrário exiba a mensagem "Dados inválidos".
 Os valores de login e senha corretos devem ser definidos em variáveis pelo programador. */
usuario = 'wafiter'
password = 'minhasenha'

 io.write('-----------------------')
 io.write('Bem vindo ao Sistema')
 io.write('-----------------------')

 io.write('Digite seu loguin')
 let loguin = io.read('')
 
 if(loguin == usuario){
    io.write('Digite sua senha')
    let senha = io.read()
  
    if(senha == password){
        io.write('Bem vindo ao sistema')
    }else{
        io.write('SENHA INVALIDA')
    }

 }else{
    io.write('LOGUIN INVALIDO')
 }
