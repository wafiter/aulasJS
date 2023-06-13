const io = require("../io")

// 5
io.write("-----------------------------------")
io.write("Digite dois numeros a serem somados")
io.write("-----------------------------------")

let numb1
let numb2
let soma

io.write("digite o primeiro numero")
numb1 = io.readFloat()

io.write("Digite o segundo numero")
numb2 = io.readFloat()

soma = numb1 + numb2

io.write("A soma é " + soma)