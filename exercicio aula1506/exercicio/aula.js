
const formulario = document.getElementById('meuForm')

console.log(formulario)

    formulario.addEventListener('submit', (event) =>{
    event.preventDefault() //previne o comportamento padrão do formulario, de enviar e recarregar
   
    //criar todas as variaveis que vou usar na função
   
    const codigo = formulario.elements['codigo']
    const nome = formulario.elements['nome']
    const categoria = formulario.elements['categoria']
    const preco = formulario.elements['preco']
    const quantidade = formulario.elements['quantidade']
    
         //usar o "parentNode" acessa o elemento pai 
    const mensagemErroCodigo = codigo.parentNode.querySelector('small')
    const mensagemErroNome = nome.parentNode.querySelector('small')
    const mensagemErroCategoria = categoria.parentNode.querySelector('small')
    const mensagemErroPreco = preco.parentNode.querySelector('small')
    const mensagemErroQuantidade = quantidade.parentNode.querySelector('small')
   
    
        //value.trim = se eu retirar os espaços do valor que esta no campo codigo e sobrar nada 
    if(codigo.value.trim() == ''){
        mensagemErroCodigo.innerText = 'campo obrigatorio'
    }else{
        mensagemErroCodigo.innerText = ''
    }
                


} )