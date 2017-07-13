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
    templateUrl: './views/food.html',
    controller: 'foodCtrl'
  })
  .state('shop',{
    url: '/shop',
    templateUrl: './views/shop.html',
    controller: 'shopCtrl'
  })
  .state('contact',{
    url: '/contact',
    templateUrl: './views/contact.html'
  })
  .state('cart', {
    url: '/shoppingCart',
    templateUrl: './views/shoppingCart.html',
    controller: 'cartCtrl'
  })
  .state('signUp',{
    url: '/login',
    templateUrl: './views/signUp.html',
    controller: 'signUpCtrl'
  })

})
