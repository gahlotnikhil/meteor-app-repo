if (Meteor.isClient) {
	angular.module('test-app',[
		'ngResource',
		'angular-meteor', 
		'ui.router',
  		'ngMaterial']);

	function onReady() {
	  angular.bootstrap(document, ['test-app']);

	  google.load("visualization", "1", {packages:["corechart"]});
	}

	if (Meteor.isCordova)
	  angular.element(document).on("deviceready", onReady);
	else
	  angular.element(document).ready(onReady);
} else {
	angular.module('test-app', ['angular-meteor']);
}