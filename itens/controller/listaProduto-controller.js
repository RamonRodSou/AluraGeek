import { produtoService } from './cadastraProduto-controller.js'

const criaNovoProduto = (img, produto,valor, id) =>  { 
  const linhaNovoProduto = document.createElement('article')
  const conteudo = `
            <img src="${img}${id}" alt="Produto StarWars" class="produto__img">
            <p class="produto__descricao">${produto}</p>
            <p class="produto__valor">R$:${valor}</p>
            <a href="" class="produto__produto">Ver produto</a>
                  `
  linhaNovoProduto.innerHTML = conteudo
  linhaNovoProduto.dataset.id = id
  return linhaNovoProduto
}


const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento)=> {
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
            window.location.href="../../page/erro.html"
        }
    }
})


const render = async () =>  {
    try {
        const listaProdutos = await produtoService.listaProdutos()
        listaProdutos.forEach(elemento => {
            tabela.appendChild(criaNovoProduto(elemento.img,elemento.produto,elemento.valor, elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../../page/erro.html"
    }
    
}

render()