angular
.module('app.home')
.controller('HomeCtrl', HomeController);

 HomeController.$inject = [];

function HomeController() {
	var _this = this;
    _this.title = 'Welcome !';
}
