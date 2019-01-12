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
  "29f056833e5cda89f8201aeb2bed7d915b27cc13": function() {return __webpack_require__('4');}
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./../../node_modules/melody-component/lib/index.js")["7af4db4ccee7b09f3703b0f6645c5a77e9e68228"]();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("./../../node_modules/melody-hoc/lib/index.js")["f61b80beb2d50c419060e8057448833b733c97d8"]();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("./index.twig")["b19c7cff77acd74b7d6ce77d9505b784f23ad712"]();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _melodyComponent = __webpack_require__(1);

var _melodyHoc = __webpack_require__(2);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = { count: 0 };

var INC = 'INC';
var DEC = 'DEC';

var increaseCounter = function increaseCounter() {
  return { type: INC };
};
var decreaseCounter = function decreaseCounter() {
  return { type: DEC };
};

var stateReducer = function stateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _melodyComponent.RECEIVE_PROPS:
      return _extends({}, state, action.payload);
    case INC:
      return _extends({}, state, {
        count: state.count + 1
      });

    case DEC:
      return _extends({}, state, {
        count: state.count - 1
      });
  }
  return state;
};

var withClickHandlers = (0, _melodyHoc.bindEvents)({
  incrementButton: {
    click: function click(event, _ref) {
      var dispatch = _ref.dispatch;

      dispatch(increaseCounter());
    }
  },
  decrementButton: {
    click: function click(event, _ref2) {
      var dispatch = _ref2.dispatch;

      dispatch(decreaseCounter());
    }
  }
});

var component = (0, _melodyComponent.createComponent)(_index2.default, stateReducer);

exports.default = withClickHandlers(component);

/***/ })
/******/ ]);