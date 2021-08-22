const AppProvider = require("./AppProvider")
// @ponicode
describe("savedSettings", () => {
    let inst

    beforeEach(() => {
        inst = new AppProvider.AppProvider()
    })

    test("0", () => {
        let callFunction = () => {
            inst.savedSettings()
        }
    
        expect(callFunction).not.toThrow()
    })
})
