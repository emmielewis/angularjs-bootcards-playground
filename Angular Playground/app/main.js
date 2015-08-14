(function() {
    "use strict";

    function mainCtrl($http) {
        var self = this;

        self.posts = [];
        self.selectedPost = {};
        self.newPost = {};
        self.searchText = "";
        self.editButtonState = "disabled";

        //Get the data when a post is clicked
        self.getSelectedData = function(post) {
            self.selectedPost = post;
        };

        //Update the data...
        self.updateOrInsertPost = function(isNew) {
            var post = isNew ? self.newPost : self.selectedPost;

            $http.post("http://jsonplaceholder.typicode.com/posts", post).
                success(function(data, status, headers, config) {
                    alert("Post updated...");

                    //The post is a mock so nothing will update on the server.
                    self.refresh();
                }).
                error(function(data, status, headers, config) {
                    // log error
                    alert("Post had an issue...");
                });
        };

        //Get the data on load and then set the posts object
        self.refresh = function() {
            $http.get("http://jsonplaceholder.typicode.com/posts").
                success(function(data, status, headers, config) {
                    self.posts = data;
                    self.selectedPost = {};
                    self.newPost = {};
                    self.editButtonState = "disabled";
                }).
                error(function(data, status, headers, config) {
                    // log error
                });
        };

        self.refresh();
    }

    angular
        .module("app")
        .controller("Main", [
            "$http",
            mainCtrl
        ]);;
})();