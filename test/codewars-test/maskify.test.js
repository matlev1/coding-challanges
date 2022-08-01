import { maskify } from '../../src/codewars/Maskify';
import { assert } from 'chai';

const input = {
    first: '4556364607935616',
    second: '1',
    third: '11111',
    fourth: 'uuv',
};

const expected = {
    first: '############5616',
    second: '1',
    third: '#1111',
    fourth: 'uuv',
};

/**
 * Usually when you buy something, you're asked whether your credit card number,
 * phone number or answer to your most secret question is still correct.
 * However, since someone could look over your shoulder, you don't want that
 * shown on your screen. Instead, we mask it.
 * Your task is to write a function maskify, which changes all but the last four
 * characters into '#'.
 */
describe('Validate all digits but last 4 are maskified', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(maskify(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(maskify(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(maskify(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(maskify(input.fourth), expected.fourth);
    });
});
