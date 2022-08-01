import { friend } from '../../src/codewars/Friends';
import { assert } from 'chai';

const input = {
    first: ['Ryan', 'Kieran', 'Mark'],
    second: ['Ryan', 'Jimmy', '123', '4', 'Cool Man'],
    third: ['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'],
    fourth: ['Love', 'Your', 'Face', '1'],
};

const expected = {
    first: ['Ryan', 'Mark'],
    second: ['Ryan'],
    third: ['Jimm', 'Cari', 'aret'],
    fourth: ['Love', 'Your', 'Face'],
};

/**
 * Make a program that filters a list of strings and returns a list with
 * only your friends name in it.
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
 * Otherwise, you can be sure he's not...
 * Ex: Input = ["Ryan", "Amanda", "Jason", "Maya"], Output = ["Ryan", "Maya"]
 */

describe('Names shold have exactly 4 chars', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.deepEqual(friend(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.deepEqual(friend(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.deepEqual(friend(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.deepEqual(friend(input.fourth), expected.fourth);
    });
});
