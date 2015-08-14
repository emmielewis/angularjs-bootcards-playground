(function() {
    "use strict";

    var app = angular.module("app", ["blockUI", "ngRoute"]);

    app.config([
        "$routeProvider",
        function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/mainView.html",
                    controller: "Main as vm"
                })
                .when("/test", {
                    templateUrl: "views/testView.html"
                })
                .otherwise("/");
        }
    ]);

})();