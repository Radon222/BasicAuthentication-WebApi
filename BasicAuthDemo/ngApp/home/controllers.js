﻿'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', 'HomeService',
    function ($scope, HomeService) {
        HomeService.GetSecureData(function (response) {
            $scope.demoData = response.data.demoData;
        });
    }]);