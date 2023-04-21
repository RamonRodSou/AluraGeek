import { produtoService } from "../service/produto-service"

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
