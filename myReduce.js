// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	//when NO initialValue is provided
    // it uses element 0 as the starting point (1st arg):
	var poop;
	var i = 0;
	if (initialValue === undefined) { 
		// console.log("undefined");
		poop = arr[0];
		i++;
	} else { 
		poop = initialValue;
		// console.log(initialValue);

	}
	for (; i < arr.length; i++) {
		poop = callback(poop, arr[i], i, arr); 
		// console.log(poop);
	}
	return poop;
}




/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/






// export this function (you can ignore this for now)
module.exports = myReduce;
