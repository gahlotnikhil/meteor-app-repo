if (Meteor.isClient) {
	angular.module('test-app',[
		'angular-meteor', 
		'ui.router',
  		'ngMaterial']);

	function onReady() {
	  angular.bootstrap(document, ['test-app']);
	}

	if (Meteor.isCordova)
	  angular.element(document).on("deviceready", onReady);
	else
	  angular.element(document).ready(onReady);
}