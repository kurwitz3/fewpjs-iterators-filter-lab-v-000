function findMatching(drivers,string){
  let newDriver =  drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return newDriver
}

function fuzzyMatch(drivers,string){
     let newDriver =  drivers.filter(driver => {
      if(driver.slice(0,2) === string){
          return driver 
      }
        
    })
     return newDriver
}

function matchName(drivers,string){
    let newDrivers = drivers.filter(driver => {
        return driver.name === string
    })
    return newDrivers
}
