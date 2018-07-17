const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Pega todas as chaves do objeto
console.log(Object.values(pessoa)) //Pega todos os valores do objeto
console.log(Object.entries(pessoa)) //Pega todos as entradas do objeto

Object.entries(pessoa).forEach(([chave, valor]) => { // para pegar as chaves e valores igual php usar o destructuring
    console.log(`${chave} ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) //target e nome da propriedade

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign(ES6)
const dest = {a : 1}
const o1 = {b : 2}
const o2 = {c : 3, a: 4}
const obj = Object.assign(dest, o1, o2) // pega todos os atributos os objetos passados e jogo no objeto de destino
console.log(obj)

