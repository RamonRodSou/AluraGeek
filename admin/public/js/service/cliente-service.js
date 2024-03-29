const listaClientes = () =>  {
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/alurageekbd/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}
 
const criaCliente = (nome, email, senha, data, tipo) => { 
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/alurageekbd/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            data: data,
            tipo:tipo
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => { 
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/alurageekbd/profile/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detalhaCliente = (id) => { 
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/alurageekbd/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email, senha, data, tipo) => {
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/alurageekbd/profile/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email,
            senha: senha,
            data: data,
            tipo:tipo
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

export const clienteService = { 
    listaClientes,
    criaCliente, 
    removeCliente,
    detalhaCliente,
    atualizaCliente

}
