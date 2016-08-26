require('./styles/importer.scss');

import '@treehouse/ui';
import 'angular-range-slider';

import './components/app';
import './controllers/pricingCalculator';

angular.module('TreeHouse', [
  'treehouse.ui.marketing',
  'chasselberg.slider',
  'TreeHouse.component.app',
  'TreeHouse.calculator'
]).controller('app', function AppController() {

});
