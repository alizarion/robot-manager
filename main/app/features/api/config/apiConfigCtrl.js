'use strict';

angular.module('robot.manager')
    .controller('ApiConfigCtrl',['$scope','ITLocalStorage','ApplicationService',
        function($scope,ITLocalStorage,ApplicationService){

            $scope.application = ApplicationService.load();

            $scope.applicationService = ApplicationService;
}]);