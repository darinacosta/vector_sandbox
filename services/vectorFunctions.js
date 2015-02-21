app.service("vectorFunctions", function VectorFunctions(){
	var vf = this;

	vf.calculateVectorMagnitude = function(vector){

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