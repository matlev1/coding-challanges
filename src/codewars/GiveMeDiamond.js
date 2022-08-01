/**
 * MY SOLUTION
 * Takes a number and returns a diamond shaped string of that size.
 * @param {number} n a number representing the size of the diamond (not litteral).
 * @return {string} diam string should have a diamond shape.
 */
export function diamond(n) {
    let diam = '';
    const space = ' ';
    if (n < 0 || n % 2 === 0) {
        diam = null;
    } else {
        for (let i = 0; i < n; i++) {
            const ast = i <= n / 2 ? '*'.repeat(i * 2 + 1) : '*'.repeat((n - i) * 2 - 1);
            diam += i <= n / 2 ? `${space.repeat(n - i - n / 2)}${ast}\n` : `${space.repeat(i - n / 2 + 1)}${ast}\n`;
        }
    }
    console.log(diam);
    return diam;
}

// console.log(diamond(11))
/**
 * LISTED BEST SOLUTION
 * Takes a number and returns a diamond shaped string of that size.
 * @param {number} n a number representing the size of the diamond (not litteral).
 * @return {string} diam string should have a diamond shape.
 */
export function Bestdiamond(n) {
    if (n % 2 == 0 || n < 1) return null;
    let x = 0;
    let add;
    let diam = line(x, n);
    while ((x += 2) < n) {
        add = line(x / 2, n - x);
        diam = add + diam + add;
    }
    return diam;
}

function repeat(str, x) {
    return Array(x + 1).join(str);
}
function line(spaces, stars) {
    return repeat(' ', spaces) + repeat('*', stars) + '\n';
}
// =============================End==>Bestdiamond========================== //
