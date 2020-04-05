// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //Evite este tipo de manipulação.
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} //Para eu referenciar que o pai tem como prototipo o avo, usamos o __proto__.
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0, //O interpretador procura o atributo em todas as referencias desta cadeia.
            filho.attrZ,  //Se ele nao encontrar o atributo especificado ira dar undefined.
            filho.attr1, 
            filho.attr2, 
            filho.attr3) //Caso haja o mesmo atributo 2x O interpretador irá retornar o primeiro que encontrar(sombreamento)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    } 
}
            
const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing
}
                        
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro) // Esta funcao estabelece uma relacao de prototipo entre dois objetos
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())


