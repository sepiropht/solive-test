( function() {
  'use strict';


  angular
    .module( 'app' )
    .config( routing );

  function routing( $stateProvider ) {

    $stateProvider
      .state( 'main', {
        url: '/main',
        templateUrl: 'components/main.html',
        controller: 'MainController as vm',
      } )

  }

} )();
