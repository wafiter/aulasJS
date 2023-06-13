const io = require("../io")

io.write('-----------------------------------')
io.write("Digite o numero para ser dividido")
io.write('-----------------------------------')

let numero
let divisao

numero = io.readFloat()
divisao = numero/2

io.write("A divisão de " + numero + " é " + divisao )

