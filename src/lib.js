const makeConstant = function(arg1){
  return function(){
    return arg1;
  }
}

const makeCounterFromN = function(arg1){
  return function(){
    return arg1++;
  }
}

const makeCounterFromZero = function(count = 0){
  return function(){
    count += 1;
    return count - 1;
  }
}

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
