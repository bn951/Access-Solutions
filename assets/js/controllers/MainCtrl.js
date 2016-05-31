accessSolutionsStore.controller('MainCtrl', function($scope, categories) {
	$scope.pageTitle = "Sales";
	$scope.categories = categories;
	console.log(categories);
});