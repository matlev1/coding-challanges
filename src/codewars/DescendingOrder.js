/**
 * MY SOLUTION
 * Takes integer sorts in descending order
 * @param {number} n integer nuber to be reversed
 * @return {number} sortedi
 */
export function descendingOrder(n) {
    return (
        n
            .toString()
            .split('')
            .sort(function(a, b) {
                return b - a;
            })
            .join('') - 0
    );
}

/**
 * BEST SOLUTION
 * Takes integer sorts in descending order
 * @param {number} n integer nuber to be reversed
 * @return {number} sortedi
 */
export function BestdescendingOrder(n) {
    return parseInt(
        String(n)
            .split('')
            .sort()
            .reverse()
            .join('')
    );
}

// console.log(descendingOrder(1234));
