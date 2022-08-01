import { descendingOrder } from '../../src/codewars/DescendingOrder';
import { assert } from 'chai';

const input = {
    first: '1234',
    second: '1',
    third: '0',
    fourth: '1210',
};

const expected = {
    first: '4321',
    second: '1',
    third: '0',
    fourth: '2110',
};

/**
 * Your task is to make a function that can take any non-negative integer as a
 * argument and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest/biggest possible number.
 * Examples:
 * Input: 21445 Output: 54421
 * Input: 145263 Output: 654321
 * Input: 123456789 Output: 987654321
 */
describe('integer digit should be in descending order', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(descendingOrder(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(descendingOrder(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(descendingOrder(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(descendingOrder(input.fourth), expected.fourth);
    });
});
