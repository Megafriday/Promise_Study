'use strict';

function getA() {
	return new Promise((resolve) => {
		setTimeout(() => { resolve(2); }, 1000);
	});
}

const p1 = getA();					// p1は、2をPromiseでラップ
p1.then(a => console.log(a));		// 2

const p2 = getA().then(a => a * 3);	// p2は、a*3をPromiseでラップ
p2.then(a => console.log(a));		// 6 (2*3)
