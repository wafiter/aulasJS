let apiurl = 'https://gateway.marvel.com:443/v1/public/characters'
const timestamp = (new Date()).getTime()
const publicKey = '24e8a56895cef5cf354d8d3b4a104759'
const privateKey = '8ad61342b753fb672c0bee3b28e5ee00866b2084'
const hash = timestamp + privateKey + publicKey
let hashMd5

hashMd5 = MD5.generate(hash);

const promise = fetch (`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hashMd5}`)

promise.then ( resposta =>{
    let res = resposta.json().then((respostaJason => {
        console.log(respostaJason)
        const personagens = respostaJason.data.results
        console.log(personagens)
        const content = document.getElementById('content')
        
        
        personagens.forEach(personagem => {
            const caixaPersonagem = `
            <div class="card">
                <div class="imagem"><img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}" alt=""> </div>
                <div class="conteudo">
                        <h3 class="nome" >${personagem.name}</h3>
            
                        <ul>Revistas</ul>
                        <li class="iten1">${personagem.comics.items[0].name}</li>
                        <li class="iten2">${personagem.comics.items[1].name}</li>

                        <ul>Series</ul>
                        <li class="itenS1">${personagem.series.items[0].name}</li>
                        <li class="itenS2">${personagem.series.items[1].name}</li>
                </div>
            </div>
           
            `
            content.innerHTML = content.innerHTML + caixaPersonagem

        });

    }))
    
    .catch(error =>{
        console.log('Erro: ' + error)
    })

} )

.catch(error => {
    console.log('Erro: ' + error)
  })

