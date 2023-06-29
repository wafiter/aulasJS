//----editar noticia----
let id = null;

const getIdUrl = () => {
  const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  id = params.get("id");
};

const buscaNoticia = async (id) => {
  const response = await fetch(`http://localhost:3000/noticias/${id}`);
  const noticiaE = await response.json();
  console.log("buscando na api");
  return noticiaE;
};

const salvarNoticiaEdit = async (noticiaE) => {
  await fetch(`http://localhost:3000/noticias/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noticiaE),
  });

  window.location = "index.html";
};




//form de editar
const formEditar = document.getElementById("formEditNoticia");

const carregarDadosFormulario = async (noticiaE) => {
  document.getElementById("titulo").value = noticiaE.titulo;
  document.getElementById("autores").value = noticiaE.autor.nome;
  document.getElementById("imagem").value = noticiaE.imagem;
  document.getElementById("texto").value = noticiaE.texto;
};

formEditar.addEventListener("submit", async (event) => {
  event.preventDefault();

  let titulo = formEditar.elements["titulo"].value;
  let autor = formEditar.elements["autores"].value;
  let imagem = formEditar.elements["imagem"].value;
  let texto = formEditar.elements["texto"].value;

  const autorObjeto = await buscarAutor(autor)

  const noticiaE = {
    titulo: titulo,
    autor:{
      nome: autorObjeto.nome,
        id: autorObjeto.id,
    },
    imagem: imagem,
    texto: texto,
  };
  salvarNoticiaEdit(noticiaE);
});

const carregarDados = async () => {
  getIdUrl();
  console.log(id);
  const noticiaE = await buscaNoticia(id);
  console.log(noticiaE);

  carregarDadosFormulario(noticiaE);
};

carregarDados();
