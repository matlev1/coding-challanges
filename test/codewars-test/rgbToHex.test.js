import { rgbToHex } from '../../src/codewars/RgbToHex';
import { assert } from 'chai';

const input = {
    first: rgbToHex(0, 0, 0),
    second: rgbToHex(300, 255, 255),
    third: rgbToHex(173, 255, 47),
    fourth: rgbToHex(0, 0, -20),
    fifth: rgbToHex(15, 214, 155),
};

const expected = {
    first: '000000',
    second: 'FFFFFF',
    third: 'ADFF2F',
    fourth: '000000',
    fifth: '0FD69B',
};

/**
 * The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will
 * result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument
 * values that fall out of that range should be rounded to the closest valid value.
 */
describe('Valdate that R, G, B decimal input converted to hexidecimal value', function() {
    it(`${input.first} should be ${expected.first}`, function() {
        assert.equal(input.first, expected.first);
    });
    it(`${input.second} should be ${expected.second}`, function() {
        assert.equal(input.second, expected.second);
    });
    it(`${input.third} should be ${expected.third}`, function() {
        assert.equal(input.third, expected.third);
    });
    it(`${input.fourth} should be ${expected.fourth}`, function() {
        assert.equal(input.fourth, expected.fourth);
    });
    it(`${input.fifth} should be ${expected.fifth}`, function() {
        assert.equal(input.fifth, expected.fifth);
    });
});
