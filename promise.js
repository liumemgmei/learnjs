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
  
  // console.log(this, this instanceof Prom, 'this')
  // this.
  // this._state = 0
  // var prv ='meng';
  // if (fn === noop) return;// 干嘛用的？
  // console.log('goon');
  // doResolve(fn, this)
}

class A {
  constructor(props = {}) {
    const {name} =props;
    this._name = name;
  }
  get name() {
    return this._name +'haha'
  }
  set name(t) {
    this._name = t+'lala'
  }
  a(){
    // log(this.name)
  }
  b=()=>{
    // log(this.name)
  }
}
A.prototype.d = function() {
  console.log(this.name);
}

class B extends A {
  constructor(props) {
    super(props);
  }
}
let a = new A({name:'animal'});
let b = new B({name:'dog'});
a.name = '123'
a.d();
function Animal() { }



function first() {
  second(1)
}

function second(l) {
  log(l)
}


first();



a.b.apply({name: 'liumm'});
b.b();

function doResolve (fn, promise) {
  var done = false;
  fn()
}
function tryCallTwo() {

}
let t = new Prom(()=>{});
let tt = Prom(()=>{});
// log(t);

let g ='gggg'