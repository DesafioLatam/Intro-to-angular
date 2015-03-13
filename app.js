(function() {
	'use strict'
	var app = angular.module('Blog', []);
	app.controller('PostController', ['$scope', function ($scope) {
		$scope.contents = [
		{
			title: "Hola mundo",
			content: "Yep, Yep, Hello from Brazil"
		},
		{
			title: "Hola mundo 2",
			content: "segundo post"
		},
		{
			title: "Hola mundo 2",
			content: "segundo post"
		}

		];

	$scope.post_signature = {
		title: "Sin título",
		content: "Sin contenido"
	}
	$scope.add_post = function(post){
		console.log(post)
		var p = angular.copy(post);
		$scope.contents.push(p);
		console.log($scope.contents)
	}
	
	}]);
}());