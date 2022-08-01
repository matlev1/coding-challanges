/**
 * LeetCode
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

/**
 * My Solution
 * @param {number} x
 * @return {number}
 */
export function reverse(x) {
    const limit = Math.pow(2, 31);
    const m = x > 0 ? 1 : -1;
    const result = parseInt(
        x
            .toString()
            .split('')
            .reverse()
            .join('')
    );

    return result > limit ? 0 : result * m;
}

/**
 * Best Solution
 * @param {number} x
 * @return {number}
 */
export function reverseBest(x) {
    let reverse = 0;
    const isNegative = x < 0 ? -1 : 1;
    x = x * isNegative;

    // capture single digits
    if (x / 10 < 1) {
        return x;
    }

    // reverse
    while (x >= 1) {
        const diff = parseInt(x % 10);
        reverse = reverse * 10 + diff;
        x = x / 10;
    }

    // capture greater than 32bit
    if (reverse > Math.pow(2, 31) - 1) {
        return 0;
    }

    // capture negative
    return reverse * isNegative;
}
