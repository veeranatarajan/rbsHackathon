rbsApp.controller('pollssurveysCtrl', function($scope) {

    $(".home").removeClass('active');
    $(".connection").removeClass('active');
    $(".pollsurvey").addClass('active');
    $(".group").removeClass('active');

    $scope.pollsData = [{
        "date": "22/09/2016",
        "name": "Jack",
        "topic": "Investment Banking",
        "Points": 3000
    },{
        "date": "20/09/2016",
        "name": "snow",
        "topic": "Gold Loan",
        "Points": 2000
    },{
        "date": "18/09/2016",
        "name": "Barett",
        "topic": "Vehicle Loan",
        "Points": 1000
    },{
        "date": "15/09/2016",
        "name": "Ben",
        "topic": "Home Loan",
        "Points": 750
    },{
        "date": "22/09/2016",
        "name": "Justin",
        "topic": "Mutual Funds",
        "Points": 500
    }];

    $scope.closedPollData = [{
        "date": "22/07/2016",
        "name": "Mike",
        "topic": "Vehicle Loan",
        "Points": 2500
    },{
        "date": "12/06/2016",
        "name": "Ted",
        "topic": "Home Loan",
        "Points": 1500
    },{
        "date": "18/04/2016",
        "name": "Smith",
        "topic": "Investment Banking",
        "Points": 500
    },{
        "date": "15/04/2016",
        "name": "Jacob",
        "topic": "Salary Account",
        "Points": 250
    },{
        "date": "22/03/2016",
        "name": "Martin",
        "topic": "Mutual Funds",
        "Points": 500
    }]
    $scope.detailsPopup = function(poll){

        if(poll.topic == "Investment Banking"){


            $('#InvestmentsurveyModal').modal('show');


        }else if(poll.topic == "Gold Loan"){


            $('#GoldsurveyModal').modal('show');


        }



    };

    $scope.detailsclosedPopup = function(poll){

        if(poll.topic == "Vehicle Loan"){


            $('#VehicleClosedSurveyModal').modal('show');


        }else if(poll.topic == "Home Loan"){


            $('#HomeClosedSurveyModal').modal('show');


        }



    };



});