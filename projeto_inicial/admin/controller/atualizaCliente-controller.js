import { clienteService } from '../service/cliente-service.js'

//para instanciar um objeto url, e passou onde estamos na pagina
const pegaURL = new URL(window.location)

//Para pegar o id
const id = pegaURL.searchParams.get('id')

//Percorrer o DOM buscando os dados dos inputs
const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.infosCliente(id).then(dados => {
  inputNome.value = dados.nome
  inputEmail.value = dados.email
})

//Percorrer o DOM buscando o formulario
const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', evento => {
  evento.preventDefault()

  clienteService
    .editaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
      window.location.href = '../telas/edicao_concluida.html'
    })
})
