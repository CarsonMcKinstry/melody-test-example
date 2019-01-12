module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "dbfec630f02f38811f35443459985947bf854587": function() {return __webpack_require__('3');}
};
module.exports["dbfec630f02f38811f35443459985947bf854587"]();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./index.js")["29f056833e5cda89f8201aeb2bed7d915b27cc13"]();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("./../../node_modules/melody-test-utils/lib/index.js")["a5a18958983c74ec0d25bcd98d62e34ca8553a19"]();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _melodyTestUtils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('counter', function () {
  var tree = void 0;

  beforeEach(function () {
    tree = (0, _melodyTestUtils.render)(_index2.default);
  });

  // it('should render?', () => {
  //   const rendered = render(counter);

  //   const incrementButtonText = rendered.find('#increment').text();

  //   expect(incrementButtonText.trim()).toEqual('+');
  // });

  it('should render an h3 with a count inside of it', function () {
    var renderedCount = tree.find('h3').text();

    expect(renderedCount.trim()).toEqual('Counter: 0');
  });

  it('should increment the count', function () {
    var incrementButton = tree.find('#increment');

    incrementButton.simulate('click');

    var renderedCount = tree.find('h3').text();

    expect(renderedCount.trim()).toEqual('Counter: 1');
  });

  it('should decrement the count', function () {
    var decrementButton = tree.find('#decrement');

    decrementButton.simulate('click');

    var renderedCount = tree.find('h3').text();

    expect(renderedCount.trim()).toEqual('Counter: -1');
  });
});

/***/ })
/******/ ]);