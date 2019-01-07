// Code your solution here:
function driversWithRevenueOver(drivers, passedRevenue) {
  return drivers.filter(function(driver){
    return driver.revenue > passedRevenue;
  });
};

function driverNamesWithRevenueOver(drivers, passedRevenue){
  return driversWithRevenueOver(drivers, passedRevenue).map(function(driver){
    return driver.name;
  });
};

function exactMatch(drivers, objToMatch){
  return drivers.filter(function(driver){
    return (driver.revenue === objToMatch.revenue) || (driver.name === objToMatch.name);
  });
};

function exactMatchToList(drivers, objToMatch){
  return exactMatch(drivers, objToMatch).map(function(driver){ return driver.name

  });

};
