'use strict';

(function() {

  angular
    .module('blueprint')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '',
          templateUrl: 'app/views/main/main.view.html',
          controller: 'MainCtrl',
          controllerAs: 'MainCtrl',
          title: 'main'
        });
    });

}());
