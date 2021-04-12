/**
 * -- Codes de Retorno
 * 200 - OK
 * 600 - Erro de Banco De Danos
 * 605 - Validação de Campos
 * 610 - Erro Negocial
 * 615 - Necessario efetuar login
 *
 */

module.exports = function(application){
	application.post('/api/listaFilmes', function(req, res){
		application.controllers.locadoraController.listaFilmes(application , req ,  res);
	});

	application.post('/api/listaUsuarios', function(req, res){
		application.controllers.locadoraController.listaUsuarios(application , req ,  res);
	});

	application.post('/api/salvarUsuario', function(req, res){
		application.controllers.locadoraController.salvarUsuario(application , req ,  res);
	});

	application.post('/api/recuperaClienteFilme', function(req, res){
		application.controllers.locadoraController.recuperaClienteFilme(application , req ,  res);
	});

	application.post('/api/salvaDevolucao', function(req, res){
		application.controllers.locadoraController.salvaDevolucao(application , req ,  res);
	});

	application.post('/api/salvarLocacao', function(req, res){
		application.controllers.locadoraController.salvarLocacao(application , req ,  res);
	});

	application.post('/api/recuperaHistoricoFilme', function(req, res){
		application.controllers.locadoraController.recuperaHistoricoFilme(application , req ,  res);
	});
}
