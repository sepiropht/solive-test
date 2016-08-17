( function() {
  'use strict';


  angular
    .module( 'app' )
    .controller('MainController', MainController);

  function MainController($http) {
   var vm = this;

   $http.get('/api/stat').success(function (data) {
         vm.stats = data;
         debugger;
         vm.teams = vm.stats.apiResults[0].league.season.eventType[0].conferences[0].divisions[0].teams;
         //console.log(vm.stats.apiResults.[0].season.evenType[0].conferences.[]);
       });

  }

} )();
