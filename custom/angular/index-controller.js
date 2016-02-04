(function() {
	angular.module('myApp')

	.controller('IndexController', ['$scope', 'gapps-service', function ($scope, gapps) {
		var controller = this;

		this.authorizeToGapps = function () {
			gapps.handleAuthClick();
		};

		this.send = function () {
			gapps.callScriptFunction();
		};

		$scope.$watch(
			function () { return gapps.isAuthorized; },
			function (n) { controller.isAuthorized = n; }
		);

		$scope.$watch(
			function () { return gapps.message; },
			function (n) { controller.message = n; }
		);
	}]);
})();