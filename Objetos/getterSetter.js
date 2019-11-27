const Sequencia = {
    _valor: 1, //Convençao entre o pessoa de TI, é para avisar que essa variavel é para ser usada internamente.
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }

}

console.log(Sequencia.valor, Sequencia.valor, Sequencia.valor)
Sequencia.valor = 1000
console.log(Sequencia.valor, Sequencia.valor, Sequencia.valor)
Sequencia.valor = 900
console.log(Sequencia.valor, Sequencia.valor, Sequencia.valor)