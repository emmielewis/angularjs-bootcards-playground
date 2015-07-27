(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('Main', function ($scope, $http) {
            $scope.posts = [];
            $scope.selectedPost = {};
            $scope.newPost = {};

            //Get the data on load and then set the posts object
            $scope.refresh = function () {
                $http.get('http://jsonplaceholder.typicode.com/posts').
                    success(function (data, status, headers, config) {
                        $scope.posts = data;
                        $scope.selectedPost = {};
                    }).
                    error(function (data, status, headers, config) {
                        // log error
                    });
            };

            //Refresh the data.
            $scope.refresh();

            //Get the data when a post is clicked
            $scope.getSelectedData = function (index) {
                $scope.selectedPost = $scope.posts[index];
            }

            //Update the data...
            $scope.updateOrInsertPost = function (isNew) {
                var post = isNew ? $scope.newPost : $scope.selectedPost;

                $http.post('http://jsonplaceholder.typicode.com/posts', post).
                    success(function (data, status, headers, config) {
                        alert("Post updated...");

                        if (isNew) {
                            $scope.newPost = {};
                        }

                        //The post is a mock so nothing will update on the server.
                        $scope.refresh();
                    }).
                    error(function (data, status, headers, config) {
                        // log error
                        alert("Post had an issue...");
                    });
            }

        });
})();