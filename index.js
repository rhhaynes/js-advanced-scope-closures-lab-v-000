function produceDrivingRange(range){
  return function(a, b){
    const dis = Math.abs(a-b);
    return dis>range ? `` : ``;
  };
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