const pessoa = {
    neme: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Mostra todas as chaves do Objeto
console.log(Object.values(pessoa)) //Mostra todas os valores do Objeto
console.log(Object.entries(pessoa)) //Mostra todas os arrays do Objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) 
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2)
// Se tiver em dois objetos o mesmo atributo, o Object.assing irá sobrepor o mais antigo

Object.freeze(obj)
obj.c = 1234
console.log(obj)