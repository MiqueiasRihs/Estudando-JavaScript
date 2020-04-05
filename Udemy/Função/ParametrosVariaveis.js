function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))

/*
Para referenciar os argumentos de uma função dentro da função usando o objeto arguments.
Esse Objeto contem um registro para cada argumento fornecido para a funcao com o indice do 
primeiro registro começando em 0.
*/