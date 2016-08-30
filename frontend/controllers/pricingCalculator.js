angular.module('TreeHouse.calculator', [])
.controller('insulationPricingCalculator', ['$scope', function($scope) {
  $scope.floors = 2;
  $scope.sqFt = 1500;
  $scope.utilities = 210;

  this.updatePrice = function() {
    var insulation = ($scope.sqFt / Number($scope.floors)) * 1;
    var airSealingRate = $scope.sqFt <= 1500 ? 0.45 : ($scope.sqFt <= 2500 ? 0.4 : ($scope.sqFt <= 3500 ? 0.35 : 0.3));
    var airSealing = $scope.sqFt * airSealingRate;
    $scope.price = insulation + airSealing;
    $scope.price += $scope.price * 0.0825;
  };

  $scope.$watch('sqFt', this.updatePrice);
  $scope.$watch('floors', this.updatePrice);
}]);
