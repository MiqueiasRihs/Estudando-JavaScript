//forEach
const arr = [1, 2, 3, 4, 5]

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`)
})

//Map
const arr = [1, 2, 3, 4, 5]
console.log(arr.map(value => value * 2))

//flat
const arr = [1, 2, [3, 4, 5]]
console.log(arr.flat())

const subArr = [1, 2, [3, 4, 5, 6, [7, 8, 9]]]
console.log(subArr.flat(2))

// flatMap
const arr = [1, 2, 3, 4, 5]
console.log(arr.flatMap(value => [value * 2]))
console.log(arr.flatMap(value => [[value * 2]]))


// keys
const arr = [1, 2, 3, 4]
const arrIterator = arr.keys()

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

// values
const arr = [1, 2, 3, 4, 5]
console.log(arr.flatMap(value => [value * 2]))
console.log(arr.flatMap(value => [[value * 2]]))


// keys
const arr = [1, 2, 3, 4]
const arrIterator = arr.values()

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

// entries
const arr = [1, 2, 3, 4, 5]
console.log(arr.flatMap(value => [value * 2]))
console.log(arr.flatMap(value => [[value * 2]]))


// keys
const arr = [1, 2, 3, 4]
const arrIterator = arr.entries()

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

// find 
const arr = [1, 2, 3, 4]
const firtGreaterThanTwo = arr.find(value => value > 2)
console.log(firtGreaterThanTwo)

// findIndex
const arr = [1, 2, 3, 4]
const firtGreaterThanTwo = arr.findIndex(value => value > 2)
console.log(firtGreaterThanTwo)

//filter
const arr = [1, 2, 3, 4]
const allValuesGreaterThanTwo = arr.filter(value => value > 2)
console.log(allValuesGreaterThanTwo)

// indexOf
const arr = [1, 3, 3, 4, 3]
const firstIndexOfItem = arr.indexOf(3)
console.log(firstIndexOfItem)

// lastIndexof
const arr = [1, 3, 3, 4, 3]
const firstIndexOfItem = arr.lastIndexOf(3)
console.log(firstIndexOfItem)

// include
const arr = [1, 3, 3, 4, 3]
const hasItemOne = arr.includes(1)
console.log(hasItemOne)

const hasItemTwo = arr.includes(2)
console.log(hasItemTwo)

// some
const arr = [1, 3, 3, 4, 3]
const hasSomeEvenNumber = arr.some(value => value % 2 === 0)
console.log(hasSomeEvenNumber)

// sort 
const arr = [1, 3, 2, 5, 4]
console.log(arr.sort())

// reverse
const arr = [1, 2, 3, 4, 5]
console.log(arr.reverse())

// join
const arr = [1, 2, 3, 4, 5]
console.log(arr.join('-'))

// reduce 
const arr = [1, 2, 3, 4, 5]
console.log(arr.reduce((total, value) => total += value, 0))



const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
  ];
  
  function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
  
    return {
      salario: salario
    };
  }
  
  const colaboradoresComSalario = colaboradores.map(adicionaSalario);
  
  console.log(colaboradoresComSalario);