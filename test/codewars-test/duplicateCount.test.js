import { duplicateCount } from '../../src/codewars/DuplicateCount';
import { assert } from 'chai';

const input = {
    first: '',
    second: 'abcde',
    third: 'aabbcde',
    fourth: 'aabBcde',
    fifth: 'Indivisibility',
    sixth: 'Indivisibilities',
};

const expected = {
    first: 0,
    second: 0,
    third: 2,
    fourth: 2,
    fifth: 1,
    sixth: 2,
};

/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters
 * and numeric digits that occur more than once in the input string. The input string can be assumed
 * to contain only alphabets (both uppercase and lowercase) and numeric digits.
 */
describe('Validate PIN number', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(duplicateCount(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(duplicateCount(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(duplicateCount(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(duplicateCount(input.fourth), expected.fourth, 'should ignore case');
    });
    it(`'${input.fifth}' should be '${expected.fifth}'`, function() {
        assert.equal(duplicateCount(input.fifth), expected.fifth);
    });
    it(`'${input.sixth}' should be '${expected.sixth}'`, function() {
        assert.equal(duplicateCount(input.sixth), expected.sixth, 'characters may not be adjacent');
    });
});
