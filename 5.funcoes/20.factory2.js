//Factory Simples
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 20
    }
}

console.log(criarProduto('Pendrive', 200))