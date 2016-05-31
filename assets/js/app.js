// Initialize app
var accessSolutionsStore = angular.module('accessSolutionsStore', ['ngRoute', 'accessSolutionsStore.moltin']);

// Config routes
accessSolutionsStore.config(function($routeProvider) {
	$routeProvider
		// Home Page
		.when('/', {
			templateUrl: 'assets/views/main.html',
			controller: 'MainCtrl',
			resolve: {
				categories: function($q, MoltinAuth) {
					var deferred = $q.defer();
					$q.when(MoltinAuth).then(function(moltin) {
						moltin.Category.List(null, function(categories) {
							deferred.resolve(categories);
						});
					});
					return deferred.promise;
				}
			}
		})

		// Sidewalk Sheds Category Page
		.when('/sidewalk-sheds', {
			templateUrl: 'assets/views/sidewalk-sheds.html',
			controller: 'SidewalkShedsCtrl',
			resolve: {
				products: function($q, MoltinAuth) {
					var deferred = $q.defer();
					$q.when(MoltinAuth).then(function(moltin) {
						moltin.Product.List({category: '1261905484613419187'}, function(products) {
							deferred.resolve(products);
						});
					});
					return deferred.promise;
				}
			}
		})

		// Frames Scaffold Category Page
		.when('/frames-scaffold', {
			templateUrl: 'assets/views/frames-scaffold.html',
			controller: 'FramesScaffoldCtrl',
			resolve: {
				products: function($q, MoltinAuth) {
					var deferred = $q.defer();
					$q.when(MoltinAuth).then(function(moltin) {
						moltin.Product.List({category: '1261905927515144372'}, function(products) {
							deferred.resolve(products);
						});
					});
					return deferred.promise;
				}
			}
		})

		// Safety Category Page
		.when('/safety', {
			templateUrl: 'assets/views/safety.html',
			controller: 'SafetyCtrl',
			resolve: {
				products: function($q, MoltinAuth) {
					var deferred = $q.defer();
					$q.when(MoltinAuth).then(function(moltin) {
						moltin.Product.List({category: '1261906199306043573'}, function(products) {
							deferred.resolve(products);
						});
					});
					return deferred.promise;
				}
			}
		});
});