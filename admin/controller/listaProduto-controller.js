import { produtoService } from '../service/produto-service.js'

const criaNovaLinha = (imageUrl, produto, valor,id) =>  { 
  const linhaNovoProduto = document.createElement('article')
  const conteudo = `
        <img src="${imageUrl}?raw=true" data-produtoImg alt="Produto StarWars" class="produto__img">
        <p class="produto__descricao" data-produtoNome>${produto}</p>
        <p class="produto__valor" data-produtoValor>R$:${valor}</p>
        <a href="" class="produto__produto">Ver produto</a>
                  `
  linhaNovoProduto.innerHTML = conteudo
  linhaNovoProduto.dataset.id = id

  return linhaNovoProduto
}

const produto = document.querySelector('[data-produto]') 
const console = document.querySelector ('[data-console]')
const diverso = document.querySelector ('[data-diverso]')

const render = async () =>  {
    try {
        const listaProdutos = await produtoService.listaProduto()
        listaProdutos.forEach(elemento => {

          if(elemento.categoria == "1"){
            produto.appendChild(criaNovaLinha(elemento.imageUrl, elemento.produto,elemento.valor, elemento.id, elemento.categoria))
          }

          else if(elemento.categoria == "2"){
            console.appendChild(criaNovaLinha(elemento.imageUrl, elemento.produto,elemento.valor, elemento.id, elemento.categoria))
          }

          else {
            diverso.appendChild(criaNovaLinha(elemento.imageUrl, elemento.produto,elemento.valor, elemento.id, elemento.categoria))
          }
      })

    }
    catch(erro){
        console.log(erro)
        window.location.href="../page/erro.html"
    }
    
}
render()

  produto.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeDeleta){
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

