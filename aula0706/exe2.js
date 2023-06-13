const io = require("../io")

/*Faça um programa para receber os dados de 10 alunos (nome, matrícula e nota)
criando um objeto para cada aluno. Depois aumentar em 10% as notas dos alunos
 com matrícula maior que 1000 e mostrar a lista de alunos atualizada.*/
const alunos = []

for(let i = 0; i <= 1; i++){
    io.write('--cadastre o aluno--')
    io.write('Nome do aludo: ')
    let nome = io.read()
    io.write(`Digite numero da matricula: `)
    let matricula = io.readInt()
    io.write(`Digite a nota do aluno:`)
    let nota = io.readInt()
    let id = i

    const aluno ={
        id,
        nome,
        matricula,
        nota,
    }
    alunos.push(aluno)
}
function aumentarNotas(alunos) {
    return alunos.map((aluno) => {
      if (aluno.matricula > 1000) {
        aluno.nota += aluno.nota * 0.1
      }
      return aluno
    })
    return alunos
  }
  
aumentarNotas(alunos)

function exibirAlunos(alunos) {
    for (let i = 0; i < alunos.length; i++) {
      console.log(`ID: ${alunos[i].id}, Nome: ${alunos[i].nome}, Matrícula: ${alunos[i].matricula}, Nota: ${alunos[i].nota}`)}
    }

    exibirAlunos(alunos)