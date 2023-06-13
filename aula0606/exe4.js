const io = require("../io")


/*Dado um array qualquer, escreva uma função que multiplica todos os números desse array por
3 quando o número for ímpar e por 4 quando o número for par.
E depois filtre deste array os números menores que 100. */
let array = [1,2,3,54,42,5,26,47,8,9]


function manipulaArray (vetor) {
    let novoArrey = vetor.map((elem) => {
        if(elem % 2 == 0){
            elem = elem * 2
            return elem
        }else{
            elem = elem * 3
            return elem
        }
    })
    let maior100 = novoArrey.filter((novo) =>{
        return novo > 100
    })
    return maior100
} 


let teste = manipulaArray(array)

io.write(teste)