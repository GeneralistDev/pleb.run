'use strict';

/**
 * @ngdoc overview
 * @name plebrunApp
 * @description
 * # plebrunApp
 *
 * Main module of the application.
 */
angular
  .module('plebrunApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('pleb', {
        url: '/',
        component: 'plebComponent'
      })
      .state('about', {
        url: '/about',
        component: 'aboutComponent'
      });

    $locationProvider.html5Mode(true);
  });
