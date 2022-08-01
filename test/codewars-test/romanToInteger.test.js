import { romanToInteger } from '../../src/codewars/RomanToInteger';
import { assert } from 'chai';

const input = {
    first: 'III',
    second: 'IV',
    third: 'IX',
    fourth: 'LVIII',
    fifth: 'MCMXCIV',
};

const expected = {
    first: 3,
    second: 4,
    third: 9,
    fourth: 58,
    fifth: 1994,
};

/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, 2 is written as II in Roman numeral, 
 * just two one's added together. 12 is written as XII, 
 * which is simply X + II. The number 27 is written as XXVII, 
 * which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

 *   I can be placed before V (5) and X (10) to make 4 and 9. 
 *   X can be placed before L (50) and C (100) to make 40 and 90. 
 *   C can be placed before D (500) and M (1000) to make 400 and 900.

 */
describe('Roman numaration to Integer', function() {
    it(`${input.first} should be ${expected.first}`, function() {
        assert.equal(romanToInteger(input.first), expected.first);
    });
    it(`${input.second} should be ${expected.second}`, function() {
        assert.equal(romanToInteger(input.second), expected.second);
    });
    it(`${input.third} should be ${expected.third}`, function() {
        assert.equal(romanToInteger(input.third), expected.third);
    });
    it(`${input.fourth} should be ${expected.fourth}`, function() {
        assert.equal(romanToInteger(input.fourth), expected.fourth);
    });
    it(`${input.fifth} should be ${expected.fifth}`, function() {
        assert.equal(romanToInteger(input.fifth), expected.fifth);
    });
});
