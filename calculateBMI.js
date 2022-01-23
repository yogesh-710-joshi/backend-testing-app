
const calcBMI = (height, weight) => {
    const heightInms = height / 100
    return (weight / (heightInms * heightInms)).toFixed(1)
}

const findBMICategory = (bmi) => {
    let bmiCategory, healthRisk
    if (bmi <= 18.4) {
        bmiCategory = 'Underweight'
        healthRisk = 'Malnutrition risk'
    } else if (bmi > 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight'
        healthRisk = 'Low risk'
    } else if (bmi > 25 && bmi < 29.9) {
        bmiCategory = 'Overweight'
        healthRisk = 'Enhanced risk'
    } else if (bmi > 30 && bmi < 34.9) {
        bmiCategory = 'Moderately obese'
        healthRisk = 'Medium risk'
    } else if (bmi > 35 && bmi < 39.9) {
        bmiCategory = 'Severely obese'
        healthRisk = 'High,'
    } else if (bmi >= 40) {
        bmiCategory = 'Very severely obese'
        healthRisk = 'Very high risk'
    }
    return {bmiCategory, healthRisk}
}

const addFields = (testData) => {
    const updatedData = testData.map(item => {
        const bmi = Number(calcBMI(+item.HeightCm, +item.WeightKg))
        const {bmiCategory, healthRisk} = findBMICategory(bmi)
        item.bmi = bmi
        item.bmiCategory = bmiCategory
        item.healthRisk = healthRisk
        return item
    })
    console.log(updatedData)
}

module.exports = {
    addFields,
    calcBMI,
    findBMICategory,
}