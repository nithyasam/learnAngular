var myApp = angular.module("myApp", ['ui.bootstrap']);

myApp.controller('TabsCtrl', [ '$scope', function($scope) {
	$scope.tabs = [ {
		title : "Posts",
		url : "#Post"
	}, {
		title : "About Me",
		url : "#AboutMe"
		
	} ,{
		title:"My Friends",
		url :"#MyFriends"
	}]

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