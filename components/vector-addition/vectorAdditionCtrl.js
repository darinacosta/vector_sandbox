app.controller("hypotenuse", ['$scope', 'vectorFunctions', function($scope, vf){
    
  $scope.title = "Add & Subtract Vectors"
  $scope.descrip = "Vector 2b shares the same magnitude and direction as Vector 2, but its tail is moved to the head of Vector 1 to illustrate the additive relationship of the two vectors."


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
		    {y: 'value2r', color: 'rgb(192, 133, 103)', thickness: '2px', type: 'linear', striped: true, label: 'Vector 2'},
		    {y: 'value2', color: 'lightgrey', thickness: '2px', type: 'linear', striped: true, label: 'Vector 2B'},
		    {y: 'value3', color: 'green', thickness: '2px', type: 'linear', striped: true, label: 'Product'}

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