angular.module('main').controller('authenController', ['$scope', '$route', '$routeParams', '$location', '$cookies', '$controller', '$filter', 'authenService', 'constants',
    function ($scope, $route, $routeParams, $location, $cookies, $controller, $filter, authenService, constants) {
        $controller('baseController', { $scope: $scope });

        //$scope.testAlert = function () {
        //    alert("Micky");
        //}

        $scope.testAlert2 = function () {
            authenService.initialize().then(function (response) {
                $scope.user = response.data;
            })
        }
        
    }
]);