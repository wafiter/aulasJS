const alunos = []

for (let i = 0; i < 3; i++){
    io.write("Digite um nome para o Aluno:")
    const nome = io.read()
    io.write("Digite uma nota para o Aluno:")
    const nota = io.read()

const aluno = {
id: 1,
    	nome,
nota //quando o atributo e a variável tem o mesmo nome, não é necessário escrever os dois
}
alunos.push(aluno)
}

console.log(alunos)

//Métodos de array com objetos
	
//mostrando os alunos e suas notas
alunos.forEach((aluno) => {
	console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota}`)
})

	//adicionando 1 ponto a cada aluno
const alunosAtualizados = alunos.map((aluno) => {
	aluno.nota = aluno.nota + 1
	return aluno
})

//filtrando apenas alunos aprovados
const alunosAprovados = alunos.filter((aluno) => {
	return aluno.nota > 7
})

//somando as notas
const somaNotas = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota
}, 0)
