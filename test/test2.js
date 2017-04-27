/*global it */

var rewire = require("rewire");
var lib = rewire("../add2.js");
var add = lib.__get__("add");
var assert  = require("assert");


// 当2个参数均为整数时
it("should return 3", function()
{
    var sum = add(1, 2);
    assert.equal(sum, 3);
});