const testData = require('../test-data.json')
const { calcBMI, findBMICategory, } = require('../calculateBMI')

describe("tesing bmi calculator", () => {
    test('test bmi calculated', () => {
        expect(
            calcBMI(171, 96)).toBe('32.8')
    });
    test('test bmi category', () => {
        expect(
            findBMICategory(32.8)).toEqual({
                bmiCategory: 'Moderately obese',
                healthRisk: 'Medium risk'
            })
    });
})