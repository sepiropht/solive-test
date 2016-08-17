( function() {
  'use strict';


  angular
    .module( 'app' )
    .controller('MainController', MainController);

  function MainController() {
   var vm = this;
   
   $http.get('/api/stat').success(function (data) {
         vm.articles = data;
       });

  }

} )();
