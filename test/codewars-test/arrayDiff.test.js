import { arrayDiff } from '../../src/codewars/ArrayDiff';
import { assert } from 'chai';

const arrayA = {
    first: [],
    second: [3, 4],
    third: [1, 8, 2],
};

const arrayB = {
    first: [4, 5],
    second: [3],
    third: [],
};

const expected = {
    first: [],
    second: [4],
    third: [1, 8, 2],
};

/**
 * Your goal in this kata is to implement a difference function,
 * which subtracts one list from another and returns the result.
 * It should remove all values from list a, which are present in list b.
 */
describe('Validate the array difference is correct', function() {
    it(`[${arrayA.first}] - [${arrayB.first}] should be [${expected.first}]`, function() {
        assert.deepEqual(arrayDiff(arrayA.first, arrayB.first), expected.first);
    });
    it(`[${arrayA.second}] - [${arrayB.second}] should be [${expected.second}]`, function() {
        assert.deepEqual(arrayDiff(arrayA.second, arrayB.second), expected.second);
    });
    it(`[${arrayA.third}] - [${arrayB.third}] should be [${expected.third}]`, function() {
        assert.deepEqual(arrayDiff(arrayA.third, arrayB.third), expected.third);
    });
});
