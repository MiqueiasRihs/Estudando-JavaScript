const user = {
    name: 'Miqueias',
    lastName: 'Rihs Oliveira'
}

//Recuperar as chaves do objeto
console.log(`Propriedades do objeto user:`, Object.keys(user))

//Recuperar os valores das chaves do objeto
console.log(`\nValores das propriedades do objeto user:`, Object.values(user))

//Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log(`\nLista de propriedades e valores:`, Object.entries(user))

//Mergear propriedades de objetos
Object.assign(user, {fullName: `Miqueias Rihs Oliveira`})

console.log('\nAdicionar a propriedade fullName no objeto user', user)
console.log('\nRetornar um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 22}))

//Previne todas as alterações em um objeto
cosnt newObj = {foo: 'bar'}
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo

console.log('\nVariavel newObj após as alterações', newObj)

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Miqueias' }
Object.seal(person)

person.name = 'Miqueias Rihs'
delete person.name
person.age = 26

console.log('\nVariavel person após as alterações,', person)