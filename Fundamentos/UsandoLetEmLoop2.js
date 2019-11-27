const funcs = []
//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
for (let i = 0; i < 10; i++) {
    funcs.push(function () { 
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
