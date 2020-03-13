'use strict';

function getA() {
	return new Promise((resolve) => {
		setTimeout(() => { resolve(2); }, 1000);
	});
}

const p1 = getA();					// p1は、2をresolveに持ったPromise
p1.then(a => console.log(a));		// 2

const p2 = getA().then(a => a * 3);	// p2は、a*3をresolveに持ったPromise
p2.then(a => console.log(a));		// 6 (2*3)
