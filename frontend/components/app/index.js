angular.module('TreeHouse.component.app', [])
.component('app', {
  template: require('./template.html'),
  controller: ['$scope', '$timeout', function($scope, $timeout) {
    this.showPrice = false;
    var inactivityTimeout;

    this.togglePrice = function() {
      this.showPrice = !this.showPrice;
      this.resetLeadForm();

      var firstName = document.getElementById('first_name');
      $timeout(() => firstName[this.showPrice ? 'focus' : 'blur'](), 400);

      $timeout.cancel(inactivityTimeout);

      if (!this.showPrice) return;
      inactivityTimeout = $timeout(() => this.togglePrice(), 300000);
    };

    this.resetLeadForm = function() {
      angular.element(document.querySelectorAll('sf-lead-form form')).scope().sflead.$setPristine();
      this.lead = { type: this.lead.type };
    };

    $scope.$on('trh:form:submitted', () => $timeout(() => this.togglePrice(), 3000));
  }]
});
