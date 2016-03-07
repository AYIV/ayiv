(() => {
    var app = angular.module('myApp');
    
    app.directive('defaultPictureGallery', () => {
        return {
            restrict: 'E',
            scope: {
                images: '='
            },
            controller: ($scope, $rootScope) => {
                $rootScope.$on('ngGallery:postLink', (e, i) => {
                    i.$watch('isDefault', (value) => {
                        $scope.images[i.index].isDefault = value;
                    });
                });
                
                $rootScope.$on('ngGallery:imageShow', (e, i) => {
                    i.isDefault = $scope.images[i.index].isDefault;
                });
            }
        };
    });
})();