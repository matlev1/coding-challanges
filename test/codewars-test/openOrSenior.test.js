import { openOrSenior } from '../../src/codewars/OpenOrSenior';
import { assert } from 'chai';

const input = {
    first: [[45, 12], [55, 21], [19, -2], [104, 20]],
    second: [[3, 12], [55, 1], [91, -2], [54, 23]],
    third: [[59, 12], [55, -1], [12, -2], [12, 12]],
};

const expected = {
    first: ['Open', 'Senior', 'Open', 'Senior'],
    second: ['Open', 'Open', 'Open', 'Open'],
    third: ['Senior', 'Open', 'Open', 'Open'],
};

/**
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
 * They would like your help with an application form that will tell prospective
 * members which category they will be placed.
 * To be a senior, a member must be at least 55 years old and have a handicap
 * greater than 7. In this croquet club, handicaps range from -2 to +26;
 * the better the player the lower the handicap.
 */
describe('Validate Membership Type', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.deepEqual(openOrSenior(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.deepEqual(openOrSenior(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.deepEqual(openOrSenior(input.third), expected.third);
    });
});
