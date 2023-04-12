import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value
    const data = evento.target.querySelector('[data-data]').value
    const tipo = 50

    await clienteService.criaCliente(nome, email, senha, data, tipo)
    window.location.href = '../page/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../page/erro.html"
  }
})
