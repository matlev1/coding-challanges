import { longestCommonPrefix } from '../../src/codewars/LongestCommonPrefix';
import { assert } from 'chai';

const input = {
    first: ['flower', 'flow', 'flight'],
    second: ['blya', 'blin', 'blyudo'],
    third: ['bring', 'happy', 'meal'],
};

const expected = {
    first: 'fl',
    second: 'bl',
    third: '',
};

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
 */
describe('Find longest common prefix', function() {
    it(`${input.first} should be ${expected.first}`, function() {
        assert.equal(longestCommonPrefix(input.first), expected.first);
    });
    it(`${input.second} should be ${expected.second}`, function() {
        assert.equal(longestCommonPrefix(input.second), expected.second);
    });
    it(`${input.third} should be ${expected.third}`, function() {
        assert.equal(longestCommonPrefix(input.third), expected.third);
    });
});
