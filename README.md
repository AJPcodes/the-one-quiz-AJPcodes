# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that select only the first of the sibling li elements. Make the text for that item bold, and underlined.
2. Make all li elements behave as inline elements.
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.

  **Student answer: **

  Hoisting is the way javascript handles variable declarations in their respective scope.

  Function and variable declarations e.g.
  'var x' or 'function doSomething() {}' are hoisted and read to establish scope before the function executes.

  Variable and functions expressions, on the other hand are not immediately evaluated.
  eg.
  "x = 'string'" or "var y = function() {}"

  The named variable from the expressions are added to scope, but the values they become equal to are not available until after the expression has run.


1. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.

  **Student answer: **

  A callback is a function passed into another function as a parameter.

  This is useful in a number of cases. For example you could pass a callback function in to an asychronus AJAX request, that does something with data when it's available.

  eg.

  function doFunctoArg(func, arg) {
    return func(arg);
  }

  function double(x){
    return x * 2;
  } //doubles any arg, x

  doFuncToArg(double, 3); //returns 6

## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. I included two other script files in the HTML, `IIFE.js` and `AugmentedIIFE.js` that you will use for these tasks.
1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.

1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?
  **Student answer:**
  post, get, put, delete

1. Why did we use Promises when dealing with asynchronous XHR calls?
  **Student answer:**

A promise allows you to direct your program to wait until XHR data is available before executing any functions that are dependent on that data.

1. Provide a simple example of the syntax for handling a Promise.
  **Student answer:**

  Assuming using the q library, this is how I would make the getAnimals function into a promise;
```
var getAnimals = function(){

  var deffered = Q.defer();

  $.ajax({
    url: '../data/animals.json',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data) {
    deffered.resolve(data)
  })
  .fail(function(error) {
    deffered.reject(error.message);
  })

  return deffered.promise;

};

animalsPromise = getAnimals;
animalsPromise.then(function(promiseData){
  console.log(promiseData);
})
```


## Scope and this

What gets logged to the console when the following code executes? Explain why.

**Student answer: **

The console log is 42, because the scope for 'this' is defined at the initial call-point of the function. Since steve is called in the global namespace, 'this.answer' looks for the 'answer' variable in the global namespace, which is 42. If you were to log 'answer' without 'this' you'd get the variable in the local scope. In this case 666.


```
var answer = "42";

function steve() {
  luke();
}

function luke() {
  var answer = "0";
  greg(answer);
}

function greg(answer) {
  var answer = "666";
  console.log( this.answer );
}

steve();
```

