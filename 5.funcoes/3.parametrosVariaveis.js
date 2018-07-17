// atraves da propriedades arguments é possivel recuperar os parametros da funcao
// similar ao func_get_args() do php

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(1.1,2.3,13,3.4))