'use strict';
rbsApp.controller('connectionsCtrl', function($scope){
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
});