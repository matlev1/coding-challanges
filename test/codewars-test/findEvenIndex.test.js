import { findEvenIndex } from '../../src/codewars/FindEvenIndex';
import { assert } from 'chai';

const input = {
    first: [1, 2, 3, 4, 3, 2, 1],
    second: [1, 100, 50, -51, 1, 1],
    third: [1, 2, 3, 4, 5, 6],
    fourth: [20, 10, 30, 10, 10, 15, 35],
};

const expected = {
    first: 3,
    second: 1,
    third: -1,
    fourth: 3,
};

/**
 * You are going to be given an array of integers.
 * Your job is to take that array and find an index N where the sum of the integers
 * to the left of N is equal to the sum of the integers to the right of N.
 * If there is no index that would make this happen, return -1.
 */
describe('find the middle index of equal sum of elements from both sides from it', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(findEvenIndex(input.first), expected.first, 'The array was: [1,2,3,4,3,2,1]');
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(findEvenIndex(input.second), expected.second, 'The array was: [1,100,50,-51,1,1]');
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(findEvenIndex(input.third), expected.third, 'The array was: [1,2,3,4,5,6]');
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(findEvenIndex(input.fourth), expected.fourth, 'The array was: [20,10,30,10,10,15,35]');
    });
});
