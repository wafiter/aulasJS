/*Faça uma função que recebe um valor inteiro e verifica se o valor é par.
 A função deve retornar um valor booleano.*/

 const io = require('../io')

let verificapar = (n1) => {
    if(n1 % 2 == 0){
        return true
    }else{
        return false
    }
}
    

 io.write(verificapar(8))