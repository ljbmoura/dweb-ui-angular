// public/js/controllers/titulo-tesouro-direto-controller.js

angular.module('ljbm').controller(
		'TituloTesouroDiretoController',

		function($scope, $http) {
			$scope.titulo = 'Cadastro Título TD';

			$scope.tituloTD = {
//				id: '0',
//				nome : 'novo',
//				tipo : '1'
			};

			$scope.submeter = function() {
				console.log('incluindo título TD ' + $scope.tituloTD);

				$http.post('http://localhost:9080/lab/rest/titulosTD/',
						$scope.tituloTD)

				.success(function() {
					console.log('Título TD adicionado com sucesso');
				})

				.error(function(erro) {
					console.log('Não foi possível cadastrar o título TD');
				})
			}

		}

);