(function() {
    "use strict";

    angular.module('app')
            .controller(
                'loginController', function($scope, $http) {
        var vm = this;

        vm.login = function() {
            $http.post("login", {code: vm.accessCode})
                .success(function(data, status) {
                    console.log(data);
            });
        }
    });
})();