import {log} from './index';
function noop() {}

// let r = new Promise((res)=>{
//   console.log(Date.now(),1);
//   setTimeout(()=>{  
//     console.log(Date.now(),1.1);
//     res(1)
//   },100)
  
// }).then(()=>{
//   console.log(Date.now(),2);
// });


// 表示一个异步最终的状态及其结果值
function Prom(fn) {
  console.log(this, this instanceof null, 'this')
  // this.
  // this._state = 0
  // var prv ='meng';
  // if (fn === noop) return;// 干嘛用的？
  // console.log('goon');
  // doResolve(fn, this)
}




function doResolve (fn, promise) {
  var done = false;
  fn()
}
function tryCallTwo() {

}
let t = new Prom(()=>{});
let tt = Prom(()=>{});
// log(t);