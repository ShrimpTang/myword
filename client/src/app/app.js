angular.module('word', ['ngMaterial'])
    .controller('wordCtrl', function ($http,$mdSidenav) {
        var vm = this;
        $http.get('http://127.0.0.1:9988/word')
            .then(function (result) {
                vm.words = result.data;
            });
        vm.toggleSidenav = function () {
            $mdSidenav('sidenav').toggle();
        }
    });