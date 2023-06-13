const io = require('../io')

// Faça um programa para calcular a média de 3 notas de um determinado aluno. Este programa deverá conter uma função que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deverá retornar o valor da média calculada.


function calculaMediaDeTres(nota1, nota2, nota3, letra){
    if(letra == 'A'){
        const soma = nota1 + nota2 + nota3
        const media = soma / 3
        return media
    }

    if(letra == 'P'){
        const nota1Ponderada = nota1 * 5
        const nota2Ponderada = nota2 * 3
        const nota3Ponderada = nota3 * 2

        const soma = nota1Ponderada + nota2Ponderada + nota3Ponderada
        const media = soma / 10
        return media
    }

    if(letra != "A" && letra != "P"){
        return 'Código inválido'
    }
}



io.write('Digite a primeira nota:')
const primeiraNota = io.readFloat()

io.write('Digite a segunda nota:')
const segundaNota = io.readFloat()

io.write('Digite a terceira nota:')
const terceiraNota = io.readFloat()

io.write('Digite um código(A/P):')
const codigo = io.read()

const resultado = calculaMediaDeTres(primeiraNota, segundaNota, terceiraNota, codigo)
io.write(resultado)