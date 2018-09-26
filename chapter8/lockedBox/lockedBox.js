
// https://eloquentjavascript.net/08_error.html#i_iGlwnUbkRs
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};


function withBoxUnlocked(body) {
  const wasLocked = box.locked;

  // only mutates state if box wasLocked
  box.unlock();

  try {
  	return body();
  }
  finally {
    // regardless if error was thrown, lock the box if it was previously locked
  	if (wasLocked) {
  		box.lock();
  	}
  }
}


withBoxUnlocked(function() {
  box.content.push("gold piece");
});


try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
}
catch (e) {
  console.log("Error raised:", e);
}


console.log(box.locked);
// → true
