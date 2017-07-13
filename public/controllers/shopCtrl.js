angular.module('theBlog').controller('shopCtrl', function($scope, shopSrv){

    shopSrv.getProds().then(function(res){
      console.log(res.data);
      $scope.prods = res.data;
    })


    $scope.addToCart = function(product){
      shopSrv.addToCart(product).then(response => {
        console.log(response)
      })

    }






})
