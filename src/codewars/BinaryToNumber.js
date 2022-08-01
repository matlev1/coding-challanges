/**
 * BEST SOLUTION
 * Converts binary array to the number it represents in decimal
 * @param {array} arr
 * @return {number} representation of binary
 */
export const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};

// console.log(binaryArrayToNumber([0, 1, 0, 1]));
