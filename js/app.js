var app = angular.module("vector-land", ['n3-line-chart'])

  app.controller("linechart", function($scope){
    
    $scope.xValue = 3
    $scope.yValue = 6

    $scope.$watchCollection('[xValue, yValue]', function(newValues){
      if (isNaN(newValues[0]) === false && isNaN(newValues[1]) === false){
	      $scope.data = [
				  {x: 0, value: 0, otherValue: 0},
				  {x: newValues[0], value: newValues[1], otherValue: 0}
				];
				console.log(newValues[1])
			}
    })

		$scope.options = {
		  axes: {
		    x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 20, ticks: 2},
		    y: {type: 'linear', min: 0, max: 20, ticks: 2},
		    y2: {type: 'linear', min: 0, max: 20, ticks: 2}
		  },
		  series: [
		    {y: 'value', color: 'steelblue', thickness: '2px', type: 'linear', striped: true, label: 'Coordinates'},
		    {y: 'otherValue', axis: 'y2', color: 'lightsteelblue', visible: false, drawDots: true, dotSize: 2}
		  ],
		  lineMode: 'linear',
		  tension: 0.7,
		  tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return 'pouet';}},
		  drawLegend: true,
		  drawDots: true,
		  columnsHGap: 5
		}
  });
  



