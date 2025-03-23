

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Example array of battery amounts

const totalBatteries = batteryBatches.reduce((accumulator, batch) => {
  return accumulator + batch;
}, 0); // Initial value is 0

console.log(totalBatteries); // Output: Sum of all batteries
