(function () {
    var app = angular.module('myApp', ['ngRoute', 'webcam', 'jkuri.gallery']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html'
            })
        
            // examples
            .when('/examples/gapps', {
                templateUrl: 'pages/examples/gapps.html',
                controller: 'GappsExampleController'
            })
            .when('/examples/animate/:someParam?', {
                templateUrl: 'pages/examples/animate.html',
                controller: 'AnimateController'
            })
            .when('/examples/webcam', {
                templateUrl: 'pages/examples/webcam.html',
                controller: 'WebcamController'
            })
            .when('/examples/gallery', {
                templateUrl: 'pages/examples/gallery.html',
                controller: 'GalleryController'
            })
            
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();