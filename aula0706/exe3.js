const io = require("../io")

/*Faça um programa para receber nome e idade de 10 funcionários (nome, matrícula, cargo e salário).
 Depois faça um método que aumente o salário de cada um em 10%. Mostre a soma dos salários antes
  e depois do aumento (use o método de array .reduce() para somar).*/
const funcionarios = []



for(let i = 0; i < 1; i++){
    io.write('--Cadastre o funcionario--')
    io.write('Digite o Nome: ')
    let nome = io.read()
    io.write('Digite a matricula: ')
    let matricula = io.readInt()
    io.write('Digite o cargo: ')
    let cargo = io.read()
    io.write('Digite o Salario: ')
    let salario = io.readFloat()

    let funcionario = {
        nome,
        matricula,
        cargo,
        salario,
    }
    
    funcionarios.push(funcionario)


}
  io.write(funcionarios)
// Função para aumentar o salário de cada funcionário em 10%
function aumentarSalario(funcionarios) {
    return funcionarios.map(funcionario => {
      funcionario.salario *= 1.1; // Aumenta o salário em 10%
      return funcionario;
    });
  }

  
let salario = aumentarSalario(funcionarios) 
io.write(salario)