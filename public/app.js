
var myApp = angular.module('app', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider){
         $urlRouterProvider.otherwise('/main');
    }]);
