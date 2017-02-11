(function() {
    "use strict";

    var app = angular.module(
        'app', ['ui.router', 'ngMap']);

    app.config(function(
        $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'top-nav': {
                        templateUrl: 'views/navigation/top-navigation.html',
                        controller: 'navigationController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('dashboard', {
                url: "/",
                views: {
                    'content@': {
                        controller: "dashController",
                        controllerAs: "vm",
                        templateUrl: "views/dashboard/dash.html"
                    }
                }
            })
            .state('app.story', {
                url: "/за-нас",
                niceName: "За нас",
                views: {
                    'content@': {
                        templateUrl: "views/story/story.html",
                    }
                }
            })
            .state('app.map', {
                url: "/карта/:location",
                niceName: "Карта",
                views: {
                    'content@': {
                        controller: "mapController",
                        controllerAs: "vm",
                        templateUrl: "views/map/map.html",
                    }
                }
            })
            .state('app.timeline', {
                url: "/разписание",
                niceName: "Разписание",
                views: {
                    'content@': {
                        templateUrl: "views/timeline/timeline.html",
                    }
                }
            })
            .state('app.info', {
                url: "/информация",
                niceName: "Информация",
                views: {
                    'content@': {
                        templateUrl: "views/info/info.html",
                    }
                }
            })
            .state('app.media', {
                url: "/медия/:album",
                niceName: "Снимки и видео",
                views: {
                    'content@': {
                        controller: "mediaController",
                        controllerAs: "vm",
                        templateUrl: "views/media/media.html",
                    }
                }
            }
        );
    });

    app.run(function($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function() {
           document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    });
})();