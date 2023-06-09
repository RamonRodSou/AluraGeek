export function valida(input){

    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if(input.validity.valida) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    descricao: {
        valueMissing: 'O campo de descrição não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    }, 
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch:'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e uma minúscula, um número e não deve conter símbolos.'
    }, 
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    img: {
        valueMissing: 'Você precisa adicionar uma imagem.'
    },
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    },
    loginEmail: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    }, 
    loginSenha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch:'A senha digitada não é valida.'
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem) //A mensagem a ser usada para erros de validade.
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
