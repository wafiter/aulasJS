const io = require("../io")

io.write('-----------------------------------------------------------------------')
io.write('Digite dois numeros que serão divididos, e mostra o resto dessa divisão')
io.write('-----------------------------------------------------------------------')

let numb1
let numb2


io.write('Digite o primeiro numero')
numb1 = io.readFloat()
io.write('Digite o segundo numero')
numb2 = io.readFloat()

let resto = numb1 % numb2

io.write('O resto da divisão é ' + resto)
