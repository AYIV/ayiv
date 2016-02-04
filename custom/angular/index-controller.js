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

		$$watch($scope, gapps.isAuthorized, controller.isAuthorized);
		$$watch($scope, gapps.message, controller.message);
	}]);
})();

/*
 * TODO:: refactor to smth like $scope._watch(propertyToWatch, syncedProperty)
 */
function $$watch(scope, propertyToWatch, syncedProperty) {
	scope.$watch(
		function () { return propertyToWatch; },
		function (n) { syncedProperty = newValue }
	);
};