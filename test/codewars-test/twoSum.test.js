import { twoSum } from '../../src/codewars/TwoSum';
import { assert } from 'chai';

const input = {
    first: { array: [2, 7, 11, 15], target: 9 },
    second: { array: [3, 2, 4], target: 6 },
    third: { array: [3, 3], target: 6 },
};

const expected = {
    first: [0, 1],
    second: [1, 2],
    third: [0, 1],
};

/**
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 */
describe('Find Indexes of nubmbers that sum to target number', function() {
    it(`Two indexes of numbers from this array '[${input.first.array}]' that sum to target number '${
        input.first.target
    }' should be '[${expected.first}]'`, function() {
        assert.deepEqual(twoSum(input.first.array, input.first.target), expected.first);
    });
    it(`Two indexes of numbers from this array '[${input.second.array}]' that sum to target number '${
        input.second.target
    }' should be '[${expected.second}]'`, function() {
        assert.deepEqual(twoSum(input.second.array, input.second.target), expected.second);
    });
    it(`Two indexes of numbers from this array '[${input.third.array}]' that sum to target number '${
        input.third.target
    }' should be '[${expected.third}]'`, function() {
        assert.deepEqual(twoSum(input.third.array, input.third.target), expected.third);
    });
});
