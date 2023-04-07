import { produtoService } from '../service/produto-service.js'

const formulario = document.querySelector('[data-formProduto]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const img = evento.target.querySelector('[data-img]').value
    const produto = evento.target.querySelector('[data-produto]').value
    const valor = evento.target.querySelector('[data-valor]').value


    await produtoService.criaProduto(img, produto, valor)
    window.location.href = '../page/cadastro_concluido.html'
  }
  catch (erro) { 
    console.log(erro)
    window.location.href = "../page/erro.html"
  }
})

const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolha uma Imagem";
pictureImage.innerHTML = pictureImageTxt;