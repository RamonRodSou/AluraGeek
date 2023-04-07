import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    if(input.dataset.tipo === 'preco'){  // formatando preço aparece O R$ e valores 0,00

        SimpleMaskMoney.setMask (input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})
