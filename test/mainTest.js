const assert = require('chai').assert;

const main = require('../utils/main');

const sayHelloResult = main.sayHello();

describe('Main', function() {
    describe('sayHello', function(){
        it('sayHello should return Hello', function() {
            assert.equal(sayHelloResult, 'Hello');
        });

        it('sayHello should return a string', function() {
            assert.typeOf(sayHelloResult, 'string');
        });
    });
});