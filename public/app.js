angular.module('theBlog', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
  .state('food',{
    url: '/food',
    templateUrl: './views/food.html'
  })
  .state('shop',{
    url: '/shop',
    templateUrl: './views/shop.html'
  })
  .state('contact',{
    url: '/contact',
    templateUrl: './views/contact.html'
  })

})
