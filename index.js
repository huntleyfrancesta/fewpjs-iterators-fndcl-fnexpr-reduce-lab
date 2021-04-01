const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(addValues)

function addValues(total, current) {
    return total + current
}
console.log(totalBatteries)