//Number

//Math

//String
String.split(separador) // transforma uma string em array similar ao explode do php

//Arrays

Array.push() // adiciona valores no fim do array
Array.pop() // remove e retorna o ultimo valor do array
Array.slice() //O método slice() extrai uma sessão de uma string e retorna uma nova  string.
    // Callbacks e Closures
Array.filter() // filtra os valores dentro do array
Array.forEach() // Para cada elemento dentro do array ou objeto, uma função de callback é executada
Array.reverse() // altera a ordenaçao de um array
Array.join(separador) // tranforma um array em string similar ao implode do php

//DOM


// funções de função
    bind()
    call() // similar ao call user func do php
    apply() // similar ao call user func do php

//Objetos ou Funcoes Construtoras
JSON.parse() //retorna um objeto a partir de um json
JSON.stringify() // passa objetos javascript em uma representação json

Object.freeze(object) // congela um objeto, nos valores nao podem ser atribuidos as propriedades
Object.isFrozen() // verifica se um obeje foi congelado
Object.keys(pessoa) //Pega todas as chaves do objeto
Object.values(pessoa) //Pega todos os valores do objeto
Object.entries(pessoa) //Pega todos as entradas do objeto
Object.assign(dest, o1, o2) // pega todos os atributos os objetos passados e jogo no objeto de destino
Object.defineProperty() // define propriedades de um objeto
Object.forEach() // Para cada elemento dentro objeto, uma função de callback é executada
Object.preventExtensions(objeto) //impede que o objeto seja extendido, não adiciona novos atributos, é possivel excluir atributos
Object.seal(objeto) //impede que o objeto seja extendido, não adiciona novos atributos, não é possivel excluir atributos
Object.isExtensible() //verifica se um objeto é extensivel 
Object.isSealed() //verifica se um objeto esta selado 
