const assert = require("assert");
const app = require('../index');



describe('string calculator' , () => {
    it('empty string should return 0' , () => {
        const result = app.add("");        
        assert.strictEqual(result , 0);
    })

    it('if a single value is added return the value ' , () => {
        const result = app.add("1");
        assert.strictEqual(result , 1);
    })

    it('I expected 1,2 to be equal to 3' , () => {
        const result = app.add('1,2');
        assert.strictEqual(result , 3);
    })

})