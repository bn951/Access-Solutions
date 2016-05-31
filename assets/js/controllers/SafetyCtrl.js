accessSolutionsStore.controller('SafetyCtrl', function($scope, products) {
	$scope.pageTitle = "Safety";
	$scope.products = products;
	console.log(products);
});