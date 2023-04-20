import { produtoService } from '../../service/produto-service.js'


(async () => { 
  const pegaURL = new URL(window.location)
  const id = pegaURL.searchParams.get('id')
  const dados = await produtoService.detalhaProduto(id)

  const inputImg = document.querySelector('[data-img]')
  const inputNome = document.querySelector('[data-produto]')
  const inputEmail = document.querySelector('[data-valor]')
  const inputValor = document.querySelector('[data-valor]')

  try { 
    inputImg.value = dados.imageUrl
    inputNome.value = dados.nome
    inputEmail.value = dados.email
    inputValor.value = dados.valor
  }
  catch(erro){
    console.log(erro)
    window.location.href="../../page/erro.html"
  }

  
  const formulario = document.querySelector('[data-formProduto]')
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await produtoService.atualizaProduto(inputImg.value, inputNome.value,inputValor.value, dados.categoria ,id)

      window.location.href = "./edicaoProduto-concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../../page/erro.html"
    }
  })
})()
