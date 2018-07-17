const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) ///funcao do array primeiro parametro e segundo indice -> similar ao arrayMap do php ??
fabricantes.forEach((fabricante) => console.log(fabricante))