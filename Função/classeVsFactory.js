class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Factory
const criarPessoa = (nome, idade) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}, e minha idade é ${idade} anos`)
    }
}

const p2 = criarPessoa('Miquéias', 21)
p2.falar()
