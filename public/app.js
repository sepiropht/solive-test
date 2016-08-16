
angular.module('app', [
	'ngRoute',
	'LocalStorageModule',
    'app.home',
	])

.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
    }])
