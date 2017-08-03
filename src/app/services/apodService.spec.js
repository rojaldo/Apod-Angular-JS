import angular from 'angular';
import 'angular-mocks';
import ApodService from './apodService';

describe('ApodService service', () => {
  beforeEach(() => {
    angular
      .module('ApodService', [])
      .service('ApodService', ApodService);
    angular.mock.module('ApodService');
  });

  it('should', angular.mock.inject(ApodService => {
    expect(ApodService.getData()).toEqual(3);
  }));
});
