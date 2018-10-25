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
// const makeCounterFromN = function(arg1){
//   let count = [];
//   count[arg1] = arg1;
//   return function(){
//     count[arg1] +=  1;
//     return count[arg1] - 1;
//   }
// }

// const makeCounterFromZero = function(arg1){
//   count = [];
//   count[arg1] = 0;
//   return function(){
//     count[arg1] +=  1;
//     return count[arg1] - 1;
//   }
// }

const makeCounterFromZero = function(arg1){
  count = 0 - 1;
  return function(){
    count += 1;
    return count;
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
