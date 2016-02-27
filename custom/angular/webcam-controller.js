(function () {
    angular.module('myApp')
    
    .controller('WebcamController', ['$scope', function ($scope) {
        $scope.webcamChannel = {
            videoWidth: 1280,
            videoHeight: 720
        };
    }]);
})();