const nums = [1,2,3,4,5]

Array.prototype.map2 = function(callable) {
    let novoArray = [];
    for (let indice = 0; indice < this.length; indice++) {
        novoArray[indice] = callable(this[indice], indice, this)
    }
    return novoArray
}
//Map é um for com proposito

let resultado = nums.map((e) => {
    return e * 20
})

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let somado = nums.map2(soma10).map2(triplo).map2(paraDinheiro)

console.log(somado)