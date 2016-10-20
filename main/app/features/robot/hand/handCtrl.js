'use strict';

angular.module('robot.manager')
    .controller('HandCtrl',['ApplicationService',
        'Step','$scope','RobotPlayerService',
        function(ApplicationService,Step,$scope,RobotPlayerService){

            $scope.currentStep =  new Step();

            $scope.$watch('currentStep.hand',function(){
                RobotPlayerService.playHand($scope.currentStep.hand)

            },true)


        }]);



