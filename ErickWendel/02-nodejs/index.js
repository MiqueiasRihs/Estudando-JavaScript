/*
0 -Obter uem usuario
1 -Obter o numero de telefone do usuario a partir de seu Id
2 -obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}


function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '11009922',
            ddd: 11
        })
    }, 2000)
}


function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
    
}


function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}



obterUsuario(function resolverUsuario(erro, usuario) {
    // null || "" || === false
    if(erro) {
        console.erro('Deu ruim em usuario', erro)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
        if(erro1) {
            console.erro('Deu ruim em telefone', erro)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            if(erro2) {
                console.erro('Deu ruim em endereço', erro)
                return
            }

            console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}`)

        })
    })
})
//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)
