(function() {
	angular.module('myApp')

	.controller('IndexController', ['gapps-service', function (gapps) {
		this.authorizeToGapps = function () {
			gapps.handleAuthClick();
		};

		this.isAuthorized = gapps.isAuthorized;
	}]);
})();