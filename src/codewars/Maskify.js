/**
 * MY SOLUTION
 * This function takes a string and covers it with # up to last 4 digits
 * @param {string} cc
 * @return {string} string that's covered up to 4 last digits
 */
export function maskify(cc) {
    return cc.length > 4
        ? `${cc
              .slice(0, -4)
              .split('')
              .map(item => (item = '#'))
              .join('')}${cc.slice(-4)}`
        : cc;
}

/**
 * BEST SOLUTION
 * This function takes a string and covers it with # up to last 4 digits
 * @param {string} cc
 * @return {string} string that's covered up to 4 last digits
 */
export function bestMaskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

function squareRt(n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(squareRt(25));
