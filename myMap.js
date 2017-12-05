// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

var ari = [];
for (var i = 0; i < arr.length; i++) {
 	ari[i] = callback(arr[i], i, arr); 
}
return ari;
}




// ar new_array = arr.map(function callback(currentValue, index, array) {
//     // Return element for new_array
// }[, thisArg])

// }

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
