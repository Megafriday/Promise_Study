'use strict';

function getA() {
	return new Promise((resolve) => {
		setTimeout(() => { resolve(2); }, 1000);
	});
}

function getB() {
	return new Promise((resolve) => {
		setTimeout(() => { resolve(3); }, 1000);
	});
}

function getC() {
	return new Promise((resolve) => {
		setTimeout(() => { resolve(4); }, 1000);
	});
}



// Promise Chainは使わない方法
getA().then((a) => {
	getB().then((b) => {
		getC().then((c) => {

			console.log(a * b * c);

		});
	});
});


// Promise Chainをつかう方法
getA().then((a) => {
	return getB().then((b) => { return a * b; });
}).then((ab) => {
	getC().then((c) => { console.log(ab * c); });
});


// Promise.allを使う方法
Promise.all([getA(), getB(), getC()]).then(([a, b, c]) => {
	console.log(a * b * c);
});

