import { produtoService } from "../service/produto-service"
// const cards = document.querySelectorAll('.cards');
// const filterInput = document.getElementById('filter');

// function hasWhiteSpace(text) {
//   return /\s/g.test(text);
// }

// filterInput.addEventListener('input', () => {
//   const filterText = filterInput.value.toLowerCase();

//   if (hasWhiteSpace(filterText)) return;

//   for (const card of cards) {
//     let cardTitle = card.querySelector('p');
//     cardTitle = cardTitle.textContent.toLowerCase();

//     if (cardTitle.includes(filterText)) {
//       card.style.display = 'flex';
//     } else {
//       card.style.display = 'none';
//     }
//   }
// });


const render = async () =>  {

  try {
      const listaProdutos = await produtoService.listaProduto()
      listaProdutos.forEach(elemento => {

        const criarElemento = criaNovaLinha(elemento.imageUrl, elemento.nome,elemento.valor, elemento.id, elemento.categoria)

        if(elemento.categoria == "1"){
          produto.appendChild(criarElemento)
        }

        else if(elemento.categoria == "2"){
          console.appendChild(criarElemento)
        }

        else {
          diverso.appendChild(criarElemento)
        }
    })

  }
  catch(erro){
      console.log(erro)
      window.location.href="../page/erro.html"
  }
    
}
render()

const botaoPesquisa = document.querySelector('.lupa__search')
const input = document.querySelector ('#search')
const pesquisa = document.querySelector ('[data-pesquisa]')

const produto = document.querySelector ('[data-secProduto]') 
const console = document.querySelector ('[data-console]') 
const diverso = document.querySelector ('[data-diverso]')


botaoPesquisa.addEventListener('click', async (evento) => {
    evento.preventDefault()

    pesquisa.style.display = 'flex';
    produto.style.display = 'none';


})




// function pesquisaProduto () {

//   botaoPesquisa.addEventListener('click', ()=>{


//   //     fetch('db.json')
//   //       .then(response => response.json())
//   //       .then(data => {
//   //         const matchingProducts = data.produto.filter(produto => produto.nome === input);
//   //         console.log(matchingProducts)
//   //   })
//   //   .catch(error => console.error(error));
//   // })
// }
// pesquisaProduto(produto)