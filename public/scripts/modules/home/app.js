
angular.module('app.home', [])

.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl as Home'
        });
        $locationProvider.html5Mode(true);
    }]);