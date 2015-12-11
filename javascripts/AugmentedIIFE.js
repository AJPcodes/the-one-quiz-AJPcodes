var FruitMaker = (function(fruitMaker) {

	fruitMaker.slice = function(fruit, slices){

		var slicedFruit = [];

		i=1;
		 do {
		 	slicedFruit.push(fruit)
		 } while (i++ < slices);

		return slicedFruit;
	}


	return fruitMaker;
 })(FruitMaker);