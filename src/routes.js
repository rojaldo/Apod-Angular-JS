export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: '/page1.html'
    })
    .state('page1', {
      url: '/ej01',
      templateUrl: '/page1.html'
    })

    .state('page2', {
      url: '/ej02',
      templateUrl: '/page2.html'
    });
}
