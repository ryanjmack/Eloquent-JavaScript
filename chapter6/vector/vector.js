class Vec {
	constructor(x, y) {
      this.x = x;
      this.y = y;
    }

  	get length() {
		return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }
}


Vec.prototype.plus = function(anotherVec) {
	return new Vec(this.x + anotherVec.x, this.y + anotherVec.y);
}


Vec.prototype.minus = function(anotherVec) {
	return new Vec(this.x - anotherVec.x, this.y - anotherVec.y);
}
