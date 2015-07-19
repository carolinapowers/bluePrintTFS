'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for blueprint
 */
(function() {

  angular
    .module('blueprint')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(isActive) {
    var vm = this;

    vm.user = { username: 'USER'};

    vm.isActive = isActive;
  }

})();
