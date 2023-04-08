import { produtoService } from '../service/produto-service.js'


(async () => { 
  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')
  
  const inputNome = document.querySelector('[data-nome]')
  const inputEmail = document.querySelector('[data-email]')
  try { 
    const dados = await produtoService.detalhaProduto(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
  }
  catch(erro){
    console.log(erro)
    window.location.href="../page/erro.html"
  }

  
  const formulario = document.querySelector('[data-form]')
  
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await produtoService.atualizaProduto(id, inputNome.value, inputEmail.value)
      window.location.href = "../page/edicao_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../page/erro.html"
    }
  })
})()
