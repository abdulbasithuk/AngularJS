var myAppModule = angular.module('myApp',[]);

myAppModule.controller('TextController',
	function($scope) {
		var someText = {};
		someText.message = 'You have started your journey through module';
		$scope.someText = someText;
	});
