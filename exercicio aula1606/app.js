const formulario = document.getElementById('formulario')
let usuario
let emailusu
                                                       //sempre capturar, event listener tem que ter 1 parametro e uma callback
formulario.addEventListener('submit', (event)=>{
    event.preventDefault()

    const nome = formulario.elements['nome']
    const cpf = formulario.elements['cpf']
    const email = formulario.elements['email']
    const senha = formulario.elements['senha']

    let nomeC = nome.value 
    let cpfC = cpf.value
    let emailC = email.value
    let senhaC = senha.value

    console.log(nomeC,senhaC,cpfC,emailC)

    const cadastro = document.getElementById('modalConteudo')

    cadastro.innerHTML = `<h3>Seja bem vindo(a), ${nomeC}! </h3>
    <p>Um e-mail de confirmação foi enviado para: ${emailC}</p>
    <button id="fexarmodal" onclick="closeModal()" > OK </button>`

    const modal = document.getElementById('meuModal')
    

    modal.style.display = 'block'

    






})

const closeModal = () => {
    meuModal.style.display = "none"
  }