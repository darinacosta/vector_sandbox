angular.module("vector-land", ["n3-line-chart","ui.router"])
  
  .config(function config($stateProvider){
		$stateProvider.state("vector-unit", {
			url: "",
			controller: "unitVectors as uv",
			templateUrl: "templates/1D.html"
		});


		$stateProvider.state("hypotenuse", {
			url: "",
			controller: "hypotenuse as hypotenuse",
			templateUrl: "templates/2D.html"
		})
	})

	.service("vectorFunctions", function VectorFunctions(){
		var vf = this;

		vf.calculateHypotenuse = function(vector){

      var vectorMagnitude1 = Math.sqrt(Math.pow(vector[0][0], 2) + Math.pow(vector[0][1], 2)),
          vectorMagnitude2 = Math.sqrt(Math.pow(vector[1][0], 2) + Math.pow(vector[1][1], 2));

		};
    
    vf.calculate2dUnitVector = function(vector){
  		var hypotenuse = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
  		vector0 = vector[0]/hypotenuse;
  		vector1 = vector[1]/hypotenuse;
  		product = [vector0.toFixed(5), vector1.toFixed(5)];
  		return product;
  	};
    
	})

	.controller('TabsCtrl', ['$scope', function ($scope) {

    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  }])

  .controller("unitVectors", ['$scope', 'vectorFunctions', function($scope, vf){
    $scope.title = "Unit Vectors"
  	$scope.xValue = 10
    $scope.yValue = 10


    $scope.$watchCollection('[xValue, yValue]', function(newValues){
      if (isNaN(newValues[0]) === false && isNaN(newValues[1]) === false){
      	var unitVector = vf.calculate2dUnitVector(newValues);
      	unitVector[0] !== NaN ? $scope.unitVectorX = unitVector[0] : $scope.unitVectorX = '';
        unitVector[1] !== NaN ? $scope.unitVectorY = unitVector[1] : $scope.unitVectorX = '';	      
        $scope.data = [
				  {x: 0, value: 0, c2: 0},
				  {x: unitVector[0], value: unitVector[1], c2: newValues[1]/3}
				];

				console.log(newValues[1]/10 * 10);
			}
    })

		$scope.options = {
		  axes: {
		    x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 1, ticks: 2},
		    y: {type: 'linear', min: 0, max: 1, ticks: 2},
		    y2: {type: 'linear', min: 0, max: 1, ticks: 2}
		  },
		  series: [
		    {y: 'value', color: 'steelblue', thickness: '2px', type: 'linear', striped: true, label: 'Unit Vector'},
		  ],
		  lineMode: 'linear',
		  tension: 0.7,
		  tooltip: {mode: 'scrubber', formatter: function(x, y, series) {
		  	return 'x: ' + x + ' y: '+ y;
		  }},
		  drawLegend: true,
		  drawDots: true,
		  columnsHGap: 5
		} 
  }])

  .controller("hypotenuse", ['$scope', 'vectorFunctions', function($scope, vf){
    
    $scope.title = "Vector Addition"

  	$scope.x_1 = 3
  	$scope.y_1 = 19
    $scope.x_2 = 9
    $scope.y_2 = 12

    $scope.$watchCollection('[x_1, y_1, x_2, y_2]', function(newValues){

    	console.log(newValues);
      
      var x_1 = newValues[0],
          y_1 = newValues[1],
          x_2r = newValues[2],
          y_2r = newValues[3],
          x_2 = x_1 + newValues[2],
          y_2 = y_1 + newValues[3];

	    $scope.data = [
	       
	      //Vector 1 
			  {x: 0, value: 0},
			  {x: x_1, value: y_1},
	      
	      //Vector 2
			  {x: x_1, value2: y_1},
			  {x: x_2, value2: y_2},

			  {x: 0, value2r: 0},
			  {x: x_2r, value2r: y_2r},

			  //Product
			  {x: 0, value3: 0},
			  {x: x_2, value3: y_2}

			];

			$scope.options = {

			  axes: {
			    x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', ticks: 4},
			    y: {type: 'linear', ticks: 4},
			    y2: {type: 'linear',  ticks: 4}
			  },
			  series: [
			    {y: 'value', color: 'steelblue', thickness: '2px', type: 'linear', striped: true, label: 'Vector 1'},
			    {y: 'value2r', color: 'pink', thickness: '1px', type: 'linear', lineMode: 'dashed', striped: true, label: 'Vector 2A'},
			    {y: 'value2', color: 'red', thickness: '2px', type: 'linear', striped: true, label: 'Vector 2B'},
			    {y: 'value3', color: 'green', thickness: '2px', type: 'linear', lineMode: 'dashed', striped: true, label: 'Product'}

			  ],
			  lineMode: 'linear',
			  tension: 0.7,
			  tooltip: {mode: 'axes', interpolate: 'true', formatter: function(x, y, series) {
			  	return 'x: ' + x + ' y: '+ y;
			  }},
			  drawLegend: true,
			  drawDots: true,
			  columnsHGap: 5
			}
				
    })

    
  }]);
  



