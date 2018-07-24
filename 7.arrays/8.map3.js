const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

Array.prototype.map2 = function(callable) {
    let novoArray = [];
    // for (let indice = 0; indice < this.length; indice++) {
    //     novoArray[indice] = callable(this[indice], indice, this)
    // }
    for (indice in this) {
        novoArray.push(callable(this[indice], indice, this))
    }
    return novoArray
}

//Desafio Maps
let precos = carrinho.map((valor, indice) => {
    return JSON.parse(valor).preco
})

console.log(precos)