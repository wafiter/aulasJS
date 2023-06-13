const io = require("../io")
//Construa um programa de computador que recebe do usuário os lados de
//um retângulo e escreva sua área

let B
let H 
let area

io.write("Para calcular a area do triangulo informe a ALTURA")
H = io.readFloat()

io.write('Agora informe o tamnaho da sua base')
B = io.readFloat()

area = (B*H)/2

io.write ('A area do Triangulo é ' + area)