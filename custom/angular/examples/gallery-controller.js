(() => {
    var app = angular.module('myApp');

    app.controller('GalleryController', ['$scope', ($scope) => {
        $scope.images = [
            { thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABJklEQVR4Ae3VPYrbUBRA4a+RJ1VSJswvGG8mhYsswRhtxT/YmNEuhtEiAmpcJjBJOQsYyyBMsF0qXcjDjNF7pAnJOd0tTqN3r/yLfPCsFfrsvUje+ao91RdvRfBGpX3Fzy6c4UKh0Ua6U+gJKLSJFgKa5FAjoE23W6hRWpp4UKeHNnIZgMzIS0rom1shXHqKDW3cgoHC2tq9PriyiQvl4JPjr8nBEIxjQo0MA8dguneHTN09VL7ySBfgsXtoCdYnoQpMu4cmZ0Oz7qEHcH8SmoOye6iWoe8QTH+4QWYb8/lHYGj/W+YjyOPe0YtLcGehUpm7Adfq2BV5coWQa9/TlnYcLG2uTj8jtUdTM6VtxBlJNGCXnGn+1PFfCegl/Y4aKz1/Lf/5CShXgVKz4A8DAAAAAElFTkSuQmCC', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABJklEQVR4Ae3VPYrbUBRA4a+RJ1VSJswvGG8mhYsswRhtxT/YmNEuhtEiAmpcJjBJOQsYyyBMsF0qXcjDjNF7pAnJOd0tTqN3r/yLfPCsFfrsvUje+ao91RdvRfBGpX3Fzy6c4UKh0Ua6U+gJKLSJFgKa5FAjoE23W6hRWpp4UKeHNnIZgMzIS0rom1shXHqKDW3cgoHC2tq9PriyiQvl4JPjr8nBEIxjQo0MA8dguneHTN09VL7ySBfgsXtoCdYnoQpMu4cmZ0Oz7qEHcH8SmoOye6iWoe8QTH+4QWYb8/lHYGj/W+YjyOPe0YtLcGehUpm7Adfq2BV5coWQa9/TlnYcLG2uTj8jtUdTM6VtxBlJNGCXnGn+1PFfCegl/Y4aKz1/Lf/5CShXgVKz4A8DAAAAAElFTkSuQmCC', description: 'Dog', isDefault: true },
            { thumb: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', img: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', description: 'Monkey' },
            { thumb: 'http://www.bugaga.ru/uploads/posts/2016-01/1453486498_foto-19.jpg', img: 'http://www.bugaga.ru/uploads/posts/2016-01/1453486498_foto-19.jpg', description: 'Fat cat' },
            { thumb: 'http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/6287.jpg', img: 'http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/6287.jpg', description: 'Kitty' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
        ];
    }]);
})();