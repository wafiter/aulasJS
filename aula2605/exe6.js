const io = require("../io")


/*Escreva um algoritmo para ler o salário mensal atual de um funcionário
e o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

let salario
let reajuste
let novoSalario

io.write('--------------------------------')
io.write('Vamos calcular seu novo salario')
io.write('--------------------------------')

io.write('Qual o valor do seu salario')
salario = io.readFloat()

io.write('Qual o valor do reajuste em %')
reajuste = io.readFloat()

reajuste = reajuste/100

novoSalario = (reajuste*salario) + salario

io.write('voce recebera ' + novoSalario.toFixed(2) + 'R$')