function driversWithRevenueOver(driversArray, revenueNum) {
  return driversArray.filter(function(driverObj) {
    return driverObj.revenue > revenueNum;
  });
}

function driverNamesWithRevenueOver(driversArray, revenueNum) {
  return driversWithRevenueOver(driversArray, revenueNum)
    .map(function(driverObj) {
      return driverObj.name;
    });
}

function exactMatch(driversArray, matchingObj) {
  return driversArray.filter(function(driverObj) {
    for (const key in matchingObj) {
      return matchingObj[key] == driverObj[key];
    };
  });
}

function exactMatchToList(driversArray, matchingObj) {
  return exactMatch(driversArray, matchingObj)
    .map(function(driver) {
      return driver.name;
    });
}
