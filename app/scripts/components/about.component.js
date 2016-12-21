'use strict';

/* @ngInject */
function aboutComponentController($scope) {
  $scope.$onInit = function () {
    console.log('on init');
  };
}

angular.module('plebrunApp')
  .component('aboutComponent', {
    templateUrl: 'scripts/components/about.component.html',
    controller: aboutComponentController
  });
