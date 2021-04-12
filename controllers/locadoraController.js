module.exports.listaFilmes = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaFilmesDao = new application.models.locadoraDao();

    retorno.data = listaFilmesDao.filmes;
    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
};

module.exports.listaUsuarios = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaUsuariosDao = new application.models.locadoraDao();

    retorno.data = listaUsuariosDao.usuarios;
    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
}

module.exports.salvarUsuario = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaUsuariosDao = new application.models.locadoraDao();
    var usu = listaUsuariosDao.usuarios;
    usu.push(req.body);
    console.log('usu', usu);

    retorno.data = listaUsuariosDao.usuarios;
    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
}

module.exports.recuperaClienteFilme = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaUsuariosDao = new application.models.locadoraDao();
    var usu = listaUsuariosDao.usuarios;
    var id = req.body

    for (var cliente of usu) {
        if (cliente.id === id.idCliente) {
            retorno.data = cliente;
        }
    }

    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
}

module.exports.salvaDevolucao = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaUsuariosDao = new application.models.locadoraDao();
    var filme = listaUsuariosDao.filmes;
    var id = req.body

    console.log('id', id);

    for (var filmes of filme) {
        if (filmes.id === id.id) {
            filmes.idClienteAlugado = null;
            filmes.disponibilidade = 'Disponível';
            filmes.dataDevolucao = null;
        }
    }

    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
}

module.exports.salvarLocacao = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaUsuariosDao = new application.models.locadoraDao();
    var filme = listaUsuariosDao.filmes;
    var historico = listaUsuariosDao.historicoLocacao;
    var idFilme = req.body.filme;
    var idCliente = req.body.cliente;

    console.log('id', idCliente);

    for (var filmes of filme) {
        if (filmes.id === idFilme.id) {
            filmes.idClienteAlugado = idCliente;
            filmes.disponibilidade = 'Alugado';
            var dataAtual = new Date();
            var data = dataAtual.getDate() + '/' + dataAtual.getMonth() + '/' + dataAtual.getFullYear();
            var dataDev = (dataAtual.getDate()+5) + '/' + dataAtual.getMonth() + '/' + dataAtual.getFullYear();
            filmes.dataAlugada = data;
            filmes.dataDevolucao = dataDev;

            var obj = {
                idClient: idCliente,
                idFilme: idFilme,
                dataAlugado: data,
                dataDev: dataDev
            }

            historico.push(obj);
        }
    }

    console.log('historico', historico);
    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
}

module.exports.recuperaHistoricoFilme = function(application, req , res){
    // Estrutara de retorno
    var retorno = {
        status : {
            code : "" ,
            text : ""
        }
    };

    var listaUsuariosDao = new application.models.locadoraDao();
    var historicos = listaUsuariosDao.historicoLocacao;
    var clientes = listaUsuariosDao.usuarios;
    var idFilme = req.body.id
    var histo = [];

    console.log('idFilme', idFilme);

    for (var hist of historicos) {
        if (hist.idFilme.id === idFilme) {
            for (var cli of clientes) {
                if (cli.id === hist.idClient) {
                    hist.cliente = cli;
                    histo.push(hist);
                }
            }
        }
    }

    console.log('histo', histo);
    retorno.data = histo;
    retorno.status.code = 200;
    retorno.status.text = 'success';
    res.json(retorno);
}
