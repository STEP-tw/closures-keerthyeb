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


const makeCycler = function(arg1){
  let original = arg1.slice();
  let length = original.length;
  let count = 0;
  return function(){
    if(count == length){
      count = 0;
    }
    let cycleColour = original[count];
    count +=1;
    return cycleColour;
  }
}


const curry = function(funref,arg1){
  return function(arg2,arg3){
    return funref(arg1,arg2,arg3);
  }
}

const compose = function(funcRef1,funcRef2){
  return function(arg1,arg2){
    let firstOutPut = funcRef2(arg1,arg2);
    return funcRef1(firstOutPut);
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
