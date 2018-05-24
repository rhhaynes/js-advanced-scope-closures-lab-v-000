function produceDrivingRange(){
  return function(){
  }
}

function produceTipCalculator(){
  return function(){
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor {
      this.id = ++driverId;
    }
  }
}