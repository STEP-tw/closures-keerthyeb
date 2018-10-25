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

const makeDeltaTracker = function(old){
  let deltaData = {old : old, delta :0 , new : old};
  return function(delta){
    if(delta != null){
      deltaData.delta = delta;
      deltaData.old = deltaData.new;
      deltaData.new = deltaData.old + delta;
    }
    return deltaData; 
  }
}


const makeFiboGenerator = function(arg1, arg2){
  if(arg1 == null && arg2 == null){
    arg1 = 0 ;
    arg2 = 1;
  }
  if( arg1 && arg2 == null){
    let temp = arg1;
    arg1 = 0;
    arg2 = temp;
  }
  let previousNumber = arg1;
  let currentNumber = arg2;
  return function(){
    let fibonacciNumber = previousNumber;
    previousNumber = currentNumber;
    currentNumber = previousNumber + fibonacciNumber;
    return fibonacciNumber;
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
