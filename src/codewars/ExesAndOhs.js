/**
 * MY Solution
 * Retruns true if equal amount of Os and Xs case insensitive
 * else false
 * @param {string} str
 * @return {boolean}
 */
export function MyXO(str) {
    let countX = 0;
    let countO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            countX++;
        }
        if (str[i].toLowerCase() === 'o') {
            countO++;
        }
    }
    return countX === countO ? true : false;
}

/**
 * BEST Solution
 * Retruns true if equal amount of Os and Xs case insensitive
 * else false
 * @param {string} str
 * @return {boolean}
 */
export function XO(str) {
    const x = str.match(/x/gi);
    const o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
//  module.exports = XO;

// console.log(XO("ooxx"));
// console.log(XO("xooxx"));
// console.log(XO("ooxXm"));
// console.log(XO("zpzpzpp"));
// console.log(XO("zzoo"));
