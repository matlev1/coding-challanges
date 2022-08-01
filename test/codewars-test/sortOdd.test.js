import { sortArray } from '../../src/codewars/SortOdd';
import { assert } from 'chai';

const input = {
    first: [5, 3, 2, 8, 1, 4],
    second: [5, 3, 1, 8, 0],
    third: [],
    fourth: [1, 4, 5, 3, 2, 8, 9, 7, 12, 21, 34, 11],
};

const expected = {
    first: [1, 3, 2, 8, 5, 4],
    second: [1, 3, 5, 8, 0],
    third: [],
    fourth: [1, 4, 3, 5, 2, 8, 7, 9, 12, 11, 34, 21],
};

/**
 * You have an array of numbers.
 * Your task is to sort odd numbers and leave even numbers in their positions.
 * Zero isn't an odd number and you don't need to move it. If you have an empty array,
 * you need to return it.
 */
describe('Validate sorted odd numbers', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.deepEqual(sortArray(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.deepEqual(sortArray(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.deepEqual(sortArray(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.deepEqual(sortArray(input.fourth), expected.fourth);
    });
});
