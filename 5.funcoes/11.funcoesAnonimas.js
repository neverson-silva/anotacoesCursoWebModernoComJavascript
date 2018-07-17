const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4)

//passando uma outra funcao anonima

imprimirResultado(3,4, function(x, y){return x- y})

imprimirResultado(3,4, (x,y) => x * y)

// funcao anonima dentro de objeto
const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}