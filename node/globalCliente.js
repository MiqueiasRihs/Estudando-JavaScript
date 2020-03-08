require('./global')


console.log(global.MinhaApp.saudacao())

/* A mudança feita na linha de baixo nao irá
ocorrer pois o exite o 'Object.freeze()'
na funcao 'global' */ 
MinhaApp.nome = 'Eita'
console.log(global.MinhaApp.nome)



