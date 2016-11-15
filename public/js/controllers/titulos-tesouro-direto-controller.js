angular.module('ljbm').controller('TitulosTesouroDiretoController',

function($scope, $cookies, $resource) {

	$scope.titulo = 'Titulos TD';
	$scope.filtroNome = '';

	$cookies.put("chaveLJBM", "token");

	$scope.titulosTD = [];
	var recurso = $resource('http://localhost:9080/lab/rest/titulosTD/');
	recurso.query(function(retorno) {
		$scope.titulosTD = retorno;
		// $scope.titulosTD = buildGridModel(retorno);
		// console.log(retorno.lenght);
	}, function(erro) {
		console.log('erro' + erro)
	});

	$scope.estiloTile = function(tipo) {

//		console.log('ok: ' + (tipo % 10));
		switch (tipo % 4) {
		case 1:
			background = "darkBlue";
			// it.span.row = it.span.col = 2;
			break;

		case 2:
			background = "green";
			break;
		case 3:
			background = "yellow";
			break;
/*		case 4:
			background = "blue";
			// it.span.col = 2;
			break;

		case 5:
			background = "yellow";
			// it.span.row = it.span.col = 2;
			break;

		case 6:
			background = "pink";
			break;
		case 7:
			background = "darkBlue";
			break;
		case 8:
			background = "purple";
			break;
		case 9:
			background = "deepBlue";
			break;
		case 10:
			background = "lightPurple";
			break;*/
		}
		return background;
	}

	// var promessa = $http.get('http://localhost:9080/lab/rest/titulosTD/');
	//	
	// promessa.success(function(retornoOk) {
	// console.log(retornoOk);
	// $scope.titulosTD = retornoOk;
	// }).error(function(retornoErro) {
	// console.log('erro: ' + (retornoErro == null ? 'desconhecido' :
	// retornoErro))
	// });
});
