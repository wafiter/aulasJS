
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
    let mensagemErroCodigo = codigo.parentNode.querySelector('small')
    let mensagemErroNome = nome.parentNode.querySelector('small')
    let mensagemErroCategoria = categoria.parentNode.querySelector('small')
    let mensagemErroPreco = preco.parentNode.querySelector('small')
    let mensagemErroQuantidade = quantidade.parentNode.querySelector('small')
   
    
        //value.trim = se eu retirar os espaços do valor que esta no campo codigo e sobrar nada 
    if(codigo.value.trim() == ''){        
        mensagemErroCodigo.innerText = '*Campo obrigatorio'
        let input = document.getElementById('codigo');
        input.style.borderColor = 'red'

    }else{
        mensagemErroCodigo.innerText = ''
        let input = document.getElementById('codigo');
        input.style.borderColor = 'green'
    }
    if(nome.value.trim() == ''){
        mensagemErroNome.innerText = '*Campo obrigatorio'
        let input = document.getElementById('nome');
        input.style.borderColor = 'red'
    }else{
        mensagemErroNome.innerText = ''
        let input = document.getElementById('nome');
        input.style.borderColor = 'green'
    }
    if(categoria.value === 'Selecione' ){
        mensagemErroCategoria.innerText = '*Campo obrigatorio'
        let input = document.getElementById('categoria');
        input.style.borderColor = 'red'
    }else{
        mensagemErroCategoria = ''
        let input = document.getElementById('categoria');
        input.style.borderColor = 'green'
    }
    if(preco.value.trim() == ''){
        mensagemErroPreco.innerText = '*Campo obrigatorio'
        let input = document.getElementById('preco');
        input.style.borderColor = 'red'
    }else{
        mensagemErroPreco.innerText = ''
        let input = document.getElementById('preco');
        input.style.borderColor = 'green'
    }
    if(quantidade.value.trim() == ''){
        mensagemErroQuantidade.innerText = '*Campo obrigatorio'
        let input = document.getElementById('quantidade');
        input.style.borderColor = 'red'
    }else{
        mensagemErroCategoria = ''
        let input = document.getElementById('quantidade');
        input.style.borderColor = 'green'
    }
                
    const codigoC = codigo.value
    const nomeC = nome.value
    const categoriaC = categoria.value
    const precoC = preco.value
    const quantidadeC = quantidade.value
    
    console.log(codigoC,nomeC,categoriaC,precoC,quantidadeC)
    let estoque = quantidadeC * precoC
    const cadastrado = document.getElementById('produtoCadastrado')

    cadastrado.innerHTML = `<h1>#${codigoC}-${nomeC}</h1>
                            <div class='divx' ><b>Categoria</b> ${categoriaC}</div>           
                            <div class='divx' ><b>Preço</b> ${precoC}</div> 
                            <div class='divx'><b>Quantidade</b> ${quantidadeC}</div>
                            <h3 style="text-align: center;">${estoque}</h3>    
    `                       
                            


} )



