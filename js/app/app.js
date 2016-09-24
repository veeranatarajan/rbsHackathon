/**
 * Created by VEERAMANIN on 9/23/2016.
 */
'use strict';
var rbsApp = angular.module('rbsApp', ['ngRoute']);

rbsApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when(
        '/home',{
            templateUrl:'js/app/views/home.html',
            controller:'homeCtrl'
        })
        .when('/pollsurveys',{
            templateUrl:'js/app/views/polls.html',
            controller:'pollssurveysCtrl.js'
        })
        .when('/connections',{
            templateUrl:'js/app/views/connections.html',
            controller:'connectionsCtrl'
        })
        .when('/groups',{
            templateUrl:'js/app/views/connections.html',
            controller:'groupsCtrl'
        })
        .when('/launchpoll',{
            templateUrl:'js/app/views/launchpoll.html'

        });

    $routeProvider.otherwise({redirectTo: '/home'});
});
