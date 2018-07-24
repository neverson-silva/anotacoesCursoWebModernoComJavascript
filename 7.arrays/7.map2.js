const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//Desafio Maps
let precos = carrinho.map((valor, indice) => {
    return JSON.parse(valor).preco
})

console.log(precos)
