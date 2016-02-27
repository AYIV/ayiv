(function () {
    var app = angular.module('myApp', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/gapps_example.html',
                controller: 'AnimateController'
            })
            .when('/:someParam', {
                templateUrl: 'pages/animate_example.html',
                controller: 'AnimateController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();