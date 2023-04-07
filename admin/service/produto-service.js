const listaProduto = () =>  {
    return fetch(`http://localhost:3000/produto`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produto')
    })
}

const criaProduto = (imageUrl, produto, valor) => { 
    return fetch(`http://localhost:3000/produto`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imageUrl: imageUrl,
            produto: produto,
            valor: valor
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um produto')
    })
}

const removeProduto = (id) => { 
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um produto')
        }
    })
}
 
const detalhaProduto = (id) => { 
    return fetch(`http://localhost:3000/produto/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um produto')
    })
}

const atualizaProduto = (imageUrl, produto, valor, id) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            imageUrl: imageUrl,
            produto: produto, 
            valor: valor
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um produto')
    })
}

export const produtoService = { 
    listaProduto,
    criaProduto, 
    removeProduto,
    detalhaProduto,
    atualizaProduto

}
