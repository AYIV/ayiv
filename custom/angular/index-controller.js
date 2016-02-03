(function() {
	angular.module('myApp')

	.controller('IndexController', ['gapps-service', function (gapps) {
		this.authorizeToGapps = function () {
			gapps.handleAuthClick();
		};

		this.send = function () {
			gapps.callScriptFunction();
		};

		this.isAuthorized = gapps.isAuthorized;

		this.message = gapps.message;
	}]);
})();