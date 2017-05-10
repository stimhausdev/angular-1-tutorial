(function(){

	var app = angular.module("stimHaus");

	var MainCtrl = function($scope){
    $scope.siteTitle = "StimHaus Gem Store";
  };

  var StoreCtrl = function(){
  	this.product = gem;
  };

 	var gem = {
 		name: 'Dodecahedron',
 		price: 2.95,
 		description: '...'
 	};

  app.controller('MainCtrl', ["$scope", MainCtrl]);
  app.controller('StoreCtrl', [StoreCtrl]);

}());