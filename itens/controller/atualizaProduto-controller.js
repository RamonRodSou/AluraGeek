import { produtoService } from '../service/produto-service.js'


(async () => { 
  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')
  
  const inputProduto = document.querySelector('[data-produto]')
  const inputValor = document.querySelector('[data-valor]')
  try { 
    const dados = await produtoService.detalhaProduto(id)
    inputProduto.value = dados.produto
    inputValor.value = dados.valor
  }
  catch(erro){
    console.log(erro)
    window.location.href="../page/erro.html"
  }

  
  const formulario = document.querySelector('[data-form]')
  
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
      window.location.href = "../page/edicao_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../page/erro.html"
    }
  })
})()
