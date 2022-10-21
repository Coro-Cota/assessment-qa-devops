const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    it("is a function", () => {
        expect(typeof shuffleArray).toEqual('function');
    })

    it("returns an array", () => {
        let returnedValue = shuffleArray([0])
        expect(returnedValue instanceof Array).toEqual(true);
    })
})