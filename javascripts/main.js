var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// 7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".

document.getElementById('vanilla_output').innerHTML = "This content generated with vanilla JavaScript";
// 8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".
$('#jquery_output').html("This content generated with jQuery");

// 1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.


var modulus = function(num, mod){
	return num % mod;
};

// 1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

var doMath = function(x, y, func){
	return func(x, y);
};

var add = function(x, y){
	return x + y;
};

var subtract = function(x, y){
	return x - y;
};

console.log(doMath(2, 4, add));
console.log(doMath(10, 4, subtract));


// 1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.

function sortedPlanets(array) {
	return array.sort();
}

// 1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").

function reversedPlanets(array) {
	return array.map(function(planet){
		return planet.split("").reverse().join("");
	})
}

// 1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

function longPlanets(array) {
	return array.filter(function(planet){
		return planet.length >= 7;
	});
}

console.log(sortedPlanets(Planets));
console.log(reversedPlanets(Planets));
console.log(longPlanets(Planets));

//1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.

var getAnimals = function(){

	$.ajax({
		url: '../data/animals.json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		console.log("animals", data.animals);

	})
	.fail(function() {
		console.log("error");
	})

};

getAnimals();

