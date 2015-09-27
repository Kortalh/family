FAM.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/forum', {
			templateUrl: 'app/components/forum/forumView.html',
			controller: 'forumController'
		})
		.when('/gallery', {
			templateUrl: 'app/components/gallery/galleryView.html',
			controller: 'galleryController'
		})
		.when('/genealogy', {
			templateUrl: 'app/components/genealogy/genealogyView.html',
			controller: 'genealogyController'
		})
		.when('/history', {
			templateUrl: 'app/components/history/historyView.html',
			controller: 'historyController'
		})
		.when('/home', {
			templateUrl: 'app/components/home/homeView.html',
			controller: 'homeController'
		})
		.otherwise({
			redirectTo: '/home'
		});

	$locationProvider.html5Mode({
		enabled: true,
		baseRequired: false
	});

}]);