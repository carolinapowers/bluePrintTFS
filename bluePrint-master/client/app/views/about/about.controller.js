'use strict';

/**
 * @ngdoc controller
 *
 * @name AboutCtrl
 *
 * @description
 * Controller for blueprint
 */
(function() {

  angular
    .module('blueprint')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

})();
