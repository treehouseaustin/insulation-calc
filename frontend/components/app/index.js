angular.module('TreeHouse.component.app', [])
.component('app', {
  template: require('./template.html'),
  controller: ['$timeout', function($timeout) {
    this.showPrice = false;

    this.togglePrice = function() {
      var firstName = document.getElementById('first_name');
      this.showPrice = !this.showPrice;
      $timeout(() => {
        firstName[this.showPrice ? 'focus' : 'blur']();
      }, 400);
    }
  }]
});
