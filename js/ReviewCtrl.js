(function(){

	var app = angular.module("stimHaus");

	var ReviewCtrl = function(){

		this.review = {};

    this.formActive = false;

    this.openForm = function(){
      this.formActive = true;
    };

    this.addReview = function(gem){
      gem.reviews.push(this.review);
      this.review = {};
      this.formActive = false;
      // $('form').slideUp();
      // $('h4.review').removeClass('faded');
    };

  };

  app.controller('ReviewCtrl', [ReviewCtrl]);

}());