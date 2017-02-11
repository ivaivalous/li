(function() {
    "use strict";

    angular.module('app')
            .controller(
                'mediaController',
                function($scope, $http, $stateParams) {

        const DEFAULT_ALBUM = "";

        var vm = this;
        var albumShown = DEFAULT_ALBUM;
        vm.shouldShow = shouldShow;
        vm.toggleShow = toggleShow;

        initController();

        function initController() {
            fetchPhotosList();
        }

        function fetchPhotosList() {
            $http.get("photos").success(
                function(data, status) {
                    vm.pictures = JSON.parse(data);
                    albumShown = getAlbumFromState($stateParams.album);
            });
        }

        function toggleShow(dir) {
            // Allow "unselecting" the current choice
            if (albumShown === dir) {
                showDefaultAlbum();
            } else {
                albumShown = dir;
            }
        }

        function shouldShow(dir) {
            return albumShown === dir;
        }

        function showDefaultAlbum() {
            albumShown = DEFAULT_ALBUM;
        }

        // Call after you have the list of albums
        function getAlbumFromState(album) {
            // The user might have requested an album that
            // does not really exist.
            if (vm.pictures[album] == undefined) {
                return DEFAULT_ALBUM;
            }

            return album;
        }
    });
})();