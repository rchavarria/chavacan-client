(function () {
  'use strict';

  angular.module('chavacanClientApp')
    .controller('NavbarCtrl', function ($scope, $location) {
      $scope.isActive = function (viewLocation) {
        return (viewLocation === $location.path());
      };

    });
})();