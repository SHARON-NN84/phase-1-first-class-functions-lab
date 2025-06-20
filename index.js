// Code your solution in this file!
// 1. returnFirstTwoDrivers — anonymous function assigned to const
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers — anonymous function assigned to const
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers — array of the above two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier — higher-order function returning a multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler — function that doubles fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler — function that triples fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers — takes array and one of the above functions, returns selected drivers
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
