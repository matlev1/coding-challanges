/**
 * BEST SOLUTION
 * Finds the member type based on the age and handicap
 * @param {array} data array of arrays holding age and handicap numbers
 * @return {array} member type
 */
export function openOrSenior(data) {
    return data.map(([age, handicap]) => (age >= 55 && handicap >= 7 ? 'Senior' : 'Open'));
}

// For running as node.
/* const input = {
    first: [[45, 12], [55, 21], [19, -2], [104, 20]],
    second: [[3, 12], [55, 1], [91, -2], [54, 23]],
    third: [[59, 12], [55, -1], [12, -2], [12, 12]],
}; */

// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
