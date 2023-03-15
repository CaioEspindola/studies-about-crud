import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')

//Percorre o formulário e pega o valor de cada input
formulario.addEventListener('submit', evento => {
  evento.preventDefault() //prevenir o comportamento padrão de enviar
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value

  clienteService.criaCliente(nome, email).then(() => {
    window.location.href = '../telas/cadastro_concluido.html'
  })
})
