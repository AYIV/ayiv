(function () {
    var app = angular.module('myApp', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html'
            })
        
            // examples
            .when('/examples/gapps', {
                templateUrl: 'pages/examples/gapps_example.html',
                controller: 'GappsExampleController'
            })
            .when('/examples/animate/:someParam?', {
                templateUrl: 'pages/examples/animate_example.html',
                controller: 'AnimateController'
            })
            
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();