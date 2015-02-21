app = angular.module("app", ["n3-line-chart","ui.router"])
  
  .config(function config($stateProvider){
		$stateProvider.state("vector-unit", {
			url: "",
			controller: "unitVectors as uv",
			templateUrl: "components/unit-vectors/unit-vectors.html"
		});


		$stateProvider.state("hypotenuse", {
			url: "",
			controller: "hypotenuse as hypotenuse",
			templateUrl: "components/vector-addition/vector-addition.html"
		})
	})


	.controller('TabsCtrl', ['$scope', function ($scope) {

    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  }]);
  



