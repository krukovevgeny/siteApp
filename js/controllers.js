
angular.module('siteApp')
.controller('MenuListCtrl', ['$rootScope', '$http', '$scope',  '$location', function($rootScope, $http, $scope, $location) 
{
    
    $scope.menus = 
  		[
    		{
    			'class':'sidebar-brand',
    			'id':'',
     			'text': 'BUSINESS CONTROL',
     			'icon': 'img/icons/svg/world80.svg',
     			'link': 'Main'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'СИСТЕМА',
     			'icon': 'img/icons/svg/business120.svg',
     			'link': 'System'
 			},
			{
    			'class':'',
    			'id':'',
     			'text': 'ВОЗМОЖНОСТИ',
     			'icon': 'img/icons/svg/circular156.svg',
     			'link': 'Opportunity'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'ПРИЕМУЩЕСТВО',
     			'icon': 'img/icons/svg/business107.svg',
     			'link': 'Advantage'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'ИСПОЛЬЗОВАНИЕ',
     			'icon': 'img/icons/svg/business112.svg',
     			'link': 'Example'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'СДЕЛАТЬ ЗАКАЗ',
     			'icon': 'img/icons/svg/businessmen26.svg',
     			'link': 'Order'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'КОНТАКТЫ',
     			'icon': 'img/icons/svg/standing77.svg',
     			'link': 'Contacts'
 			},
 			{
    			'class':'sidebar-brand',
    			'id':'',
     			'text': 'МОДУЛИ',
     			'icon': 'img/icons/svg/three115.svg',
     			'link': 'Modules'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'СЕРВЕР',
     			'icon': 'img/icons/svg/business111.svg',
     			'link': 'Server'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'АНАЛИТИКА',
     			'icon': 'img/icons/svg/businessman83.svg',
     			'link': 'Analises'
 			}, 			
 			{
    			'class':'',
    			'id':'',
     			'text': '1С:ПРЕДПРИЯТИЕ',
     			'icon': 'img/icons/svg/businessman110.svg',
     			'link': '1c'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'ПРИЛОЖЕНИЯ',
     			'icon': 'img/icons/svg/businessman116.svg',
     			'link': 'Applications'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'УСТРОЙСТВА',
     			'icon': 'img/icons/svg/man259.svg',
     			'link': 'Devices'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'ИНТЕРНЕТ',
     			'icon': 'img/icons/svg/men19.svg',
     			'link': 'Internet'
 			},
 			{
    			'class':'sidebar-brand',
    			'id':'',
     			'text': 'ДОПОЛНИТЕЛЬНО',
     			'icon': 'img/icons/svg/standing64.svg',
     			'link': 'Advanced'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'РАЗРАБОТКИ',
     			'icon': 'img/icons/svg/online22.svg',
     			'link': 'Development'
 			}
   		];

/*
$scope.menus = 
        [
            {
                'class':'',
                'id':'',
                'text': 'ИДЕИ',
                'icon': '',
                'link': 'Main'
            },
            {
                'class':'',
                'id':'',
                'text': 'ЦЕНА',
                'icon': '',
                'link': 'Main'
            },
            {
                'class':'',
                'id':'',
                'text': 'СЕРВИСЫ',
                'icon': '',
                'link': 'Main'
            },
            {
                'class':'',
                'id':'',
                'text': 'СТОИМОСТЬ',
                'icon': '',
                'link': 'Main'
            }           
        ];
*/
    $scope.select_menu = function(menu) 
   {
        $("#wrapper").toggleClass("toggled");
        $location.path('/' + menu.link);
   };
       new gnMenu( document.getElementById( 'gn-menu' ) );
    
  }]);

// Контроллер, отображающий Заголовок на Главной странице (большие буквы)
angular.module('siteApp')
.controller('MainCtrl', ['$rootScope', '$scope', '$route', '$http', '$location', '$routeParams', function($rootScope, $scope, $route, $http, $location, $routeParams) 
{
  $scope.route = $route;
  $scope.routeParams = $routeParams;

}]);