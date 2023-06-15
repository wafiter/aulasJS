const exibirConteudo = (param) => {
    
  const mostrar = document.getElementById(param)

  if (mostrar) {
   if (mostrar.style.display === 'none') {
     mostrar.style.display = 'block';
   } else {
     mostrar.style.display = 'none';
   }
 }

}