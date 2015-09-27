FAM.directive('header', ['$location', '$document', function($location, $document) {
	return {
		restrict: 'AE',
		templateUrl: 'app/common/header/headerView.html',

		link: function($scope, $element, $attrs) {
		}
	}
}]);