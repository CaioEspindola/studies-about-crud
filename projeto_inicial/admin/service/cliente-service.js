//Solicita dados e devolve uma resposta. Com a função Fetch busca dados e retorna a promise, reduzindo a complexabilidade do código.

//Para Pegar a lista de clientes
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possível listar os clientes')
  })
}

//Para CRIAR um cliente na lista
const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    //passando um método.
    method: 'POST',
    headers: {
      //O tipo de informação estamos enviando.
      'Content-type': 'application/json'
    },
    //Dados que serão passados para o corpo da requisição.
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.body
    }
    throw new Error('Não foi possível criar um cliente')
  })
}

//Para DELETAR um cliente na lista.

const removeCliente = id => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  }).then(resposta => {
    if (!resposta.ok) {
      throw new Error('Não foi possível deletar um cliente')
    }
  })
}

//Para pegar as informações dos inputs de acordo com id. Para ser possível EDITAR

const infosCliente = id => {
  return fetch(`http://localhost:3000/profile/${id}`).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possível detalhar as informações do clientes')
  })
}

//Para EDITAR um cliente na lista. Pegando info especifica com id.

const editaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possível editar um cliente')
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  infosCliente,
  editaCliente
}

//A dependência Json-Server irá simular uma API local. json-server --watch db.json(na pasta admin(que é onde está o db.json))

//instalei Browser-Sync para simular um servidor para o db.json rodar.

//browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html(na pasta projeto_inicial(pasta principal do projeto))
