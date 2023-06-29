//buscar e mostrar as noticias

const buscarNoticia = async () => {
  try {
    const apiResposta = await fetch("http://localhost:3000/noticias");
    const noticias = await apiResposta.json();
    console.log(noticias);
        
    mostraConteudo(noticias);
  } catch (error) {
    console.error(error);
  }
};
//buscar os autores
const buscarAutores = async () => {
  try {
     const apiAutorRes = await fetch("http://localhost:3000/autores");
     const autores = await apiAutorRes.json()
     console.log(autores)

     fazerSelect(autores)

  } catch (error) {
    console.log(error)
  }
}
const fazerSelect = (autores) =>{
  let select = document.getElementById('autores')
  autores.forEach((autor) =>{
    select.innerHTML = select.innerHTML + `<option id="${autor.id}" value="${autor.id}">${autor.nome}</option>`
  } )
 
} 


const mostraConteudo = (arr) => {
  let conteiner = document.getElementById("conteiner");
  conteiner.innerHTML = "";

  arr.forEach((element) => {
    let imagem = element.imagem;
    let titulo = element.titulo;
    let texto = element.texto;
    let id = element.id;

    console.log(imagem);
    conteiner.innerHTML =
      conteiner.innerHTML +
      `
    <div class="noticias">
    <div><img class= "imgNoticias" src="${imagem}" alt=""></div>
    
    <div class="texto">
        <h2 class="titluto" >${titulo}</h2>

        <p>${texto}</p>
        <div class="botoes" >
        <button onclick="editarNoticia(${id})" class="editar" >Editar</button> 
        <button onclick="deletarNoticia(${id})" class="excluir">Excluir</button>
        </div>
        
    </div> 
    </div>
    `;
  });
};

//botão nova noticia
const novaNoticia = () => {
  window.location = "criarNoticia.html";
};

//criar a noticia capturando o formulario

const cadastrarNoticia = async (noticia) => {
  try {
    await fetch("http://localhost:3000/noticias", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noticia),
    });
    window.location = "index.html";
  } catch (error) {
    console.log(error);
  }
};

const buscarAutor = async (id) => {
  if(id == null){
      return false
  }
  const resposta = await fetch(`http://localhost:3000/autores/${id}`)
  const autor = await resposta.json()
  return autor
}
// submit do formulario

const formulario = document.getElementById("formNoticia");

console.log(formulario);

if (formulario) {
  formulario.addEventListener("submit", async (event)  => {
    event.preventDefault();

    const titulo = formulario.elements["titulo"].value;
    const autor = formulario.elements["autores"].value;
    const imagem = formulario.elements["imagem"].value;
    const texto = formulario.elements["texto"].value;

    const autorObjeto = await buscarAutor(autor)

    console.log(autorObjeto)
    
    const noticia = {
      titulo: titulo,
      autor: {
        nome: autorObjeto.nome,
        id: autorObjeto.id,
      },
      imagem: imagem,
      texto: texto,
    };
    console.log(noticia);
    cadastrarNoticia(noticia);
  });
}

const editarNoticia = (id) => {
  window.location = `editar.html?id=${id}`;
};

//deletar noticia

const deletarNoticia = async (id) => {
  try {
    await fetch(`http://localhost:3000/noticias/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    buscarNoticia();
  } catch (error) {
    console.error(error);
  }
};
