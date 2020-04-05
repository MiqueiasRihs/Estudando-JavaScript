let valor // Não inicializada
console.log(valor)
valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Não tem como acessar uma valor de uma variavel de um objeto nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar usar Undefined
console.log(!!produto.preco)
delete produto.preco  //Forma de tirar um atributo de um objeto
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)
