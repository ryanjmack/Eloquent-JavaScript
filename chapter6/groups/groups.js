
// https://eloquentjavascript.net/06_object.html#h_3vwredi8nD
// a class that mimics set functionality
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
