//Object.create

const pai  = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) //se colocar outro parametro alem de null, automaticamente seta o prototipo de heranca para o novo objeto
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança:  ${key}`)
}