const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcinal e OO


/* Quando uma funcao que referencia o "this" o this sera o objeto 
que voce passou para a funcao bind */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()