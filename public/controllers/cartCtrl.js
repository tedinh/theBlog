angular.module("theBlog").controller('cartCtrl', function($scope, cartSrv) {

      function getCartTotal() {
        cartSrv.getCartTotal().then(function(response) {
        $scope.totalPrice = response.data[0].sum
      })
    }
    getCartTotal()

      function getItems() {
        cartSrv.getItems().then(function(res) {
          console.log(res.data);
          $scope.items = res.data.reverse();
        })
      }
      getItems()

      $scope.deleteItem = function(id) {
        console.log("delete item controllers")
        cartSrv.deleteItems(id).then(function(response) {
          getCartTotal();
          getItems();
        })
      }

      $scope.back = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      $scope.options = [...$scope.back].reverse()


      })
