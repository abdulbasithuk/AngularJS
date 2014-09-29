function CartController($scope) {
	$scope.items = [
		{title: 'Cheese', quantity: 8, price: 3.95},
		{title: 'Milk', quantity: 17, price: 5.45},
		{title: 'Bread', quantity: 8, price: 1.95}
	];
	
	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}
}