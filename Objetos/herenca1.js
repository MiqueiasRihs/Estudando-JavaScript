const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //Desta forma posso acessar quem seria o Objeto pai
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function meuOjeto() {}
console.log(typeof Object, typeof meuOjeto)
console.log(Object.prototype, meuOjeto.prototype)