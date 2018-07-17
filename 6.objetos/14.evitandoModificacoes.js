//Object.preventExtensions -> impede que o objeto seja extendido, não adiciona novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracao escolar branca'
delete produto.tag

console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
delete pessoa.nome
pessoa.idade = 29
pessoa.sobrenome = 'Silva'
console.log(pessoa)

//Object.freeze => valores constantes
