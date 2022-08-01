/**
 * 
 * Counts the number of duplicated charachters that have more than 2 dupes in the string
 * @param {string} text 
 * @return {number} count the number of duolicated characters in the string 
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 */
export function duplicateCount(text){
    text = text.toLowerCase()
    const obj = {};
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if (obj[text[i]]){
            obj[text[i]]++
        } else {
            obj[text[i]] = 1;
        }
    }

    for (const item in obj) {
        if (obj[item] > 1) {
            count++
        }

    }
    return count;
  }

/**
 * BEST SOLUTION
 * Counts the number of duplicated charachters that have more than 2 dupes in the string
 * @param {string} text 
 * @return {number} count the number of duolicated characters in the string 
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 */
  export function BESTduplicateCount(text){
    return text
        .toLowerCase()
        .split('')
        .reduce(function(a, c) {
          a[c] = a[c] ? a[c]+1 : 1;
          if(a[c] === 2) a.count++;
          return a;
        }, {count:0}).count;
  }

  // console.log(duplicateCount("aabBcde"));