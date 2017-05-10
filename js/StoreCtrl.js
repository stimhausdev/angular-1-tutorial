(function(){

	var app = angular.module("stimHaus");

  var StoreCtrl = function(){
  	this.products = gems;
  };

 	var gems = [
 	{
 		name: 'Dodecahedron',
 		price: 2.95,
 		description: '...',
 		canPurchase: true,
 		soldOut: false,
 		images: [],
 		reviews: [
 		{
 			stars: 5,
 			body: "I love it",
 			author: "fake@fake.com"
 		}]
 	},
 	{
 		name: 'Pentagonal Gem',
 		price: 5.95,
 		description: '...',
 		canPurchase: false,
 		soldOut: false,
 		images: [],
 		reviews: [
 		{
 			stars: 5,
 			body: "I love it",
 			author: "fake@fake.com"
 		}]
 	},
 	{
 		name: 'Ruby',
 		price: 1200.00,
 		description: '...',
 		canPurchase: false,
 		soldOut: false,
 		images: [],
 		reviews: [
 		{
 			stars: 5,
 			body: "I love it",
 			author: "fake@fake.com"
 		}]
 	}];

  app.controller('StoreCtrl', [StoreCtrl]);

}());