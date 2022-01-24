"use strict";

var _this2 = void 0;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var A = /*#__PURE__*/ (function () {
  function A() {
    var _this = this;

    _defineProperty(
      this,
      "b",
      function () {
        _newArrowCheck(this, _this);
      }.bind(this)
    );
  }

  var _proto = A.prototype;

  _proto.a = function a() {};

  return A;
})();

var B = /*#__PURE__*/ (function (_A) {
  _inheritsLoose(B, _A);

  function B(props) {
    return _A.call(this, props) || this;
  }

  return B;
})(A);

A.proptotype.d = function () {
  _newArrowCheck(this, _this2);
}.bind(void 0);

var obj = {
  e: function e() {
    _newArrowCheck(this, _this2);
  }.bind(void 0)
};

function func() {
  var _this3 = this;

  var f = function f() {
    _newArrowCheck(this, _this3);
  }.bind(this);

  return f;
}
