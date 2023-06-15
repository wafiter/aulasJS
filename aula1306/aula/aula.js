// Primeiro
const alertarInicio = () => {
    console.log('Elemento terminou de carregar')
    window.alert('Bem vindo!')
}

// Segundo e sétimo
const alertarClique = (elemento) => {
    console.log(elemento, 'foi clicado')
    window.alert('O elemento foi clicado!')
}

// Terceiro
const modificarP = () => {
    const firstParagraph = document.getElementById('first')
    firstParagraph.innerHTML = 'Teste teste'
}

// Quarto e quinto
const inserirHtmlDiv = () => {
    document.getElementById('content').innerHTML = `
    <p>Este é um parágrafo.</p>
    <b>Este é um texto em negrito</b>`
}

// Sexto
const mudarCorTitulo = () => {
    const title = document.getElementById('title')
    title.className = 'title2'
}

// Oitavo
const alterarParagrafos = () => {
    const elements = document.getElementsByTagName('p')
    console.log(elements)

    const elementsArray = Array.from(elements)

    elementsArray.forEach((elemento) => {
        elemento.innerHTML = elemento.innerHTML + 'TESTE'
    })
}

// Nono
const mudarDescricao = (id) => {
    const elemento = document.getElementById(id)
    const descricao = elemento.querySelector('.descricao')
    descricao.classList.add('bold')
}