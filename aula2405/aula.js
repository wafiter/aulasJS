const io = require("../io")


io.write("help")


let nome
io.write("Digite seu nome")
nome = io.read()

io.write("seu nome é " + nome)

io.write('')

io.readFloat() //le numeros decimais 