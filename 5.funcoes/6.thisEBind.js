const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

//Em JS funções tem outras funcoes
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()