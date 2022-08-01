import { validate } from '../../src/codewars/RegPasswordValidation';
import { assert } from 'chai';

const input = {
    first: 'djI38D55',
    second: 'a2.d412',
    third: 'JHD5FJ53',
    fourth: '!fdjn345',
    fifth: 'jfkdfj3j',
    sixth: '123',
    seventh: 'abc',
    eighth: 'Password123',
};

const expected = {
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: true,
};

/**
 * You need to write regex that will validate a password to make sure it
 * meets the following criteria:
 *
 * 1. At least six characters long
 * 2. contains a lowercase letter
 * 3. contains an uppercase letter
 * 4. contains a number
 * Valid passwords will only be alphanumeric characters.
 */
describe('Valdate a password with criaterias', function() {
    it(`${input.first} should be ${expected.first}`, function() {
        assert.equal(validate(input.first), expected.first);
    });
    it(`${input.second} should be ${expected.second}`, function() {
        assert.equal(validate(input.second), expected.second);
    });
    it(`${input.third} should be ${expected.third}`, function() {
        assert.equal(validate(input.third), expected.third);
    });
    it(`${input.fourth} should be ${expected.fourth}`, function() {
        assert.equal(validate(input.fourth), expected.fourth);
    });
    it(`${input.fifth} should be ${expected.fifth}`, function() {
        assert.equal(validate(input.fifth), expected.fifth);
    });
    it(`${input.sixth} should be ${expected.sixth}`, function() {
        assert.equal(validate(input.sixth), expected.sixth);
    });
    it(`${input.seventh} should be ${expected.seventh}`, function() {
        assert.equal(validate(input.seventh), expected.seventh);
    });
    it(`${input.seventh} should be ${expected.seventh}`, function() {
        assert.equal(validate(input.seventh), expected.seventh);
    });
});
