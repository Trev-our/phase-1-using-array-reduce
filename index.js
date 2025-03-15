console.log(batteryBatches);
const batteryBatches = [3, 4, 5, 6, 3, 2, 5, 1, 2]; // This adds up to 31
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

