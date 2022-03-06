'use strict';

describe('phoneDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('phoneDetail'));

  // Test the controller
  describe('PhoneDetailController', function() {
    var ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $stateParams) {
      ctrl = $componentController('phoneDetail');
      ctrl.phone = {name: 'phone xyz'};
    }));

    it('should fetch the phone details', function() {
      expect(ctrl.phone).toEqual({name: 'phone xyz'});
    });

  });

});
