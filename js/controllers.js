
angular.module('siteApp')
.controller('MenuListCtrl', ['$rootScope', '$http', '$scope',  '$location', function($rootScope, $http, $scope, $location) 
{
    $scope.menus = 
  		[
    		{
    			'class':'sidebar-brand',
    			'id':'',
     			'text': 'Название',
     			'icon': 'background-image:url(img/icons/svg/world80.svg)',
     			'link': 'Main'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Система',
     			'icon': 'background-image:url(img/icons/svg/business120.svg)',
     			'link': 'System'
 			},
			{
    			'class':'',
    			'id':'',
     			'text': 'Возможности',
     			'icon': 'background-image:url(img/icons/svg/circular156.svg)',
     			'link': 'Opportunity'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Приемущество',
     			'icon': 'background-image:url(img/icons/svg/business107.svg)',
     			'link': 'Advantage'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Пример использования',
     			'icon': 'background-image:url(img/icons/svg/business112.svg)',
     			'link': 'Example'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Сделать заказ',
     			'icon': 'background-image:url(img/icons/svg/businessmen26.svg)',
     			'link': 'Order'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Контакты',
     			'icon': 'background-image:url(img/icons/svg/standing77.svg)',
     			'link': 'Contacts'
 			},
 			{
    			'class':'sidebar-brand',
    			'id':'',
     			'text': 'Модули :',
     			'icon': 'background-image:url(img/icons/svg/three115.svg)',
     			'link': 'Modules'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Сервер',
     			'icon': 'background-image:url(img/icons/svg/business111.svg)',
     			'link': 'Server'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Аналитика',
     			'icon': 'background-image:url(img/icons/svg/businessman83.svg)',
     			'link': 'Analises'
 			}, 			
 			{
    			'class':'',
    			'id':'',
     			'text': '1С:Предприятие 8',
     			'icon': 'background-image:url(img/icons/svg/businessman110.svg)',
     			'link': '1c'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Приложения',
     			'icon': 'background-image:url(img/icons/svg/businessman116.svg)',
     			'link': 'Applications'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Устройства',
     			'icon': 'background-image:url(img/icons/svg/man259.svg)',
     			'link': 'Devices'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Интернет',
     			'icon': 'background-image:url(img/icons/svg/men19.svg)',
     			'link': 'Internet'
 			},
 			{
    			'class':'sidebar-brand',
    			'id':'',
     			'text': 'Дополнительно:',
     			'icon': 'background-image:url(img/icons/svg/standing64.svg)',
     			'link': 'Advanced'
 			},
 			{
    			'class':'',
    			'id':'',
     			'text': 'Разработки',
     			'icon': 'background-image:url(img/icons/svg/online22.svg)',
     			'link': 'Development'
 			}
   		];
    $scope.select_menu = function(menu) 
   {
        $("#wrapper").toggleClass("toggled");
        $location.path('/' + menu.link);

  };
  }]);

// Контроллер, отображающий Заголовок на Главной странице (большие буквы)
angular.module('siteApp')
.controller('MainCtrl', ['$rootScope', '$scope', '$route', '$http', '$location', '$routeParams', function($rootScope, $scope, $route, $http, $location, $routeParams) 
{
  $scope.route = $route;
  $scope.routeParams = $routeParams;

}]);