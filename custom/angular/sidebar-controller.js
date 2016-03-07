(function () {
    angular.module('myApp')
    
    .controller('SidebarController', ['$scope', function ($scope) {
        $scope.menuItems = [
            {
                text: 'Examples',
                hasChildren: true,
                children: [
                    { url: '#/examples/animate', text: 'Animate' },
                    { url: '#/examples/gapps', text: 'Gapps' },
                    { url: '#/examples/gallery', text: 'Gallery' },
                    { url: '#/examples/gallery-wrap', text: 'Gallery Wrap' },
                    { url: '#/examples/webcam', text: 'Webcam' }
                ]
            },
            {
                text: 'Camera',
                url: '#/camera',
                hasChildren: false
            }
        ];
    }]);
})();