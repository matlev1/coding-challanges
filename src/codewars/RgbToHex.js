/**
 * MY SOLUTION
 * Takes 3 numbers as a representation of a color and converts it to hexidecimal
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {hexadecimal}
 */
export function rgbToHex(r, g, b) {
    return rgb(r) + rgb(g) + rgb(b);
}

/**
 * Takes a number and converts it to hexidecimal value
 * Also any input is rounded to exeptable max or min respectfuly 0-255
 * @param {number} c any number
 * @return {hexadecimal} converted to hex
 */
function rgb(c) {
    if (c > 255) {
        c = 255;
    } else if (c <= 0) {
        c = '0' + 0;
    } else if (c < 16) {
        c = '0' + c.toString(16).toUpperCase();
    }
    return c.toString(16).toUpperCase();
}
// ==============================END=MY=SOLUTION================================ //

/**
 * BEST SOLUTION
 * Takes 3 numbers as a representation of a color and converts it to hexidecimal
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {hexadecimal}
 */
export function Bestrgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
    if (d < 0) {
        return '00';
    }
    if (d > 255) {
        return 'FF';
    }
    return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}

// =================================END=BEST=SOLUTION======================//

/**
 * OTHER BEST SOLUTION
 * Takes 3 numbers as a representation of a color and converts it to hexidecimal
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {hexadecimal}
 */
export function OtherBestrgb(r, g, b) {
    function toHex(a) {
        if (a <= 0) return '00';
        else if (a >= 255) return 'FF';
        else return a.toString(16).toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
}

/**
 * INTERESTING BEST SOLUTION
 * Takes 3 numbers as a representation of a color and converts it to hexidecimal
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {hexadecimal}
 */
export function INTERrgb(r, g, b) {
    const c = n =>
        (
            '0' +
            Math.max(0, Math.min(255, n))
                .toString(16)
                .toUpperCase()
        ).slice(-2);
    return c(r) + c(g) + c(b);
}
// console.log(rgb(15))
// console.log(rgbToHex(15,214,155))
