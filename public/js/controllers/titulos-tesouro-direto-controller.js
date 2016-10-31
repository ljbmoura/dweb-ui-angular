angular.module('ljbm').controller('TitulosTesouroDiretoController',

function($scope, $http) { // , 'ngResource'
	$scope.titulo = 'Titulos TD';
	$scope.filtroNome = '';

	$scope.titulosTD = []
	// var recurso =
	// $resource('http://localhost:9080/lab/rest/titulosTD/');
	// recurso.query (
	// function (retorno) {
	// console.log('ok');
	// $scope.titulosTD = retorno;
	// },
	// function (erro) {
	// console.log('erro' + erro)
	// }
	// );
	var promessa = $http.get('http://localhost:9080/lab/rest/titulosTD/');
	promessa.success(function(retornoOk) {
//		console.log(retornoOk);
		$scope.titulosTD = retornoOk;
	}).error(function(retornoErro) {
		console.log('erro' + retornoErro)
	});
});
