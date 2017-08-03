import angular from 'angular';
import 'angular-mocks';
import {apodDateComponent} from './apodDateComponent';

describe('apodDateComponent component', () => {
  beforeEach(() => {
    angular
      .module('apodDateComponent', ['app/components/apodDateComponent.html'])
      .component('apodDateComponent', apodDateComponent);
    angular.mock.module('apodDateComponent');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<apodDateComponent></apodDateComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
