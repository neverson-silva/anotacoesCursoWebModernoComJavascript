//Number
Number.isInteger()
Number.toFixed() // imprime só algumas casas
Number.toString()

//Math

//String
String.split(separador) // transforma uma string em array similar ao explode do php

//Arrays
Array.concat() // concatena varios arrays em um -> similar ao array_merge do php
Array.push() // adiciona valores no fim do array
Array.pop() // remove e retorna o ultimo valor do array
Array.slice() //O método slice() extrai uma sessão de uma string e retorna uma nova  string.
Array.reverse() // altera a ordenaçao de um array de forma reversa
Array.sort() // ordena um array
Array.join(separador) // tranforma um array em string similar ao implode do php
Array.length // tamanho do array
Array.splice(1, 2) //serve para add elementos, remover elementos, e add e remover ao mesmo tempo, a partir do terceiro parametro add elementos
Array.pop() //remove o ultimo elemento do array
Array.shift() //remove e retorno o primeiro elemento de um array
Array.unshift(valor) // inseri um valor no inicio do array 
// Callbacks e Closures

    Array.reduce()
    Array.map()
    Array.filter() // filtra os valores dentro do array
    Array.forEach() // Para cada elemento dentro do array ou objeto, uma função de callback é executada

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


parseFloat() // Converte String em numero flutuante