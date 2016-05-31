angular.module('accessSolutionsStore.moltin', [])
	.factory('MoltinAuth', function($q) {
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: '0ySzCWe8u5CTC73qCW9L94T2jllWtH7Ior7B5iWdri'});
		moltin.Authenticate(function() {
			deferred.resolve(moltin);
		});

		return deferred.promise;
	});