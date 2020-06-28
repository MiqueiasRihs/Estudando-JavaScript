// Factory
function Pessoa(customProperties) {
    return {
        nome: 'Miqueias',
        lastName: 'Oliveira',
        ...customProperties
    }

}

const p = Pessoa({name: "Custom name", age: 22})
console.log(p)

//Singleton
function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this
    }
    return Pessoa.instance
}

const p = Pessoa.call({name: 'Miqueias'})
const p2 = Pessoa.call({name: 'Custom Name'})
console.log(p)
console.log(p2)

//Decorator
let loggedIn = false

function callidAuthenticated() {
    return !!loggedIn  && fn()
}

function sum(a, b) {
    return a + b
}
console.log(callidAuthenticated(() => sum(2, 3)))
loggedIn = true

// Observer
class Observable {
    constructor() {
        this.observebles = []
    }

    subscrible(fn) {
        this.observebles.push(fn)
    }

    notify(data) {
        this.observebles.forEach(fn => fn(data))
    }

    unsubscribe(fn) {
        this.observebles = this.observebles.filter(obs => obs !== fn)
    }
}

const o = new Observable()
const logData1 = data => console.log(`Subscrible 1: ${data}`)
const logData2 = data => console.log(`Subscrible 2: ${data}`)
const logData3 = data => console.log(`Subscrible 3: ${data}`)

o.subscrible(logData1)
o.subscrible(logData2)
o.subscrible(logData3)

o.notify('notified 1')

o.unsubscribe(logData2)

o.notify('notified 2')
