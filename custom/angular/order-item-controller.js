(() => {
    var app = angular.module('myApp');

    app.controller('OrderItemController', ['$scope', ($scope) => {
        $scope.images = [];
        
        $scope.saveToGallery = () => {
            var dataUrl = document.getElementById('snapshot').toDataURL("image/png").replace("image/png", "image/octet-stream");
            
            $scope.images.push({
                thumb: dataUrl,
                img:   dataUrl,
                description: 'Test' 
            });
        };
    }]);
})();