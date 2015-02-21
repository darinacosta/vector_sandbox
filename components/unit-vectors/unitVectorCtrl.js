app.controller("unitVectors", ['$scope', 'vectorFunctions', function($scope, vf){
    $scope.title = "Calculate Unit Vector"
    $scope.descrip = "A unit vector is a vector with a length of precisely 1. Input the coordinates of a vector to determine its unit vector equivalent."


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

			$scope.options = {
			  axes: {
			    x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', max: 1, ticks: 2},
			    y: {type: 'linear', max: 1, ticks: 2},
			    y2: {type: 'linear', max: 1, ticks: 2}
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
    })
  }])