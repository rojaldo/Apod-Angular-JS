import angular from 'angular';
import 'angular-mocks';
import {apodComponent} from './apodComponent';

describe('apodComponent component', () => {
  beforeEach(() => {
    angular
      .module('apodComponent', ['app/components/apodComponent.html'])
      .component('apodComponent', apodComponent);
    angular.mock.module('apodComponent');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<apodComponent></apodComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
