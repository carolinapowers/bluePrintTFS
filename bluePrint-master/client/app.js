'use strict';

/**
 * @module blueprint
 *
 * @description
 * Main module of the application.
 */
angular
  .module('blueprint', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  });
