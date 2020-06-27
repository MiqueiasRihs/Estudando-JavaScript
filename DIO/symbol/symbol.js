const symbol1 = Symbol()
const symbol2 = Symbol()

//Symbols são unicos
console.log(`symbol1 é igual a symbol2:`, symbol1 === symbol2)

const symbol1 = Symbol('name')
const symbol2 = Symbol('name') 

const user = {
    [nameSymbol1]: 'Miqueias',    
    [nameSymbol2]: 'Gustavo',
    lastName: 'Oliveira'
}

console.log(user)

//Symbols criam propriedades que não são enumerables
for(const key in user) {
    if (user.hasWonProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}

//Exibir symbols de um objeto
console.log('symbols registrados no objeto user:', Object.getOwnPropertySymbols(user))

// Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user:',Reflect.ownKeys(user))

//criar em enum
const directions = {
    UP    : Symbol( 'UP' ),
    DOWN  : Symbol( 'DOWN' ),
    LEFT  : Symbol( 'LEFT' ),
    RIGHT : Symbol( 'RIGHT' )


}