var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

//
// myEach(numArray, function print(element, index, arr) {
//    console.log('inside myEach', element, index, arr);
//  });




// 
/* myMap */
var sum = function(previous, current){
    return previous + current;
}
var input = [1,2,3];
var output = myReduce(input, sum, 15);

