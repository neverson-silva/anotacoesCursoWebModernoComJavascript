function Pessoa(nome) {
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${this.nome}`)
    
}

let nev = new Pessoa('Neverson Silva')

nev.falar()