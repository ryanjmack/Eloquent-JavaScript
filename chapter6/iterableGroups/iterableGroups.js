
// https://eloquentjavascript.net/06_object.html#i_djD3XDJ27V
class Group {
  constructor() {
    this.set = [];
  }

  has(val) {
  	return this.set.includes(val);
  }


  add(val) {
	if (!this.has(val)) {
      this.set.push(val);
    }
  }


  delete(val) {
  	const i = this.set.indexOf(val);

    if (i !== -1) {
    	this.set.splice(i, 1);
    }
  }


  static from(iterable) {
  	const newGroup = new Group();

    for (let element of iterable) {
      newGroup.add(element);
    }

    return newGroup;
  }
}


class GroupIterator {
  constructor(group) {
    this.i = 0;
  	this.set = group.set;
  }

  next() {
  	if (this.i === this.set.length) {
    	return { done: true };
    }
    else {
      const value = this.set[this.i++];

     return { value, done: false };
    }
  }
}


Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
