angular.module('TreeHouse.calculator', [])
.controller('insulationPricingCalculator', ['$scope', function($scope) {
  $scope.floors = 2;
  $scope.sqFt = 1500;
  $scope.utilities = 210;

  this.updatePrice = function() {
    var insulation = ($scope.sqFt / Number($scope.floors)) * 0.95;
    var airSealing = $scope.sqFt * 0.45;
    $scope.price = insulation + airSealing;
    $scope.price += $scope.price * 0.0825;
  };

  this.updateSavings = function() {
    $scope.savings = $scope.utilities * 0.2;
    $scope.payback = ($scope.price / $scope.savings) / 12;
  };

  $scope.$watch('sqFt', this.updatePrice);
  $scope.$watch('floors', this.updatePrice);
  $scope.$watch('utilities', this.updateSavings);
}]);
