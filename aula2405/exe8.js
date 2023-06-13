const io = require("../io")

io.write('------------------------------------------')
io.write('Digite o numero, pra tirar a raiz quadrada')
io.write('------------------------------------------')

let numb1
let raiz

io.write('Digite o numero ')
numb1 = io.readFloat()

raiz = numb1**(1/2)

io.write('A raiz de ' + numb1 + " é "+ raiz )