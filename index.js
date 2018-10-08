"use strict";

if (Array.prototype.removeAt !== undefined) {
	Array.prototype.removeAt = (array, index) => {
		return array.slice(0, index - 1).concat(array.slice(index, array.length));
	};
} else {
	console.log('Array.prototype.removeAt method already exists!');
}  