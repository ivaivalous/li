(function() {
    "use strict";

    angular.module('app')
            .controller(
                'mapController',
                function($scope, $stateParams) {

        var vm = this;

        vm.map = {
            church: {
                name: "church",
                altNames: ["църква", "снимки"],
                title: "Църква „Св. Тодор“, с. Драгушиново",
                lat: 42.366188,
                long: 23.558759,
                zoom: 16
            },
            restaurant: {
                name: "restaurant",
                altNames: ["ресторант"],
                title: "Хотел „Лион“, к.к. Боровец",
                lat: 42.2740676,
                long: 23.6006228,
                zoom: 16
            },
            brides: {
                name: "bride",
                altNames: ["взимане", "коктейл"],
                title: "Домът на булката, с. Драгушиново",
                lat: 42.369147,
                long: 23.558317,
                zoom: 16
            }
        };
        vm.selectedLocation = vm.map.church;
        vm.locationName = $stateParams.location;

        initController();

        function initController() {
            if (vm.locationName === undefined) {
                return;
            }

            for (var location in vm.map) {
                if (vm.map.hasOwnProperty(location)) {
                    var altNames = vm.map[location].altNames;
                    if (altNames.indexOf(vm.locationName) !== -1) {
                        vm.selectedLocation = vm.map[location];
                        return;
                    }
                }
            }
        }

        vm.selectLocation = function(name) {
            vm.selectedLocation = vm.map[name];
        }
    });
})();