'use strict';

angular.module('robot.manager').factory('Hand',[function(){

    function Hand(hand){
        this.thumb = hand ? hand.thumb : 180;
        this.ringfinger = hand ? hand.ringfinger : 180;
        this.auricular = hand ? hand.auricular : 180;
        this.index = hand ? hand.index : 180;
        this.major = hand ? hand.major : 180;

    }


    return function(hand){
        return new Hand(hand);
    }
}]);

