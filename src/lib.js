const makeConstant = function(arg1){
  return function(){
    return arg1;
  }
}

const makeCounterFromN = function(arg1){
  count = [];
  count[arg1] = arg1 - 1;
  return function(){
    count[arg1] +=  1;
    return count[arg1];
  }
}

const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
