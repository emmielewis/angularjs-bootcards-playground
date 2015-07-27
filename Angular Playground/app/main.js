(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('Main', function ($scope, $http) {
            $scope.posts = [];
            $scope.selectedPost = {};
            $scope.newPost = {};
            $scope.searchText = "";
            $scope.editButtonState = "disabled";

            //Get the data on load and then set the posts object
            $scope.refresh = function () {
                $http.get('http://jsonplaceholder.typicode.com/posts').
                    success(function (data, status, headers, config) {
                        $scope.posts = data;
                        $scope.selectedPost = {};
                        $scope.newPost = {};
                        $scope.editButtonState = "disabled";
                    }).
                    error(function (data, status, headers, config) {
                        // log error
                    });
            };

            //Refresh the data.
            $scope.refresh();

            //Get the data when a post is clicked
            $scope.getSelectedData = function (index) {
                for (var i = 0; i < $scope.posts.length; i++) {
                    if ($scope.posts[i].id == index) {
                        $scope.selectedPost = $scope.posts[i];
                        $scope.editButtonState = "enabled";
                        break;
                    }
                }
            }

            //Update the data...
            $scope.updateOrInsertPost = function (isNew) {
                var post = isNew ? $scope.newPost : $scope.selectedPost;

                $http.post('http://jsonplaceholder.typicode.com/posts', post).
                    success(function (data, status, headers, config) {
                        alert("Post updated...");

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