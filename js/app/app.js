/**
 * Created by VEERAMANIN on 9/23/2016.
 */
'use strict';
var rbsApp = angular.module('rbsApp', ['ngRoute', 'ui.bootstrap']);

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
            controller:'pollssurveysCtrl'
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
            templateUrl:'js/app/views/launchpoll.html',
            controller:'launchpollCtrl'

        });

    $routeProvider.otherwise({redirectTo: '/home'});
});
