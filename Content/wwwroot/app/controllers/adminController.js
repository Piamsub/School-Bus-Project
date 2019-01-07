angular.module('main').controller('adminController', ['$scope', '$route', '$routeParams', '$location', '$cookies', '$controller', '$filter', 'adminService', 'constants',
    function ($scope, $route, $routeParams, $location, $cookies, $controller, $filter, adminService, constants) {
        $controller('baseController', { $scope: $scope });
        อันนี้หรอ
        $scope.GetInput = function () {
            //$scope.register ตัวนี้ส่งไปให้ serv js ไง
            adminService.AD_Checker_Reg($scope.register).then(function (response) {
                $scope.AD_Checker_Reg = response.data;
            })
        }

        $scope.GetAdDrive = function () {
            adminService.AD_Driver_Reg($scope.register).then(function (response) {
                $scope.AD_Driver_Reg = response.data;
            })
        }

        $scope.GetAdPar = function () {
            adminService.AD_Parent_Reg($scope.register).then(function (response) {
                $scope.AD_Parent_Reg = response.data;
            })
        }

        $scope.GetAdSchool = function () {
            adminService.AD_School_Reg($scope.register).then(function (response) {
                $scope.AD_School_Reg = response.data;
            })
        }

        $scope.GetAdStaff = function () {
            adminService.AD_Staff_Reg($scope.register).then(function (response) {
                $scope.AD_Staff_Reg = response.data;
            })
        }

    }
]);