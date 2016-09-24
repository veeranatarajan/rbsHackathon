'use strict';
rbsApp.controller('homeCtrl', function(){
    $("#recommd_1,#recommd_2,#recommd_3").on('mouseenter',function(){
        $(this).find('.recommd_1_1').show(200);
    });
    $("#recommd_1,#recommd_2,#recommd_3").on('mouseleave',function(){
        $(this).find('.recommd_1_1').hide(200);
    });
});