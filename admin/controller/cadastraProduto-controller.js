import { produtoService } from '../service/produto-service.js'

const formulario = document.querySelector('[data-formProduto]')

 formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const img = evento.target.querySelector('[data-img]').value

    const produto = evento.target.querySelector('[data-produto]').value
    const valor = evento.target.querySelector('[data-valor]').value

    const categoria = document.querySelector('input[name="categoria"]:checked').value;

    await produtoService.criaProduto(img, produto, valor, categoria)
    window.location.href = '../page/cadastro_concluido.html'

  }
  catch (erro) { 
    console.log(erro)
    window.location.href = "../page/erro.html"
  }
})
