class ApodComponentController {
  constructor($scope, $http) {
    this.text = 'My brand new component!';
    const apodUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'DEMO_KEY';

    function onFetchComplete(success) {
      $scope.apodToday = success.data;
    }

    function onError(error) {
      $scope.erros = 'Unable to fetch the data' + error;
    }

    $http.get(apodUrl + '?api_key=' + apiKey).then(onFetchComplete, onError);
  }
}

export const apodComponent = {
  template: require('./apodComponent.html'),
  controller: ApodComponentController
};
