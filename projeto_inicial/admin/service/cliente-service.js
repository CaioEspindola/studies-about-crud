//Solicita dados e devolve uma resposta. Com a função Fetch busca dados e retorna a promise, reduzindo a complexabilidade do código.

//Para Pegar a lista de clientes
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then(resposta => {
    return resposta.json()
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
    return resposta.body
  })
}

//Para DELETAR um cliente na lista.

const removeCliente = id => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente
}

//A dependência Json-Server irá simular uma API local. json-server --watch db.json

//instalei Browser-Sync para simular um servidor para o db.json rodar.

//browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
