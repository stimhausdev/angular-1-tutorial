(function(){

	var app = angular.module("stimHaus");

	var PanelCtrl = function(){
		
  	this.tab = 1;

  	this.selectTab = function(setTab){
  		this.tab = setTab;
  	}

  	this.isSelected = function(checkTab){
  		return this.tab === checkTab;
  	};

  };

  app.controller('PanelCtrl', [PanelCtrl]);

}());