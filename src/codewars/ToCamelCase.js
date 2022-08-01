/**
 * MY SOLUTION
 * This function converts dash/underscore delimited words into camel casing.
 * @param {string} str takes any string prefferably with dashes and undescores between words.
 * @return {string} modified string in camel casing
 */
export function toCamelCase(str) {
    let string = '';
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_') {
            // console.log()
            str.splice(i + 1, 1, str[i + 1].toUpperCase());
            str.splice(i, 1);
        }
        string += str[i];
    } // In case we want the first char to always be upper case\
    return string; // .charAt(0).toUpperCase() + string.slice(1);
}

export function notSuretoCamelCase(s) {
    s = s.split('');
    let res = [];
    if (s[0] === s[0].toUpperCase()) {
        res.push(s[0]);
    } else {
        res += s[0];
    } // res = "w"
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '-' || s[i] === '_') {
            res.push(s[i]);
            res.push(s[i + 1]).toUpperCase;
            i++;
        } else {
            res.push(s[i]);
        }
    }
    return res;
}

/**
 * REG SOLUTION
 * This function converts dash/underscore delimited words into camel casing.
 * @param {string} str takes any string prefferably with dashes and undescores between words.
 * @return {string} modified string in camel casing
 */
export function RegtoCamelCase(str) {
    const regExp = /[-_]\w/gi;
    return str.replace(regExp, function(match) {
        return match.charAt(1).toUpperCase();
    });
}

/**
 * INTERESTING SOLUTION
 * This function converts dash/underscore delimited words into camel casing.
 * @param {string} str takes any string prefferably with dashes and undescores between words.
 * @return {string} modified string in camel casing
 */
export function INTERESTINGtoCamelCase(str) {
    return str
        .split(/-|_/g)
        .map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1))
        .join('');
}

// console.log(toCamelCase("the-stealth-warrior"));
