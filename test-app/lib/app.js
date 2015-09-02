if (Meteor.isClient) {
	angular.module('test-app',[
		'ngResource',
		'angular-meteor', 
		'ui.router',
  		'ngMaterial',
  		'infinite-scroll',
  		'ngAnimate', 
  		'ngAria',
  		'ngMessages']);

	angular.module('test-app').config(['$mdIconProvider', function ($mdIconProvider) {
  $mdIconProvider
    .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
    .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
    .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
    .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
    .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
    .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
    .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");
}]);

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