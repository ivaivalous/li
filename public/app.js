var app;
(app = function() {
    "use strict";

    angular.module('li', ['li.services', 'li.controllers', 'ui.router']).

    config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login ");

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "views/login/login.html"
            })
            .state('dashboard', {
                url: "/",
                templateUrl: "views/dashboard/dash.html"
            })
            .state('story', {
                url: "/story",
                templateUrl: "views/story/story.html",
            })
            .state('timeline', {
                url: "/timeline",
                templateUrl: "views/timeline/timeline.html",
            })
            .state('media', {
                url: "/media",
                templateUrl: "views/media/media.html",
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "views/admin/admin.html",
            });
    });
})();