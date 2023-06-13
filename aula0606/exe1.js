const io = require("../io")

/*Escreva uma função que recebe como parâmetro um array de números. Dado este array, a função deverá:

Deixar no array somente os números ímpares (utilize filter)

Somar todos os números restantes (utilize reduce)

Escrever a string	 "Javascript é muito bom" no console um número x de vezes,
sendo x a soma dos números restantes do array*/

let numeros = [1,2,45,53,435,35,67,87,32,44,34,32,54]

function usarray (numeros){

    let impareN = numeros.filter((ind) => {
        return ind % 2 != 0
    })
    let soma = numeros.reduce((acum,numb) => {
        return acum + numb
    }, 0)
    
    for(i = 0;i < soma; i++){
        io.write("Java script é muito bom")
    }
} 


usarray(numeros)
