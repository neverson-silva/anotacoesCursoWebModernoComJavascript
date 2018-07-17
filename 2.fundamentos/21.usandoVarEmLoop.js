for (var i = 0; i < 10; i++) {
    //console.log(i)
}
console.log(i)


class Produto
{
    getProduto()
    {
        return 'Produtor'
    }

    somar(animo, mais)
    {
        return animo + mais
    }

}

let produto = new Produto()

let somar = [3,2]

console.log(produto.somar(...somar))