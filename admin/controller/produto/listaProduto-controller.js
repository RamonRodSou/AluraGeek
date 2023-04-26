import { produtoService } from '../../service/produto-service.js'

const produto = document.querySelector ('[data-produto]') 
const console = document.querySelector ('[data-console]') 
const diverso = document.querySelector ('[data-diverso]')
const containers = document.querySelectorAll ('[data-secProduto]')
const descricao = document.querySelector ('[data-descricao]')



const criaNovaLinha = (imageUrl, nome, valor, id, categoria) =>  { 
    const linhaNovoProduto = document.createElement('article')  
          linhaNovoProduto.classList.add('item')
          
  
    const conteudo = `
         <div class="botao__produto">
              <img src="../../../assets/img/lista/close.png" alt="Botao Excluir" class="botao__produto--edit botao__produto--excluir">
              <a href="./editar-produto.html?id=${id}?categoria=${categoria}" class="botao-simples botao-simples--editar"> 
                  <img src="../../../assets/img/lista/config.png" alt="Botao Editar" class="botao__produto--config" data-editar> 
              </a>
          </div>
          <img src="${imageUrl}" data-produtoImg alt="Produto ${nome}" class="produto__img">
          <p class="produto__descricao" data-produtoNome>${nome}</p>
          <p class="produto__valor" data-produtoValor>R$:${valor}</p>
          <a href="./index.html?id=${id}?categoria=${categoria}"  class="produto__produto" data-id=${id} >Ver produto</a>
                    `
    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
  
    return linhaNovoProduto
}

function deletaProduto(section) {
    section.addEventListener('click', async (evento)=> {
          let ehBotaoDeDeleta = evento.target.className === 'botao__produto--edit botao__produto--excluir'
          if(ehBotaoDeDeleta ){
              try {
                  const linhaProduto = evento.target.closest('[data-id]')
                  let id = linhaProduto.dataset.id
                  await produtoService.removeProduto(id)
              }
              catch(erro){
                  console.log(erro)
                  window.location.href="../page/erro.html"
              }
          }
    })
    
}

deletaProduto(produto)
deletaProduto(console)
deletaProduto(diverso)

const listaProdutos = await produtoService.listaProduto()

const render = async () =>  {

  try {
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
const pesquisa = document.querySelector ('[data-pesquisa]')
const pesquisaD = document.querySelector ('[data-pesquisaD]')
const tsearch = document.querySelector ('.tsearch')


let umaVez = false
botaoPesquisa.addEventListener('click', async (evento) => {
  evento.preventDefault()

    listaProdutos.forEach (evento => {
      const criarElemento = criaNovaLinha(evento.imageUrl, evento.nome,evento.valor, evento.id, evento.categoria)
      
      const inputPesquisa = document.querySelector('#search').value
      const item = evento.nome

      if(inputPesquisa == item && !umaVez){        
        pesquisaD.appendChild(criarElemento)
        pesquisa.style.display = 'flex'
        // tsearch.style.display = 'block'
        containers.forEach(container => {
            container.style.display = "none"
          })
      }
    })
    umaVez = true  
})

// const verProduto = document.querySelectorAll('.produto__produto')

// for (let i = 0; i < verProduto.length; i++) {
//   verProduto[i].addEventListener("click", (evento) => {
//     evento.preventDefault()
//     const produto = evento.target.closest('[data-id]')
//     let id = produto.dataset.id
//     const detalhaProduto2 = produtoService.detalhaProduto(id)

//       window.console.log(detalhaProduto2)
//         descricao.style.display = 'flex'
//         containers.forEach(container => {
//           container.style.display = "none"
//         })
//   });
// }