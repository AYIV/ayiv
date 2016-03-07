(() => {
    var app = angular.module('myApp');

    app.controller('GalleryController', ['$scope', ($scope) => {
        $scope.images = [
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Dog', isDefault: true },
            { thumb: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', img: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', description: 'Monkey' },
            { thumb: 'http://www.bugaga.ru/uploads/posts/2016-01/1453486498_foto-19.jpg', img: 'http://www.bugaga.ru/uploads/posts/2016-01/1453486498_foto-19.jpg', description: 'Fat cat' },
            { thumb: 'http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/6287.jpg', img: 'http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/6287.jpg', description: 'Kitty' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' },
            { thumb: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', img: 'http://cs7007.vk.me/v7007935/2b01b/4lgfiUdhTm4.jpg', description: 'Image 1' }
        ];
    }]);
})();