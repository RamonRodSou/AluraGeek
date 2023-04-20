import { produtoService } from '../../service/produto-service.js'

const produto = document.querySelector ('[data-produto]') 
const console = document.querySelector ('[data-console]') 
const diverso = document.querySelector ('[data-diverso]')

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
          <img src="${imageUrl}" data-produtoImg alt="Produto StarWars" class="produto__img">
          <p class="produto__descricao" data-produtoNome>${nome}</p>
          <p class="produto__valor" data-produtoValor>R$:${valor}</p>
          <a href="" class="produto__produto">Ver produto</a>
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
                  linhaProduto.remove()
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


botaoPesquisa.addEventListener('click', async (evento) => {
    evento.preventDefault()

    listaProdutos.forEach (evento => {

      const inputPesquisa = document.querySelector('#search').value

      const item = evento.nome
      if(inputPesquisa == item){        
        window.console.log(item);
      }

    })
    pesquisa.style.display = 'flex';
    produto.style.display = 'none';
    
})
