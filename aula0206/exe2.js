const io = require('../io')

/*Faça uma função que recebe a idade de um nadador por parâmetro e retorna
 a categoria desse nadador de acordo com a tabela abaixo:   */
 let idade
 

 function categoria(idade){

    if(idade >= 5 && idade <= 7){

        return 'categoria Infantil A'
        
    }
    if( idade >= 8 && idade <= 10){

        return 'categoria Infantil B'
        
    }
    if(idade >= 11 && idade <= 13 ){

        return 'categoria Juvenil A'
        
    }
    if(idade >= 14 && idade <= 17){

        return 'categoria Juvenil B'
        
    }

 }
 
 
 io.write('Digite a idade do nadador')
 idade = io.readInt()

 io.write(idade)

 io.write('Ele vai nada na categoria ' + categoria(idade))
 