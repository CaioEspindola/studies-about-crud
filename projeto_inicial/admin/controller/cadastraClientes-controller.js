import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')

//Percorre o formulário e pega o valor de cada input e passa para a função criaCliente. Assim quando a requisição for feita, "publicará(POST)" os dados no servidor e abrirá uma nova página.
formulario.addEventListener('submit', async evento => {
  evento.preventDefault() //Prevenir o comportamento padrão de enviar.

  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value

  try {
    await clienteService.criaCliente(nome, email)
    window.location.href = '../telas/cadastro_concluido.html'
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
})
