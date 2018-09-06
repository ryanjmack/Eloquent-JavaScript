

// outputs an array in a range; step is be optional. 
const range = function range(start, end, step = (start < end) ? 1 : -1) {
  let arr = [];

  // error checking - no unit tests for this module
  if (
    (start < end && step < 0)
    || (start > end && step > 0)
    || (step === 0)
  ) {
    throw new Error("Inputs are invalid.\n");
  }

  // ascend from start to end
  if (step >= 1) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }

  // descend from start to end
  else {
    for (let i = start; i >= end; i += step) {
      console.log(i);
      arr.push(i);
    }
  }
  return arr;
};


// a simple summation function
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
