const io = require("../io")


/*Escreva uma função que transforme todos os membros de um array qualquer em texto.
 Dica: todas as variáveis javascript possuem uma função .toString()*/

function viratexto (vetorx) {
    let vetorTxt = vetorx.map((elem) =>{
        return elem.toString()
    })
    
    return vetorTxt
} 

const vetor = [1,2,43,54,654,"xx", "ab", 45] 


const vetortexto = viratexto(vetor)

io.write(vetortexto)