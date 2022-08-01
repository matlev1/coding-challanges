import { pigIt } from '../../src/codewars/PigLatin';
import { assert } from 'chai';

const input = {
    first: 'Pig latin is cool',
    second: 'This is my string',
    third: 'Quis custodiet ipsos custodes ?',
};

const expected = {
    first: 'igPay atinlay siay oolcay',
    second: 'hisTay siay ymay tringsay',
    third: 'uisQay ustodietcay psosiay ustodescay ?',
};

/**
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their places.
 * Zero isn't an odd number and you don't need to move it. If you have an empty array,
 * you need to return it.
 */
describe('Pig the string', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(pigIt(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(pigIt(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(pigIt(input.third), expected.third);
    });
});
