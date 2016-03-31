angular.module('word', [])
    .controller('wordCtrl', function ($http) {
        var vm = this;

        $http.get('http://127.0.0.1:9988/word')
            .then(function (result) {
                vm.words = result.data;
            });
    });