import { digitalRoot } from '../../src/codewars/DigitalRoot';
import { assert } from 'chai';

const input = {
    first: 16,
    second: 456,
    third: 132189,
    fourth: 0,
    fifth: 9,
};

const expected = {
    first: 7,
    second: 6,
    third: 6,
    fourth: 0,
    fifth: 9,
};

/** A digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n. If that value has more than one digit,
 * continue reducing in this way until a single-digit number is produced.
 * This is only applicable to the natural numbers.
 */
describe('Valdate that the sum of all digits up until one digit is correct', function() {
    it(`${input.first} should be ${expected.first}`, function() {
        assert.equal(digitalRoot(input.first), expected.first);
    });
    it(`${input.second} should be ${expected.second}`, function() {
        assert.equal(digitalRoot(input.second), expected.second);
    });
    it(`${input.third} should be ${expected.third}`, function() {
        assert.equal(digitalRoot(input.third), expected.third);
    });
    it(`${input.fourth} should be ${expected.fourth}`, function() {
        assert.equal(digitalRoot(input.fourth), expected.fourth);
    });
    it(`${input.fifth} should be ${expected.fifth}`, function() {
        assert.equal(digitalRoot(input.fifth), expected.fifth);
    });
});
