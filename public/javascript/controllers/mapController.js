(function() {
    "use strict";

    angular.module('app')
            .controller(
                'mapController',
                function($scope) {

        var vm = this;

        vm.map = {
            church: {
                name: "church",
                lat: 42.366188,
                long: 23.558759,
                zoom: 16
            },
            restaurant: {
                name: "restaurant",
                lat: 42.2740676,
                long: 23.6006228,
                zoom: 16
            }
        };
        vm.selectedLocation = vm.map.church;

        vm.selectLocation = function(name) {
            vm.selectedLocation = vm.map[name];
        }
    });
})();