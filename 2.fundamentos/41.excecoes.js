function tratrarErroElancar(erro)
{
    throw 10
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(4)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)