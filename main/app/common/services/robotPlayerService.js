angular.module('robot.manager')
    .service('RobotPlayerService',['$http','ApplicationService',
        function($http,ApplicationService){


            function _playHand(hand){
                return  $http({
                    method: 'GET',
                    url: ApplicationService.load().API.URL + '/fingers', params:hand
                })

            }


            return {
                playHand:_playHand
            }


        }]);