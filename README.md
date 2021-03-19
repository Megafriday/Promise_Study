# （前提）Promise.prototype.then() の 戻り値は、Promise
```JavaScript
function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(2); }, 1000);
  });
}

// getA() の　戻り値は、Promise
const p1 = getA();					// p1は、2をPromiseでラップ
p1.then(a => console.log(a));		// 2

// Promise.prototype.then() の 戻り値は、Promise
const p2 = getA().then(a => a * 3);	// pは、a*3をPromiseでラップ
p2.then(a => console.log(a));		// 6 (2*3)
```


# Promiseの勉強をするのにもってこい

1 秒後に整数 2 を返す関数 getA と、

1 秒後に整数 3 を返す関数 getB と、

1 秒後に整数 4 を返す関数 getC の 3つの関数があります。

```JavaScript
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
```
それぞれ答えとなる整数値を Promise オブジェクトとして返します。


この 3つの関数の結果をかけあわせた数値を、 Promiseチェインを一度は利用して標準出力に出力してみてください。

```JavaScript
// Promise Chainは使わない方法
getA().then((a)=>{
  getB().then((b)=>{
    getC().then((c)=>{
      
      console.log( a*b*c );

    });
  });
});
```


```JavaScript
// Promise Chainをつかう方法
getA().then((a)=>{
  return getB().then((b)=>{ return a*b; });
}).then((ab)=>{
  getC().then((c)=>{ console.log(ab*c); });
});
```


```JavaScript
// Promise.allを使う方法
Promise.all([getA(), getB(), getC()]).then(([a,b,c])=>{
  console.log( a*b*c );
});
```


```JavaScript
// async/await を使う方法
(async () => {
	const a = await getA();
	const b = await getB();
	const c = await getC();
	console.log(a * b * c);
})();
```