'use strict';
rbsApp.controller('launchpollCtrl', function($scope, $location){

    $(".home").removeClass('active');
    $(".connection").removeClass('active');
    $(".pollsurvey").addClass('active');
    $(".group").removeClass('active');

    $scope.pollsuccess = function(){
        
        
       $('#myModal').modal('show');
        
    }
    
});