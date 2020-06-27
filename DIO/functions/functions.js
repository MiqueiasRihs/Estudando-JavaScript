function fn() {
    return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn2 = () => {
    return 'Code here'
}

//Funções tambeém são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

//Receber parametros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)