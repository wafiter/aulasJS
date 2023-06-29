const url =
  "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1db2d08d9emsha0e52c95f556a85p10dce0jsnbd0127ff3a85",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};
let results

const buscaReceitas = async () => {
  try {
    const response = await fetch(
      "https://tasty.p.rapidapi.com/recipes/list",
      options
    );
    const result = await response.json();
    console.log(result);
    //De cada receita serão utilizados os atributos id, name e thumbnail_url para serem mostrados em cada card
    results = result.results;
    console.log(results);

    results.forEach((elemento) => {
      let nome = elemento.name;
      let id = elemento.id;
      let thumb = elemento.thumbnail_url;
      let descricao = elemento.description;

      let card = document.getElementById("conteiner");

        card.innerHTML =
        card.innerHTML +
        `                                   <div id="card" >
                                            <h3 class="nomes">${nome}</h3>
                                            <div class="imgs"><img src="${thumb}" alt=""></div>
                                            <button class="btnEx" onclick="exibirModal('${id}')" id="${id}" >Ver Descrição</button>
                                             </div>   
           
           `;
    });
  
    
  } catch (error) {
    console.error(error);
  }
};

buscaReceitas();


const exibirModal = (param) => {
       
    results.forEach((elemento) => {
        
      if (elemento.id == param) {
        let conteudo = document.getElementById('modalConteudo');
        conteudo.innerHTML = `<button onclick ="fexarModal()" id="closeButton">X</button>
                            <div id="nome">${elemento.name}</div>
                            <div id= "descri">${elemento.description}</div> 
                            `;
       
        let modal = document.getElementById('modal')
        modal.style.display = 'block'                    

      }

    });
  };

const fexarModal = () => {
    let modal = document.getElementById('modal')
    modal.style.display = 'none'
}  
