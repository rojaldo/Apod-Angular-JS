class ApodDateComponentController {
  constructor($scope, $log, $filter, $http) {
    $scope.options = {
      minDate: new Date(),
      showWeeks: true
    };

    $scope.toggleMin = function () {
      $scope.options.minDate = $scope.options.minDate ? null : new Date();
    };

    function onFetchComplete(success) {
      $scope.apodToday = success.data;
    }

    function onError(error) {
      $scope.erros = 'Unable to fetch the data' + error;
    }

    $scope.request = function () {
      $log.info('click');
      const dateString = $filter('date')($scope.dt, 'yyyy-MM-dd');
      const url = 'https://api.nasa.gov/planetary/apod?date=' + dateString + '&api_key=DEMO_KEY';
      $http.get(url).then(onFetchComplete, onError);
    };

    $scope.toggleMin();
  }
}

export const apodDateComponent = {
  template: require('./apodDateComponent.html'),
  controller: ApodDateComponentController
};
