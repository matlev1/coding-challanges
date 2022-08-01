import { diamond } from '../../src/codewars/GiveMeDiamond';
import { assert } from 'chai';

const input = {
    first: 1,
    second: 3,
    third: 5,
    fourth: 2,
    fifth: -3,
    sixth: 0,
    seventh: 11,
};

const expected = {
    first: '*\n',
    second: ' *\n***\n *\n',
    third: '  *\n ***\n*****\n ***\n  *\n',
    fourth: null,
    fifth: null,
    sixth: null,
    seventh:
        '     *\n    ***\n   *****\n  *******\n *********\n***********\n *********\n  *******\n   *****\n    ***\n     *\n',
};

/** return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
 * Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
 * Return null/nil/None/... if the input is an even number or negative,
 * as it is not possible to print a diamond of even or negative size.
 * Examples
 * A size 3 diamond:
 *
 ***
 *
 */
describe('Validate PIN number', function() {
    it(`'${input.first}' should be '${expected.first}'`, function() {
        assert.equal(diamond(input.first), expected.first);
    });
    it(`'${input.second}' should be '${expected.second}'`, function() {
        assert.equal(diamond(input.second), expected.second);
    });
    it(`'${input.third}' should be '${expected.third}'`, function() {
        assert.equal(diamond(input.third), expected.third);
    });
    it(`'${input.fourth}' should be '${expected.fourth}'`, function() {
        assert.equal(diamond(input.fourth), expected.fourth);
    });
    it(`'${input.fifth}' should be '${expected.fifth}'`, function() {
        assert.equal(diamond(input.fifth), expected.fifth);
    });
    it(`'${input.sixth}' should be '${expected.sixth}'`, function() {
        assert.equal(diamond(input.sixth), expected.sixth);
    });
    it(`'${input.seventh}' should be '${expected.seventh}'`, function() {
        assert.equal(diamond(input.seventh), expected.seventh);
    });
});
