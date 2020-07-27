// Arrow functions apenas podem existir se forem atribuidas a uma variavel
// ou passando como parametro para outras funçoẽs

var sum = (a, b) => a + b;

var sumUmParam = a => a + 5;

var createObj = () => ({ test: 123})


console.log(createObj())
console.log(sum(2,2))


function Car() {
    this.foo = 'bar'
}

console.log(new Car())
