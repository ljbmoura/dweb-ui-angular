/**
 * módulo principal ljbm
 */

(function() {

	var app = angular.module('ljbm', [ 'minhasDiretivas', 'ngRoute',
			'ngResource', 'ngCookies', 'ngMaterial', 'ngMessages' ]);

	app.config(ConfiguracaoGeral);
	app.config(ConfiguracaoTema);

	function ConfiguracaoGeral($routeProvider, $locationProvider, $httpProvider) {

		$locationProvider.html5Mode(true);

		/*
		 * $httpProvider.defaults.headers.post = { 'Content-Type' :
		 * 'application/x-www-form-urlencoded' // ,'My-Header' : 'especial2' };
		 */
		$httpProvider.defaults.withCredentials = true;

		$routeProvider.when('/titulosTD', {
			templateUrl : '/partials/titulos-tesouro-direto.html',
			controller : 'TitulosTesouroDiretoController'
		}).when('/titulosTD/novo', {
			templateUrl : '/partials/titulo-tesouro-direto.html',
			controller : 'TituloTesouroDiretoController'
		}).otherwise({
			templateUrl : '/partials/destino-invalido.html'
		});

	}

	function ConfiguracaoTema($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('blue-grey', {
			'default' : '900',
			'hue-1' : '500',
			'hue-2' : '800',
			'hue-3' : '300'
		}).accentPalette('teal', {
			'default' : '900',
			'hue-1' : '500',
			'hue-2' : '800',
			'hue-3' : '100'
		}).warnPalette('red').backgroundPalette('grey');

		$mdThemingProvider.theme('light').primaryPalette('grey')
				.backgroundPalette('grey');
	}

})();
/**
 * angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute',
 * 'ngResource', 'meusServicos'])
 * 
 * .config (function ($routeProvider, $locationProvider) {
 * $locationProvider.html5Mode(true);
 * 
 * $routeProvider .when('/fotos', { controller: 'FotosController', templateUrl:
 * 'partials/principal.html', titulo: 'Listagem' })
 * 
 * .when('/fotos/new', { controller: 'FotoController', templateUrl:
 * 'partials/foto.html', titulo: 'Inclusao' })
 * 
 * .when('/fotos/new/:id', { controller: 'FotoController', templateUrl:
 * 'partials/foto.html', titulo: 'Alteracao' })
 * 
 * .otherwise ( { redirectTo: '/fotos' }) })
 * 
 * .run (function ($rootScope) { $rootScope.$on ( '$routeChangeStart', function
 * (event, next, current) { if (next.templateUrl) { //alert(next.titulo);
 * $rootScope.tituloDaPagina = next.titulo; } } ) }) ;
 */
