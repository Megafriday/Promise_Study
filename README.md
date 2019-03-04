# Promiseの勉強をするのにもってこい

1 秒後に整数 2 を返す関数 getA と、
1 秒後に整数 3 を返す関数 getB と、
1 秒後に整数 4 を返す関数 getC の 3 つの関数があります。

```
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

この 3 つの関数の結果をかけあわせた数値を、 Promise チェインを一度は利用して標準出力に出力しててみてください。

```
// Promise Chainは使わない方法
getA().then((a)=>{
  getB().then((b)=>{
    getC().then((c)=>{
      
      console.log( a*b*c );

    });
  });
});
```

```
// Promise Chainをつかう方法
getA().then((a)=>{
  return getB().then((b)=>{ return a*b; });
}).then((ab)=>{
  getC().then((c)=>{ console.log(ab*c); });
});
```
