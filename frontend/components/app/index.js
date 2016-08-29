angular.module('TreeHouse.component.app', [])
.component('app', {
  template: require('./template.html'),
  controller: ['$timeout', function($timeout) {
    this.showPrice = false;

    this.togglePrice = function() {
      this.showPrice = !this.showPrice;
      $timeout(() => {
        var firstName = document.getElementById('first_name');
        firstName[this.showPrice ? 'focus' : 'blur']();
      }, 400);
    }
  }]
});
