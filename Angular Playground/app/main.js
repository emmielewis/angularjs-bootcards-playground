(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('Main', function ($scope, $http) {
            $scope.posts = [];
            $scope.selectedPost = {};

            $http.get('http://jsonplaceholder.typicode.com/posts').
                success(function (data, status, headers, config) {
                    $scope.posts = data;
                }).
                error(function (data, status, headers, config) {
                    // log error
                });

            $scope.getData = function (index) {
                $scope.selectedPost = $scope.posts[index];
            }

        });
})();