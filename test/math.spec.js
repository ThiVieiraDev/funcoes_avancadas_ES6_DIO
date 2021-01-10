const assert = require('assert');
const Math = require('./math.js');
const expect = require('chai').expect;

let value = 5;

describe('Math class', function () {
    //hooks
    // existe o beforeEach e o afterEach
    beforeEach(function() {
        value = 0;
    });


    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it.only('Multiply two numbers', function (){
        const math = new Math();
        const obj = {
            name: 'Thiago Vieira'
        };
        const obj2 = {
            name: 'Thiago Vieira'
        };
        // assert.equal(math.multiply(value,5), 0);
        // expect(math.multiply(value, 5)).to.equal(0);
        // expect(obj)
        // .to.have.property('name')
        // .equal('Thiago Vieira');
        expect(obj).to.deep.equal(obj2);

    });
});