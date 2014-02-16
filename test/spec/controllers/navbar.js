'use strict';

describe('Controller: NavbarCtrl', function () {

  beforeEach(module('chavacanClientApp'));

  var NavbarCtrl,
    scope,
    mockLocation;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    mockLocation = $location;

    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));

  it('should return true when location matches', function () {
    mockLocation.path('/');
    expect(scope.isActive('/')).toBeTruthy();
  });

  it('should return false when location does not match', function () {
    mockLocation.path('/');
    expect(scope.isActive('/foo')).toBeFalsy();
  });

  it('should return false although when location matches in a local path', function () {
    mockLocation.path('/#/');
    expect(scope.isActive('/')).toBeFalsy();
  });
});
