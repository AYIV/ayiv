(function() {
    angular.module('myApp').controller('CameraController', ['$scope', function($scope) {
        $scope.webcamChannel = {
            videoWidth: 640,
            videoHeight: 480,
            video: null
        };

        $scope.isShotReady = false;

        $scope.shot = function() {
            if (!$scope.webcamChannel.video)
                return;
                
            var video = $scope.webcamChannel.video;
            var patCanvas = document.querySelector('#snapshot');
            if (!patCanvas)
                return;

            patCanvas.width = video.width;
            patCanvas.height = video.height;

            var videoData = getVideoData(patCanvas.width, patCanvas.width);
            
            patCanvas
                .getContext('2d')
                .putImageData(videoData, 0, 0);
            
            $scope.isShotReady = true;
        };

        var getVideoData = function getVideoData(w, h, x, y) {
            x = x || 0;
            y = y || 0;
            
            var video = $scope.webcamChannel.video;
            var hiddenCanvas = document.createElement('canvas');
            
            hiddenCanvas.width = video.width;
            hiddenCanvas.height = video.height;
            
            var ctx = hiddenCanvas.getContext('2d');
            ctx.drawImage(video, 0, 0, video.width, video.height);
            return ctx.getImageData(x, y, w, h);
        };
        
        $scope.removeCurrentShot = function () {
            $scope.isShotReady = false;
        }
    }]);
})();