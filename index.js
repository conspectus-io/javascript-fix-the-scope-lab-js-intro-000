let animal = 'dog'

const myAnimal = () => animal

const yourAnimal = () => {
  let animal = 'cat';
  return animal
}

const add2 = (n) => {
  const two = 2;
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction();
theFunk = theFunk();
