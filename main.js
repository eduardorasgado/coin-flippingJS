/*TRY OUT IN CONSOLE AND NODEJS*/
/*NO NEED OF INDEX.HTML AND STYLE.CSS*/

/*
You are provided this flip function:
*/

function flip() {
  return Math.random() >= 0.5;
}


function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */

  /*I tried my best*/
  var max = 1000000;

  /*The initial value*/
  var randomized = 0;
  
  /*Restrictions for limits*/
  if (n < max && n >= 0) {
    /*n times iteration*/
    for (var i = 0; i < n; i++) {
      /*Success means 1 point added*/
      var flipped = flip();
      randomized += flipped;
    }
    /*The sum of all the success flip*/
    return randomized;
  }
  return "bad request: no > than 1 million or < 0";
  
  // Returns a number between [0, n)
}

/*TRY OUT IN CONSOLE AND NODEJS*/
console.log(randomNumber(1000001));
console.log(randomNumber(15));
console.log(randomNumber(1500));
console.log(randomNumber(500));
console.log(randomNumber(1));
console.log(randomNumber(0));
console.log(randomNumber(-5));

