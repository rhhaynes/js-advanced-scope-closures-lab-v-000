function produceDrivingRange(range){
  return function(a, b){
    const dis = Math.abs(parseInt(a)-parseInt(b));
    return dis>range ? `${dis-range} blocks out of range` : `within range by ${range-dis}`;
  };
}

function produceTipCalculator(tipPercentage){
  return total => total * tipPercentage;
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  };
}
