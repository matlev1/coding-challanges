/**
 /**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings
 * 
 * Time Complexity O(n*m)
 * Space Complexity O(1)
 * 
 * @param {string[]} words
 * @return {string} resultStr
 */
export function longestCommonPrefix(words) {
    let resultStr = '';
    if (!words || words.length === 0) {
        return resultStr;
    }
    const firstWord = words[0].split('');

    for (let i = 0; i < firstWord.length; i++) {
        const firstWordLetter = firstWord[i];

        for (let j = 1; j < words.length; j++) {
            const currWord = words[j];
            const currWordLetter = currWord.split('')[i];
            if (i >= currWord.length || firstWordLetter !== currWordLetter) {
                return resultStr;
            }
        }
        resultStr += firstWordLetter;
    }
    return resultStr;
}
