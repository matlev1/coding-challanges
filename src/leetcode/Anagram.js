/**
 * Best solution
 * @param {string} firstStr
 * @param {string} secondStr
 * @return {boolean} true or false
 */
function anagram(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) {
        return false;
    }

    const obj = {};

    for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }

    for (let i = 0; i < secondStr.length; i++) {
        const char = secondStr[i];
        console.log('DJJJS', obj[char]);
        if (!obj[char]) {
            return false;
        } else {
            obj[char] -= 1;
        }
    }
    return true;
}

console.log(anagram('anagram', 'nagaram'));
