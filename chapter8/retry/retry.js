// https://eloquentjavascript.net/08_error.html#h_TcUD2vzyMe
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let result;

  while (true) {
  	try {
    	return primitiveMultiply(a, b);
    }
    catch (e) {
   		if (!(e instanceof MultiplicatorUnitFailure)) {
        	throw new Error(e);
        }
    }
  }
  return result;
}

console.log(reliableMultiply(8, 8));
// → 64
