import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr')

  //Gerando um template na tabela. Uma nova linha para receber as informações obtidas.
  const conteudo = `
<td class="td" data-td>${nome}</td>
  <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
</td> 
`
  linhaNovoCliente.innerHTML = conteudo
  linhaNovoCliente.dataset.id = id

  return linhaNovoCliente
}

//DELETAR Percorrendo a arvore do DOM e adicionando um evento de click
const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', evento => {
  let botaoDeletar =
    evento.target.className === 'botao-simples botao-simples--excluir'
  if (botaoDeletar) {
    const linhaCliente = evento.target.closest('[data-id]')
    let id = linhaCliente.dataset.id
    clienteService.removeCliente(id).then(() => {
      linhaCliente.remove()
    })
  }
})

//Esta importando a função listaCliente(Que é uma requisição Fetch, solicitando e devolvendo infos)
//Então percorre um loop nos elementos da API e acrescenta as informações na nova linha de acordo como solicitado no template.
clienteService.listaClientes().then(data => {
  data.forEach(elemento => {
    tabela.appendChild(
      criaNovaLinha(elemento.nome, elemento.email, elemento.id)
    )
  })
})
