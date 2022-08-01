/* eslint-disable new-cap */
// const XO = require("../ExesAndOhs");
// const assert = require("assert");
import { XO } from '../../src/codewars/ExesAndOhs';
import { assert } from 'chai';
const result = {
    first: 'ooxx',
    second: 'xxOo',
    third: 'xxxm',
    fourth: 'Oo',
    fifth: 'ooom',
};

/**
 * Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive.
 * The string can contain any char.
 *Examples input/output:
 */

describe('Xs and Os', function() {
    it(`${result.first} should be true`, function() {
        assert.equal(XO(result.first), true);
    });
    it(`${result.second} should be true`, function() {
        assert.equal(XO(result.second), true);
    });
    it(`${result.third} should be false`, function() {
        assert.equal(XO(result.third), false);
    });
    it(`${result.fourth} should be false`, function() {
        assert.equal(XO(result.fourth), false);
    });
    it(`${result.fifth} should be false`, function() {
        assert.equal(XO(result.fifth), false);
    });
});
