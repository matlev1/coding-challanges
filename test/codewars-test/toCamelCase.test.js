import { toCamelCase } from '../../src/codewars/ToCamelCase';
import { assert } from 'chai';

const input = {
    first: '',
    second: 'the_stealth_warrior',
    third: 'The-Stealth-Warrior',
    fourth: 'A-B-C',
};

const expected = {
    first: '',
    second: 'theStealthWarrior',
    third: 'TheStealthWarrior',
    fourth: 'ABC',
};

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized
 * (known as Upper Camel Case, also often referred to as Pascal case).
 */
describe('Convert to camelCase :)', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(toCamelCase(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(toCamelCase(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(toCamelCase(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(toCamelCase(input.fourth), expected.fourth);
    });
});
