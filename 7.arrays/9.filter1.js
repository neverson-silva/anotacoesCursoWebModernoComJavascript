const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const caro = (produto) => produto.preco >= 500
const fragil = (produto) => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)