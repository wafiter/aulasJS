// Faça um programa de computador para simular uma calculadora. Cabe ao usuário digitar dois valores e um dos operandos a seguir: +, - , *, ^). Para cada operação faça uma função.

const io = require('../io')

function calculadora(n1, n2, operador){
    if(operador == '+'){
        return soma(n1,n2)
    }

    if(operador == '-'){
        return subtrai(n1,n2)
    }

    if(operador == '*'){
        return multiplica(n1,n2)
    }

    if(operador == '^'){
        return potencia(n1,n2)
    }
}

function soma(n1, n2){
    return n1 + n2
}

function subtrai(n1, n2){
    return n1 - n2
}

function multiplica(n1, n2){
    return n1 * n2
}

function potencia(n1, n2){
    return n1 ** n2
}


let result = calculadora(5, 3, '+')
result = calculadora(8,2, '-')
result = calculadora(3,2, '^')
result = calculadora(7,2, '*')
io.write(result)
