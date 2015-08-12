(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('Main',["$http",
                     MainCtrl]);

        function MainCtrl ($http) {
            var vm = this;
            vm.posts = [];
            vm.selectedPost = {};
            vm.newPost = {};
            vm.searchText = "";
            vm.editButtonState = "disabled";

            //Get the data when a post is clicked
            vm.getSelectedData = function (index) {
                for (var i = 0; i < vm.posts.length; i++) {
                    if (vm.posts[i].id == index) {
                        vm.selectedPost = vm.posts[i];
                        vm.editButtonState = "enabled";
                        break;
                    }
                }
            }

            //Update the data...
            vm.updateOrInsertPost = function (isNew) {
                var post = isNew ? vm.newPost : vm.selectedPost;

                $http.post('http://jsonplaceholder.typicode.com/posts', post).
                    success(function (data, status, headers, config) {
                        alert("Post updated...");

                        //The post is a mock so nothing will update on the server.
                        vm.refresh();
                    }).
                    error(function (data, status, headers, config) {
                        // log error
                        alert("Post had an issue...");
                    });
            }

            //Get the data on load and then set the posts object
            vm.refresh = function () {
                $http.get('http://jsonplaceholder.typicode.com/posts').
                    success(function (data, status, headers, config) {
                        vm.posts = data;
                        vm.selectedPost = {};
                        vm.newPost = {};
                        vm.editButtonState = "disabled";
                    }).
                    error(function (data, status, headers, config) {
                        // log error
                    });
            };

            vm.refresh();
        };
})();