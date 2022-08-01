/**
 * MY SOLUTION
 * Calculates the digital root of a number which is the sum of
 * all digits up until a single digit
 * @param {number} n a number with multiple digits
 * @return {number} sum of all digits until only one digit is left
 */
export function digitalRoot(n) {
    return n === 0
        ? 0
        : n
              .toString()
              .split('')
              .reduce((acc, curr) => {
                  // console.log(acc, curr);
                  const sum = parseInt(acc) + parseInt(curr);
                  if (sum.toString().split('').length > 1) {
                      return digitalRoot(sum);
                  }
                  return sum;
              });
}

/**
 * BEST PRACTICE SOLUTION
 * Calculates the digital root of a number which is the sum of
 * all digits up until a single digit
 * @param {number} n a number with multiple digits
 * @return {number} sum of all digits until only one digit is left
 */
export function BestdigitalRoot(n) {
    return ((n - 1) % 9) + 1;
}

/**
 * BEST SOLUTION
 * Calculates the digital root of a number which is the sum of
 * all digits up until a single digit
 * @param {number} n a number with multiple digits
 * @return {number} sum of all digits until only one digit is left
 */
export function BestDigitalRoot2(n) {
    if (n < 10) return n;

    // eslint-disable-next-line new-cap
    return BestDigitaRroot2(
        n
            .toString()
            .split('')
            .reduce(function(acc, d) {
                return acc + +d;
            }, 0)
    );
}

// console.log(BestDigital_root2(123456));
