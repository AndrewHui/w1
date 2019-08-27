# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose
The purpose is to practice creating functions based on the Lodash library. 

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrewjhui/lotide`

**Require it:**

`const _ = require('@andrewjhui/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(firArray, secArray, trueOrFalse)`: takes in two arrays and the value true or false to assess if they are the same array
* `assertEqual(actual, expected)`: assess the primitive data types being equal to each other
* `assertObjectsEqual(firObject, secObject, trueOrFalse)`: takes in two objects and the value true or false to assess if they are the same object
* `countLetters(theBombString)`: counts the letters in the string, excluding spaces
* `countOnly(allItems, itemsToCount)`: counts an array of strings and returns amount of times the string is shown in the array
* `eqArrays(firstArray, secondArray)`: compares first array and second array
* `eqObjects(object1, object2)`: compares first object and second object
* `findKey(objectLookup, callback)`: takes in an object and takes in a callback function to find the key value within the object
* `findKeyByValue(discoverObject, findValue)`: takes in an object and the key value. It should return the key that the value is found in the object.
* `flatten(sneakyArray)`: uses recursive to flatten an array so that all nested arrays are in the top level array
* `head(theArray)`: returns the first value in the array
* `index`: index of all the functions in lotide
* `letterPositions(sentence)`: takes in a string and returns an object with all the letters with number of instances seen in the string
* `map(array, callback)`: map returns a new array. it iterates through the old array and performs the callback function on the array.
* `middle(findMiddleArray)`: outputs a new array with the middle numbers in an array.
*  `tail(theArray)`: takes the whole input array except first value of the input array
* `takeUntil(array, callback)`: takes an input array and stops when it finds the value of callback
* `without(theArray, removalArray)`: takes an input array and then removes all value from the array from the removalArray
