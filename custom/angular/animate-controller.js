(function () {
    angular.module('myApp')
    
    .controller('AnimateController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.inputText = $routeParams.someParam;
    }]);
})();