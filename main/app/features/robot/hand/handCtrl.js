'use strict';

angular.module('robot.manager')
    .controller('HandCtrl',['ApplicationService',
        'Step','$scope','RobotPlayerService','TestService',
        function(ApplicationService,Step,$scope,RobotPlayerService,TestService){


            $scope.testService = TestService;


            $scope.currentStep =  new Step();
            $scope.robotPlayerService = RobotPlayerService;
            $scope.applicationService =  ApplicationService;


            $scope.$watch('currentStep.hand',function(){
                RobotPlayerService.playHand($scope.currentStep.hand).then(function(too){
                    $scope.requesInfo = too.data.status;
                },function(){
                    $scope.requesInfo = 'error';

                })
            },true)


        }]);

