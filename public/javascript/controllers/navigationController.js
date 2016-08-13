(function() {
    "use strict";

    angular.module('app')
            .controller(
                'navigationController',
                function($scope, $state) {

        var vm = this;
        vm.state = $state.current;
    });
})();