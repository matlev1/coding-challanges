/**
 * MY SOLUTION
 * Finds index of array element which is in the middle of elements which sum is equal
 * @param {array} arr array of numbers
 * @return {number} the index of the middle element or -1 when there is none
 */
export function findEvenIndex(arr) {
    let leftSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }
    return -1;
}

/**
 * BEST SOLUTION
 * Finds index of array element which is in the middle of elements which sum is equal
 * @param {array} arr array of numbers
 * @return {number} the index of the middle element or -1 when there is none
 */
export function BestfindEvenIndex(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
            return i;
        }
    }
    return -1;
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
