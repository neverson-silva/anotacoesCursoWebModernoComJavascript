const valor = 'Global'

//quando uma função é declara em js ela possui 'consciencia'
//do conceito onde ela é declarada
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()