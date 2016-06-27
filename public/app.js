(function() {
    "use strict";

    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('login', {
                url: "/вход",
                templateUrl: "views/login/login.html"
            })
            .state('dashboard', {
                url: "/",
                templateUrl: "views/dashboard/dash.html"
            })
            .state('story', {
                url: "/история",
                templateUrl: "views/story/story.html",
            })
            .state('timeline', {
                url: "/разписание",
                templateUrl: "views/timeline/timeline.html",
            })
            .state('media', {
                url: "/медия",
                templateUrl: "views/media/media.html",
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "views/admin/admin.html",
            });
    });

    app.run(function($rootScope) {
    });
})();