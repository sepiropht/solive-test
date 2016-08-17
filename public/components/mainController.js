( function() {
  'use strict';


  angular
    .module( 'app' )
    .controller('MainController', MainController);

  function MainController($http) {
   var vm = this;

   $http.get('/api/stat').success(function (data) {
         vm.stats = data;

         vm.teams = vm.stats.apiResults[0].league.season.eventType[0].conferences[0].divisions[0].teams;
       });

  }

} )();
