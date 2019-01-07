// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
	return drivers.filter(function(driver){
		return driver.revenue > revenue;
	})
}

function driverNamesWithRevenueOver(drivers, revenue){
	const driversRevenue = drivers.filter(function(driver){
		return driver.revenue > revenue;
	});
	return driversRevenue.map(driver => driver.name);
}

function exactMatch(drivers, kv){
	return drivers.filter(function(driver){
		for (const key in kv){
			if (driver[key] === kv[key]){
				return driver;
			}
		}
	})
}

function exactMatchToList(drivers, kv){
	return exactMatch(drivers, kv).map(driver => driver.name);
}




