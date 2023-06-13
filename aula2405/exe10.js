const io = require("../io")

io.write('---------------------------------------------')
io.write('Vamos calcular quanto ja gastou com cigarros')
io.write('---------------------------------------------')

let anosFumando
let cigarrosDia
let precoDaCarteira
let valorGasto

io.write('A quantos anos voce fuma?')
anosFumando = io.readFloat()
io.write('Quantos cigarros você fuma por dia?')
cigarrosDia = io.readFloat()
io.write ('Quanto você paga na carteira de cigarro ?')
precoDaCarteira = io.readFloat()

valorGasto = ((anosFumando* 365 * cigarrosDia)/20)*precoDaCarteira

io.write('Você ja gastou ' + valorGasto + ' Com cigarros' )

