import { /* reverse, */ reverseBest } from '../../src/codewars/ReverseInteger';
import { assert } from 'chai';

const input = {
    first: 1234,
    second: -2345,
    third: -2147483648,
};

const expected = {
    first: 4321,
    second: -5432,
    third: 0,
};

/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */
describe('Reverse Integer', function() {
    it(`${input.first} should be ${expected.first}`, function() {
        assert.equal(reverseBest(input.first), expected.first);
    });
    it(`${input.second} should be ${expected.second}`, function() {
        assert.equal(reverseBest(input.second), expected.second);
    });
    it(`${input.third} should be ${expected.third}`, function() {
        assert.equal(reverseBest(input.third), expected.third);
    });
});
