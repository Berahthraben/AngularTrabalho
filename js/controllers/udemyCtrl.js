/* Controller para app.js
*/
angular.module('udemyControllerModule', [])

.controller("udemyController", ["$scope", "servicoTeste", function($scope, servicoTeste) { //nomear parametros ("thomas", function(thomas));
	$scope.name = "thomas";
	$scope.trecoObjeto = [];
	$scope.trecoObjeto.title = "Babacas";
	$scope.trecoObjeto.subTitle = "ligma 39";
	$scope.times2 = function() {
		$scope.trecoObjeto.bindOutput = servicoTeste.times2($scope.trecoObjeto.bindOutput);
	}
	$scope.trecoObjeto.bindOutput = 3;
	$scope.trecoObjeto.pnome = "joao";
	$scope.trecoObjeto.unome = "da silva";
	$scope.trecoObjeto.teorema = servicoTeste.pythagoreanTheorum(35, 65);
	
}])

.factory("servicoTeste", function() {
	var calc = {};
	
	calc.times2 = function(a) {
		return a *= 2;
	};
	
	calc.pythagoreanTheorum = function(a, b){
		return (a*a) + (b*b);
	};
	return calc;
});
