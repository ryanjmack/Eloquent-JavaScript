
// Specs:
// https://eloquentjavascript.net/05_higher_order.html#i_aIOczlLyX1
const loop = function loop(val, test, update, body) {
	while (test(val)) {
		body(val);
		val = update(val);
	}
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
