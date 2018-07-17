// este operador tira um atributo de dentro de uma estrutura
// seja essa estrutura array ou objeto
// disponivel a partir do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa

console.log(nome, idade)

const {sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada)


//o que esta dentro de endereco retornara
const {endereco: {logradouro, numero} } = pessoa