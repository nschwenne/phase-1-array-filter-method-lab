
function findMatching(drivers, name) {
   const matchingDrivers =  drivers.filter(function(driver){
if  (name.toLowerCase() === driver.toLowerCase()) {
    return true
} else {
    return false
}
    })
    return matchingDrivers;
}  

const fuzzyMatch = (arr, str) => {
    const lengthStr = str.length 
    return arr.filter(item => item.slice(0, lengthStr) === str); 
};

function matchName(arr, str) {
    return arr.filter(match => match.name === str)
}