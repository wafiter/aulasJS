
const carregarCss = () => {
    console.log('chameia função')
    const body = document.getElementById('body')
    body.className = 'conteudo'

    const title = document.getElementById('title')
    title.classList.add('titulo')

    const pduplo = document.getElementById('doisParagrafo')
    pduplo.classList.add('paragrafoDual')

    const psolo = document.getElementById('paragrafosolo')
    psolo.classList.add('p1')
    
}

const mudarModo = () => {
    const body = document.getElementById('body')
    if(body.className === 'conteiner'){
        body.className = 'conteinerdark'
    }else{
        body.className = 'conteiner'
    }
   
}