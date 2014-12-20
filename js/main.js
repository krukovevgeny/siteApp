angular.module('siteApp', ['ngRoute'])
       .config(['$routeProvider', '$locationProvider', '$httpProvider',
function ($routeProvider, $locationProvider, $httpProvider) 
{

    
    $routeProvider.when('/',                {templateUrl: 'pages/main.html',             controller: 'MainCtrl'});
    $routeProvider.when('/Main',            {templateUrl: 'pages/main.html',             controller: 'MainCtrl'});
 	$routeProvider.when('/System',          {templateUrl: 'pages/system.html',           controller: 'MainCtrl'});
	$routeProvider.when('/Opportunity',     {templateUrl: 'pages/opportunity.html',      controller: 'MainCtrl'});
	$routeProvider.when('/Advantage',       {templateUrl: 'pages/advantage.html',        controller: 'MainCtrl'});
	$routeProvider.when('/Example',         {templateUrl: 'pages/example.html',          controller: 'MainCtrl'});
	$routeProvider.when('/Order',           {templateUrl: 'pages/order.html',            controller: 'MainCtrl'});
	$routeProvider.when('/Contacts',        {templateUrl: 'pages/contacts.html',         controller: 'MainCtrl'});
	$routeProvider.when('/Modules',         {templateUrl: 'pages/modules.html',          controller: 'MainCtrl'});
	$routeProvider.when('/Server',          {templateUrl: 'pages/server.html',           controller: 'MainCtrl'});
	$routeProvider.when('/Analises',        {templateUrl: 'pages/analises.html',         controller: 'MainCtrl'});
	$routeProvider.when('/1c',       	    {templateUrl: 'pages/1c.html',               controller: 'MainCtrl'});
	$routeProvider.when('/Applications',    {templateUrl: 'pages/applications.html',     controller: 'MainCtrl'});
	$routeProvider.when('/Devices',         {templateUrl: 'pages/devices.html',          controller: 'MainCtrl'});
	$routeProvider.when('/Internet',        {templateUrl: 'pages/internet.html',         controller: 'MainCtrl'});
	$routeProvider.when('/Advanced',        {templateUrl: 'pages/advanced.html',         controller: 'MainCtrl'});
	$routeProvider.when('/Development',     {templateUrl: 'pages/development.html',      controller: 'MainCtrl'});

    $routeProvider.otherwise(               {redirectTo:  '/404'});

    $locationProvider.html5Mode(false).hashPrefix('');

}])
  	.run(['$rootScope', '$location', '$http',
function ($rootScope, $location, $http) 
{
    $rootScope.$on("$routeChangeStart", function (event, next, current) 
    {
        console.log("Located to: ", $location.path());
        $rootScope.error = null;
        
    });
}]);
