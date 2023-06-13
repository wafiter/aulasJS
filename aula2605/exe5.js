const io = require("../io")

/*Escreva um algoritmo para ler o número total de eleitores de um município,
o número de votos brancos, nulos e válidos. 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

io.write('-----------------')
io.write('Dados da eleição')
io.write('-----------------')

let totalDeVotos 
let votosBrancos
let votosNulos
let votosValidos

io.write('Qual o total de votos')
totalDeVotos = io.readInt()

io.write('Qual a quantidade de votos Brancos')
votosBrancos = io.readInt()

io.write('Qual a quantidade de votos Nulos')
votosNulos = io.readInt()

votosValidos = totalDeVotos - votosNulos - votosBrancos


let pcvotosNulos = (votosNulos*100)/totalDeVotos
let pcBrancos = (votosBrancos*100)/totalDeVotos
let pcVotosValidos = (votosValidos*100)/totalDeVotos



io.write('---------------------------------------------------------------')
io.write('O Percentual de votos brancos é ' + pcBrancos.toFixed(2) + '%')
io.write('---------------------------------------------------------------')
io.write('O Percentual de votos Nulos é + ' + pcvotosNulos.toFixed(2) + '%')
io.write('---------------------------------------------------------------')
io.write('O Percentual de votos Validos é ' + pcVotosValidos.toFixed(2) + '%')
io.write('---------------------------------------------------------------')