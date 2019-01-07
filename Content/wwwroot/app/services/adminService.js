angular.module('main').service("adminService", function ($http, constants) {
    this.AD_Checker_Reg = function (register) { //<<register ตัวนี้

       
        return $http.post(constants.BaseUrl + "Admin/AD_Checker_Register", { checker_register: register });
        //return $http.post(constants.BaseUrl + "Admin/AD_Checker_Register");
        //{ checker_register << อันนี้ชื่อ parameter ใน controller :register อันนี้รับมาจาก ctrl js}
    }

    this.AD_Driver_Reg = function (register) {
        return $http.post(constants.BaseUrl + "Admin/AD_Driver_Register", { Driver_register: register });
        
    } 

    this.AD_Parent_Reg = function (register) {
        return $http.post(constants.BaseUrl + "Admin/AD_Parent_Register", { Parent_register: register });

    }

    this.AD_School_Reg = function (register) {
        return $http.post(constants.BaseUrl + "Admin/AD_School_Register", { School_register: register });

    }

    this.AD_Staff_Reg = function (register) {
        return $http.post(constants.BaseUrl + "Admin/AD_Staff_Register", { Staff_register: register });

    }
});