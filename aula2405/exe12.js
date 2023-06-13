const io = require("../io")

io.write('---------------')
io.write('calculadora')
io.write('---------------')

let numb1
let numb2
let operador
let resultado

io.write('digite o primeiro numero')
numb1 = io.readFloat()
io.write('Digite o operador')
operador = io.read()
io.write('Digite o segundo numero')
numb2 = io.readFloat()

if(operador == '+'){
    resultado = numb1 + numb2
    io.write(resultado)
}else if(operador == '-'){
    resultado = numb1 - numb2
    io.write(resultado)
}else if(operador == '*'){
    resultado = numb1 * numb2
    io.write(resultado)
}else if(operador == '/'){
    resultado = numb1 / numb2
    io.write(resultado)
}else if(operador == '**'){
    resultado = numb1 ** numb2
    io.write(resultado)
}else{
    io.write('Não reconheço essa operação')
}

