/**
 * MY SOLUTION
 * Sorts odd numbers only and leaves even numbers in their positions
 * @param {array} arr array of numbers
 * @return {array} sorted only odd numbers
 */
export function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 === 1) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j] && arr[j] % 2 === 1) {
                    const temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }
    return arr;
}

console.log(sortArray([1, 4, 5, 3, 4, 8, 9, 7, 12, 21, 34, 11]));

/**
 * BEST JS SOLUTION
 * Sorts odd numbers only and leaves even numbers in their positions
 * @param {array} array array of numbers
 * @return {array} sorted only odd numbers
 */
export function BestSortArray(array) {
    const odd = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => (x % 2 ? odd.shift() : x));
}
