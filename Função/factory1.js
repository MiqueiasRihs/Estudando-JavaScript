//Factory simples
//Factory fabrica uma instancia de um objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
