const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem CallBack
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com CallBack
// o filter ira armazenar em notasBaixas2 se a condição for verdadeira
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)



// Com CallBack, mas criado da minha forma
menoresQueSete = function(notas) {
    if(notas < 7) {
        console.log(notas)
    }
}
console.log('\nMinha forma:')
notas.forEach(menoresQueSete)