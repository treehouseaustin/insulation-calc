angular.module('TreeHouse.component.app', [])
.component('app', {
  template: require('./template.html'),
  controller: ['$timeout', function($timeout) {
    this.showPrice = false;

    this.togglePrice = function() {
      this.showPrice = !this.showPrice;
      this.resetLeadForm();

      var firstName = document.getElementById('first_name');
      $timeout(() => firstName[this.showPrice ? 'focus' : 'blur'](), 400);
    }

    this.resetLeadForm = function() {
      angular.element(document.querySelectorAll('sf-lead-form form')).scope().sflead.$setPristine();
      this.lead = { type: this.lead.type };
    }
  }]
});
