//1.
/*
  let filterOutOdds = (...arguments) => {
    let args = [...arguments];
    return args.filter((val) => val % 2 === 0);
  }
*/
/*
  //2.
  const min = (...arguments) => {
    return arguments.reduce((min, curVal) => curVal < min ? curVal: min);
  } 

  //3.
  const mergeObjects = (obj1, obj2) => {
    const newObj = {...obj1,...obj2};
    return newObj;
  }
*/
  //4.
  const doubleAndReturnArgs = (arr,...arguments) => {
   let dbldArgs = arguments.map((val) => {
    return val * 2;
   })
   return [arr + dbldArgs];
  }

  //5.
  /** remove a random element in the items array
and return a new array without that item. */
  function removeRandom(items) {
    //these are lines from the solution
    //this picks a random index inside the items
    let randInd = Math.floor(Math.random() * items.length);
// this creates a sub array from the beginning to before the removed character and also combine another sub array from the character after the removed character to the end of the items.
    return [...items.slice(0,randInd), ...items.slice(1 + randInd)]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    const newArr = [...array1] + [...array2]
    return newArr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {

}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
}