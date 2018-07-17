//Factory são funções ou classes que retornam um objetos

const prod1 = {
    nome: '....',
    preco: 45
}
const prod2 = {
    nome: '....',
    preco: 45
}

//Factory Simples
function criarPessoa() {
    return {
        nome: 'Anna',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())