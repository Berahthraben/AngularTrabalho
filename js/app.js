/*
cursin udemy
*/
var app = angular.module('listaCompras', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "tabelaLista.html",
			controller: "listaItemsController"
		})
		.when("/addItem", {
			templateUrl: "addItem.html",
			controller: "listaItemsController"
		})
		.when('/addItem/edit/:id', {
			templateUrl: "addItem.html",
			controller: "listaItemsController"
		})
		.otherwise({
			redirectTo: "/"
		})
});

app.service("GroceryService", function() {
	
	var groceryService = [];
	
	groceryService.itensLista = [
		{id: 1, completed: true, itemName: 'milk', date: new Date("October 1, 2019 11:13:45")},
		{id: 2, completed: true, itemName: 'another milk', date: new Date("October 2, 2019 11:13:45")},
	];

	groceryService.findById = function(id) {
		for(var i in groceryService.itensLista){
			if(groceryService.itensLista[i].id === id){
				return groceryService.itensLista[i];
			}
		}
	};

	groceryService.getNewId = function(){
		if(groceryService.newId){
			groceryService.newId++;
			return groceryService.newId;
		}else{
			var maxId = _.max(groceryService.itensLista, function(entry) { return entry.id;});
			groceryService.newId = maxId.id + 1;
			return groceryService.newId;
		}
	};
	
	groceryService.save = function(entry){
		var updatedItem = groceryService.findById(entry.id);
		if(updatedItem){
			updatedItem.id = entry.id;
			updatedItem.completed = entry.completed;
			updatedItem.itemName = entry.itemName;
			updatedItem.date = entry.date;
		}else{
			entry.id = groceryService.getNewId();
			groceryService.itensLista.push(entry);
		};
	};
	
	groceryService.remove = function(entry){
		var removedItem = groceryService.itensLista.indexOf(entry);
		groceryService.itensLista.splice(removedItem, 1);
	}
	return groceryService;
});

app.controller("homeController", ["$scope", function($scope) {
	$scope.titualoApp = "Lista de compras";
}]);

app.controller("listaItemsController", ["$scope", "$routeParams", "GroceryService", "$location", function($scope, $routeParams, GroceryService, $location) {
	if(!$routeParams.id) {
		$scope.itemTemp = {id:0, completed:false, itemName: "", date: new Date()};
	}else{
		$scope.itemTemp = _.clone(GroceryService.findById(parseInt($routeParams.id)));
	}
	$scope.itensLista = GroceryService.itensLista;
	$scope.save = function() {
		GroceryService.save($scope.itemTemp);
		$location.path("/");
	}
	$scope.remove = function(entry) {
		GroceryService.remove(entry);
	}
}]);