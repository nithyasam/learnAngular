var myApp = angular.module("myApp", ['ui.bootstrap']);

myApp.controller('TabsCtrl', [ '$scope', function($scope) {
	$scope.tabs = [ {
		title : "Dynamic Title 1",
		content : "Dynamic content 1"
	}, {
		title : "Dynamic Title 2",
		content : "Dynamic content 2",
		disabled : true
	} ]

} ]);

myApp.config(function($routeProvider) {
	$routeProvider.when('/Posts', {
		templateUrl : 'templates/Posts.html',
		controller : 'showPostsController'
	});
	$routeProvider.when('/AboutMe', {
		templateUrl : 'templates/AboutMe.html',
		controller : 'showAboutMeController'
	});
	$routeProvider.when('/MyFriends', {
		templateUrl : 'templates/MyFriends.html',
		controller : 'showMyFriendsController'
	});

});