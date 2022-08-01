/**
 * BEST SOLUTION
 * Takes two arrays and returns the difference element
 * @param {array} a array of numbers
 * @param {array} b array of numbers
 * @return {array}
 */
export function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}

/**
 * ANOTHER BEST SOLUTION
 * Takes two arrays and returns the difference element
 * @param {array} a array of numbers
 * @param {array} b array of numbers
 * @return {array} 
 */
export function BestarrayDiff(a, b) {
    return a.filter(x => {
        return b.indexOf(x) == -1;
    });
}

console.log(arrayDiff([3, 4], [3]));
