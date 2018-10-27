const makeConstant = function(constant){
  return function(){
    return constant;
  }
}

const makeCounterFromN = function(counter){
  return function(){
    return counter++;
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(old){
  let deltaData = {old : old, delta :0 , new : old};
  return function(delta = 0){
    let newObject = {};
    deltaData.delta = delta;
    deltaData.old = deltaData.new;
    deltaData.new = deltaData.old + delta;
    return Object.assign({},deltaData);
  }
}

const makeFiboGenerator = function(firstNumber, secondNumber){
  if( !firstNumber && !secondNumber){
    firstNumber = 0 ;
    secondNumber = 1;
  }
  if( firstNumber && !secondNumber){
    secondNumber =  firstNumber;
    firstNumber = 0;
  }
  return function(){
    let nextNumber = firstNumber;
    firstNumber = secondNumber;
    secondNumber = firstNumber + nextNumber;
    return nextNumber;
  }
}

const returnArgument = function(value){
  return value;
}

const makeCycler = function(inputSource){
  let originalSource = inputSource.map(returnArgument);
  let sourceLength = originalSource.length;
  let index = 0;
  return function(){
    if(index ==sourceLength){
      index = 0;
    }
    return originalSource[index++];
  }
}


const curry = function(func,value1){
  return function(value2,value3){
    return func(value1,value2,value3);
  }
}

const compose = function(outerFunction,innerFunction){
  return function(value1,value2){
    return outerFunction(innerFunction(value1,value2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
