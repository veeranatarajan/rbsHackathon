'use strict';
rbsApp.controller('connectionsCtrl', function($scope){

    $(".home").removeClass('active');
    $(".connection").addClass('active');
    $(".pollsurvey").removeClass('active');
    $(".group").removeClass('active');

    $("#user_recom_1,#user_recom_2,#user_recom_3,#user_recom_4,#user_recom_5").on('mouseenter',function(){
        console.log('in')
        $(this).find('.recommd_1_1').show(200);
    });
    $("#user_recom_1,#user_recom_2,#user_recom_3,#user_recom_4,#user_recom_5").on('mouseleave',function(){
        console.log('out')
        $(this).find('.recommd_1_1').hide(200);
    });
    $scope.showSearch = false;

    $scope.searchShow = function(){
        $scope.showSearch = true;
    };
    $scope.searchHide = function(){
        $scope.showSearch = false;
    };
    $scope.myConList = [
        {img:'',name:'Venkateshkumar L', rank:'2',points:'100'},
        {img:'',name:'Veeramani N', rank:'3',points:'100'},
        {img:'',name:'Srihari M R', rank:'1',points:'80'},
        {img:'',name:'Rajkeerthi T', rank:'5',points:'50'},
        {img:'',name:'Preeti R', rank:'6',points:'600'}];


    $scope.recomList = [{pname:'Platinum Credit Card',points:'2 Points',img:''},
        {pname:'Fuel Credit Card',points:'2 Points',img:''},
        {pname:'Mutual Funds',points:'10 Points',img:''},
        {pname:'Car Loan',points:'8 Points',img:''},
        {pname:'Home Loan',points:'5 Points',img:''}];

    $scope.users = [
        {firstname: 'John', lastname: 'Smith'},
        {firstname: 'Jane', lastname: 'Due'},
        {firstname: 'Bob', lastname: 'Rand'}
    ];




    $scope.dynamicPopover = {templateUrl: '../views/myPopoverTemplate.html'};
});