import { clienteService } from '../service/cliente-service.js'
import { valida } from '../validacoes/validacao.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value
    const data = evento.target.querySelector('[data-data]').value

    await clienteService.criaCliente(nome, email, senha, data)
    window.location.href = '../page/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../page/erro.html"
  }
})
