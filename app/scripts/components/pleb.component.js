'use strict';

/* @ngInject */
function plebComponentController($scope) {
  function $onInit() {
    console.log($scope);
  }

  $scope.$onInit = $onInit;
}

angular.module('plebrunApp')
  .component('plebComponent', {
    // templateUrl: 'app/components/pleb.component.html',
    template: '<div>Pleb component</div>',
    controller: plebComponentController
  });
