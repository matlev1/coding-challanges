import { binaryArrayToNumber } from '../../src/codewars/BinaryToNumber';
import { assert } from 'chai';

const input = {
    first: [0, 0, 0, 1],
    second: [0, 0, 1, 0],
    third: [1, 1, 1, 1],
    fourth: [0, 1, 1, 0],
};

const expected = {
    first: 1,
    second: 2,
    third: 15,
    fourth: 6,
};

/**
 * Given an array of ones and zeroes,
 * convert the equivalent binary value to an integer.
 * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
 */
describe('Binary To Number', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(binaryArrayToNumber(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(binaryArrayToNumber(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(binaryArrayToNumber(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(binaryArrayToNumber(input.fourth), expected.fourth);
    });
});
