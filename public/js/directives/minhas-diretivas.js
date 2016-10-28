/**
 * 
 */

angular.module('minhasDiretivas', [])

.directive('tesouroDiretoItem', function() {
	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		id : '@',
		nome : '@',
		tipo : '@'
	}

	ddo.templateUrl = 'js/directives/tesouro-direto-item.html'
	return ddo;

});
