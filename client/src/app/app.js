angular.module('word', ['ngMaterial'])
    .controller('wordCtrl', function ($http) {
        var vm = this;

        $http.get('http://192.168.1.240:9988/word')
            .then(function (result) {
                vm.words = result.data;
            });
    });