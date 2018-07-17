const sequencia = {
    _valor: 1, // convencionando que esta variavel seja privado
    get valor () {return this._valor++}, // funcoes com mesmo nome com set e get antes
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor) //internament o JS chama as funções de mesmo nome, similar ao metodos magicos __get, __set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)