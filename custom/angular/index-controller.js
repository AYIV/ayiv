(function() {
	angular.module('myApp')

	.controller('IndexController', ['$scope', 'gappsSpreadsheetAsDatabaseService', function ($scope, gapps) {
		var controller = this;

		this.send = function () {
			gapps.set();
		};

		$scope.$watch(
			function () { return gapps.ok; },
			function (n) { controller.ok = n; }
		);
	}]);
})();