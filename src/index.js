import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'ng-videosharing-embed';
import 'ng-youtube-embed';

import {hello} from './app/hello';
import {apodComponent} from './app/components/apodComponent';
import {apodDateComponent} from './app/components/apodDateComponent';
import {apodService} from './app/services/apodService';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ui.bootstrap', 'ngYoutubeEmbed'])
  .config(routesConfig)
  .service('apodService', apodService)
  .component('apodComponent', apodComponent)
  .component('apodDateComponent', apodDateComponent)
  .component('app', hello);
