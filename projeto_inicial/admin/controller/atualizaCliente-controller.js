import { clienteService } from '../service/cliente-service.js'
;(async () => {
  //Para instanciar um objeto url, e informar onde estamos na pagina com o id
  const pegaURL = new URL(window.location)

  //Para pegar o id como parâmetro.
  const id = pegaURL.searchParams.get('id')

  //Percorrer o DOM buscando os dados dos inputs
  const inputNome = document.querySelector('[data-nome]')
  const inputEmail = document.querySelector('[data-email]')

  try {
    const dados = await clienteService.infosCliente(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
  } catch (erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }

  //Percorrer o DOM buscando o formulário e um evento de click par aplicar a função que vai EDITAR
  const formulario = document.querySelector('[data-form]')

  formulario.addEventListener('submit', async evento => {
    evento.preventDefault()

    try {
      await clienteService.editaCliente(id, inputNome.value, inputEmail.value)
      window.location.href = '../telas/edicao_concluida.html'
    } catch (erro) {
      console.log(erro)
      window.location.href = '../telas/erro.html'
    }
  })
})()
