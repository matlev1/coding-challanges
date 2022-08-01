/**
 * NOT MY SOLUTION BUT A SULUTION
 * https://repl.it/@Zgutier5/codewars-5kyu-simple-pig-latin-slice
 * Pig it function puts the first of each word at
 * the end of itself and adds 'ay' to the end
 * @param {string} str String to be pigged.
 * @return {string} Pigged string
 */
export function NYapigIt(str) {
    str = str.split(' ');
    const specialChar = '';
    const string = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '!' || str[i] === '?') {
            specialChar = ' ' + str[i];
        }

        if (/^[A-Za-z]+$/.test(str[i])) {
            let word = str[i].split('');
            word.splice(word.length, 0, word[0]);
            word.splice(0, 1);
            word = word.join('');
            string += word + 'ay ';
        }
    }

    // remove last space from string.
    string = string.slice(0, -1);
    return string + specialChar;
}

/**
 * BEST SOLUTION
 * Pig it function puts the first of each word at
 * the end of itself and adds 'ay' to the end
 * @param {string} str String to be pigged.
 * @return {string} Pigged string
 */
export function BestpigIt(str) {
    return str
        .split(' ')
        .map(function(el) {
            return el.slice(1) + el.slice(0, 1) + 'ay';
        })
        .join(' ');
}

/**
 * GOOD SOLUTION
 * Pig it function puts the first of each word at
 * the end of itself and adds 'ay' to the end
 * @param {string} str String to be pigged.
 * @return {string} Pigged string
 */
export function pigIt(str) {
    // Code here
    str = str.trim().split(/\s{1,}/);
    return str
        .map(val => {
            if (/^[A-Za-z]+$/.test(val)) {
                return `${val.slice(1)}${val.slice(0, 1)}ay`;
            }
            return val;
        })
        .join(' ');
}

/**
 * PURE REGEX SOLUTION
 * Pig it function puts the first of each word at
 * the end of itself and adds 'ay' to the end
 * @param {string} str String to be pigged.
 * @return {string} Pigged string
 */
export function REGpigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

/**
 * GOOD REGEX SOLUTION DOESN't WORK RIGHT
 * Pig it function puts the first of each word at
 * the end of itself and adds 'ay' to the end
 * @param {string} s String to be pigged.
 * @return {string} Pigged string
 */
export const EsimpigIt = s =>
    s
        .split(' ')
        .map(e => e.substr(1) + e[0] + 'ay')
        .join(' ');

// console.log(pigIt("Pig latin is cool ?"));
