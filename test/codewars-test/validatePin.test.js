import { validatePIN } from '../../src/codewars/ValidatePin';
import { assert } from 'chai';

const input = {
    first: '-12345',
    second: '12345-',
    third: '12.0',
    fourth: '12.090',
    fifth: '123456',
};

const expected = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: true,
};

/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
 * anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 */
describe('Validate PIN number', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(validatePIN(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(validatePIN(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(validatePIN(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(validatePIN(input.fourth), expected.fourth);
    });
    it(`'${input.fifth}' should be '${expected.fifth}'`, function() {
        assert.equal(validatePIN(input.fifth), expected.fifth);
    });
});
