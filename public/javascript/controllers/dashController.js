(function() {
    "use strict";

    angular.module('app')
            .controller(
                'dashController',
                function($scope, $state, $interval) {

        var vm = this;
        vm.state = $state.current;
        vm.nameChangeInterval = 2000;

        vm.guests = shuffle([
            "Ягода", "Диана", "Марияне", "Иване",
            "Гергана", "Пепи", "Софи", "Камене",
            "Маргарита", "Милчо", "Любен", "Мария",
            "Мише", "Краси", "Стефка", "Мариела",
            "Елиза", "Дара", "Павел", "Ангелина",
            "Алекс", "Лили", "Вере", "Венци",
            "Еме", "Митко", "Мира", "Саше", "Васко",
            "Петя", "Вальо", "Росен", "Деян",
            "Тони", "Иво", "Любчо", "Рали", "Никола",
            "Роса", "Калояне", "Галя", "Мили", "Ася",
            "Радина", "Мишо", "Иве", "Даниела", "Ани",
            "Венци", "Снежана", "Ради", "Аги",
            "Николай", "Вики", "Георги", "Рада", "Милена",
            "Йорданка", "Емил", "Фани", "Катя",
            "Дани", "Лети", "Ивана", "Зоя",
            "Венелин", "Петя", "Генчо", "Петър",
            "Ваньо", "Гери", "Цвети", "Лоза",
            "Руме", "Виктор", "Ясмина", "Ясен",
            "Лилия", "Хриси", "Владко", "Елина", "Бубе",
            "Валя", "Валери", "Християна", "Антон",
            "Неделчо", "Стояне", "Гого", "Мартине", "Соня",
            "Симона", "Марин", "Рая", "Захари",
            "Валентина", "Ангел"
        ]);

        vm.guestName = getRandomName();

        $interval(function () {
            vm.guestName = getRandomName();
        }, vm.nameChangeInterval);

        function shuffle(list) {
            for (let i = list.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [list[i - 1], list[j]] = [list[j], list[i - 1]];
            }

            return list;
        }

        function getRandomGuestIndex() {
            return Math.floor(Math.random() * (vm.guests.length + 1));
        }

        function getRandomName() {
            return vm.guests[getRandomGuestIndex()];
        }
    });
})();