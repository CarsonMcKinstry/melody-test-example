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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

var melodyIdom = __webpack_require__(2);

/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Utility function to add capabilities to an object. Such a capability
 * is usually called a "mixin" and can be either
 *
 * - an object that is merged into the prototype of `target`
 * - a function taking the prototype and optionally returning an object which
 *   is merged into the prototype
 * - a falsy value (`false`, `null` or `undefined`) which is ignored.
 *   This is useful for adding a capability optionally.
 *
 * @param target The constructor of a class
 * @param {...Mixin} mixins The mixins applied to the `target`
 * @returns {*}
 */
function mixin(target) {
    var obj = typeof target === 'function' ? target.prototype : target;
    // If implementation proves to be too slow, rewrite to use a proper loop
    for (var i = 1, len = arguments.length; i < len; i++) {
        var _mixin = arguments[i];
        _mixin && Object.assign(obj, typeof _mixin === 'function' ? _mixin(obj) : _mixin);
    }
    return target;
}

/**
 * A simple state container which is modified through actions
 * by using a reducer.
 *
 * When the returned state function is invoked without parameters,
 * it returns the current state.
 *
 * If the returned function is invoked with an action, the reducer is executed
 * and its return value becomes the new state.
 *
 * @param reducer
 * @returns {Function}
 */
/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createState(reducer) {
    var state = reducer(undefined, {
        type: 'MELODY/@@INIT'
    });

    return function store(action) {
        if (action) {
            state = reducer(state, action) || state;
        }
        return state;
    };
}

/**
 * The `type` of the action which is triggered when the properties of
 * a component are changed.
 *
 * Actions of this type follow the "Standard Flux Action" pattern. They have
 * a property `type`, equal to this value, and a property `payload` which is
 * an object containing the new properties.
 *
 * @type {string}
 */
var RECEIVE_PROPS = 'MELODY/RECEIVE_PROPS';

/**
 * An Action Creator which creates an {@link RECEIVE_PROPS} action.
 * @param payload The new properties
 * @param meta The component which will receive new properties
 * @returns ReceivePropsAction
 */
/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function setProps(payload, meta) {
    return {
        type: RECEIVE_PROPS,
        payload: payload,
        meta: meta
    };
}

/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hasOwn = Object.prototype.hasOwnProperty;

// based on react-redux
function shallowEquals(a, b) {
    if (a === b) {
        return true;
    }

    if (!a || !b) {
        return false;
    }

    var keyOfA = Object.keys(a),
        keysOfB = Object.keys(b);

    if (keyOfA.length !== keysOfB.length) {
        return false;
    }

    for (var i = 0; i < keyOfA.length; i++) {
        if (!hasOwn.call(b, keyOfA[i]) || a[keyOfA[i]] !== b[keyOfA[i]]) {
            return false;
        }
    }

    return true;
}

// type ComponentImpl = {
//   /**
//    * The element associated with this component.
//    */
//   el: Node,
//   /**
//    * A map of references to native HTML elements.
//    */
//   refs: { [key: string]: Element },

//   /**
//    * Set new properties for the Component.
//    * This might cause the component to request an update.
//    */
//   apply(props: any): void,
//   /**
//    * Executed after a component has been mounted or updated.
//    * After this method has been triggered, the component is considered stable and
//    * accessing its own DOM should be safe.
//    * The children of this Component might not have rendered.
//    */
//   notify(): void,
//   /**
//    * Invoked when a component should render itself.
//    */
//   render(): void
// };

function Component(element, reducer) {
    // part of the public API
    this.el = element;
    this.refs = Object.create(null);
    // needed for this type of component
    this.props = null;
    this.oldProps = null;
    this.oldState = null;
    this['MELODY/STORE'] = createState(reducer);
    this.isMounted = false;
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.state = this.getState();
    this.componentDidInitialize();
    this.componentWillMount();
}
Object.assign(Component.prototype, {
    /**
    * Set new properties for the Component.
    * This might cause the component to request an update.
    */
    apply: function apply(props) {
        if (!this.oldProps) {
            this.oldProps = this.props;
        }
        this.dispatch(setProps(props, this));
    },

    /**
    * Executed after a component has been mounted or updated.
    * After this method has been triggered, the component is considered stable and
    * accessing the DOM should be safe.
    * The children of this Component might not have been rendered.
    */
    notify: function notify() {
        if (this.isMounted) {
            this.componentDidUpdate(this.oldProps || this.props, this.oldState || this.state);
            if (melodyIdom.options.afterUpdate) {
                melodyIdom.options.afterUpdate(this);
            }
        } else {
            this.isMounted = true;
            this.componentDidMount();
            if (melodyIdom.options.afterMount) {
                melodyIdom.options.afterMount(this);
            }
        }
        this.oldProps = null;
        this.oldState = null;
    },
    dispatch: function dispatch(action) {
        var newState = this['MELODY/STORE'](action);
        var newProps = this.props;
        var isReceiveProps = action.type === RECEIVE_PROPS;
        if (isReceiveProps) {
            newProps = action.payload;
        }
        var shouldUpdate = isReceiveProps && !this.isMounted || this.el && this.shouldComponentUpdate(newProps, newState);
        if (shouldUpdate && this.isMounted) {
            this.componentWillUpdate(newProps, newState);
        }
        if (isReceiveProps) {
            this.props = newProps;
        }
        if (shouldUpdate) {
            melodyIdom.enqueueComponent(this);
        }
        return newState || this.state;
    },
    getState: function getState() {
        return this['MELODY/STORE']();
    },
    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return !shallowEquals(this.state, nextState);
    },

    /**
    * Invoked when a component should render itself.
    */
    render: function render() {},
    componentDidInitialize: function componentDidInitialize() {},
    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {},
    componentWillUpdate: function componentWillUpdate() {},
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {},

    /**
    * Invoked before a component is unmounted.
    */
    componentWillUnmount: function componentWillUnmount() {}
});

function mapPropsToState(state, action) {
    return action.type === RECEIVE_PROPS ? action.payload : state || {};
}

function createComponentConstructor(Parent, parentReducer) {
    function ChildComponent(el, reducer) {
        if (!this || !(this instanceof ChildComponent)) {
            var EnhancedChild = createComponentConstructor(ChildComponent, parentReducer);
            for (var i = 0, len = arguments.length; i < len; i++) {
                mixin(EnhancedChild, arguments[i]);
            }
            return EnhancedChild;
        }
        Parent.call(this, el, reducer || parentReducer);
    }
    ChildComponent.prototype = Object.create(Parent.prototype, {
        constructor: { value: ChildComponent }
    });
    return ChildComponent;
}

function createComponent(templateFnOrObj, reducer) {
    var template = templateFnOrObj.render ? function (props) {
        return templateFnOrObj.render(props);
    } : templateFnOrObj;
    var finalReducer = reducer || mapPropsToState;
    var ChildComponent = createComponentConstructor(Component, finalReducer);
    ChildComponent.prototype.displayName = template.name || template.displayName || 'Unknown';
    ChildComponent.prototype.render = function () {
        this.oldState = this.state;
        this.state = this.getState();
        return template(this.state);
    };
    for (var i = 2, len = arguments.length; i < len; i++) {
        mixin(ChildComponent, arguments[i]);
    }
    return ChildComponent;
}

/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function render(el, Component, props) {
    var result = melodyIdom.patchOuter(el, function () {
        melodyIdom.mount(el, Component, props);
    });
    if (process.env.NODE_ENV === 'test') {
        melodyIdom.flush({
            didTimeout: false,
            timeRemaining: function timeRemaining() {
                return 10;
            }
        });
    }
    return result;
}

function unmountComponentAtNode(node) {
    if (!node) {
        return;
    }
    var data = node['__incrementalDOMData'];
    // No data? No component.
    if (!data) {
        return;
    }
    // No componentInstance? Unmounting not needed.
    var componentInstance = data.componentInstance;

    if (!componentInstance) {
        return;
    }
    // Tear down components
    melodyIdom.unmountComponent(componentInstance);
    // Remove node data
    node['__incrementalDOMData'] = undefined;
}

/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.createComponent = createComponent;
exports.setProps = setProps;
exports.RECEIVE_PROPS = RECEIVE_PROPS;
exports.render = render;
exports.unmountComponentAtNode = unmountComponentAtNode;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
    return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof2(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _debounce = _interopDefault(__webpack_require__(7));

var options = {};

/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var parentToChildren = new WeakMap();
var childToParent = new WeakMap();
function link(parent, child) {
    childToParent.set(child, parent);
    var children = getChildren(parent);
    children.push(child);
}
function unlink(node) {
    parentToChildren.delete(node);
    childToParent.delete(node);
}
function getChildren(parent) {
    var children = parentToChildren.get(parent);
    if (!children) {
        children = [];
        parentToChildren.set(parent, children);
    }
    return children;
}
function getParent(child) {
    return childToParent.get(child);
}
function reset(node) {
    parentToChildren.set(node, []);
}

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A cached reference to the create function.
 */
function Blank() {}
Blank.prototype = Object.create(null);
/**
 * Creates an map object without a prototype.
 * @return {!Object}
 */
var createMap = function createMap() {
    return new Blank();
};
var unmountComponent = function unmountComponent(comp) {
    getChildren(comp).forEach(unmountComponent);
    unlink(comp);
    drop(comp);
    var data = comp.el ? comp.el['__incrementalDOMData'] : null;
    if (options.beforeUnmount) {
        options.beforeUnmount(comp);
    }
    if (mountedComponents.has(comp)) {
        comp.componentWillUnmount();
        mountedComponents.delete(comp);
    }
    if (data && data.componentInstance) {
        data.componentInstance = null;
    }
    comp.el = null;
};
var documentRange = null;
function parseHTML(htmlString) {
    if (!documentRange) {
        documentRange = document.createRange();
        documentRange.selectNode(document.body);
    }
    return documentRange.createContextualFragment(htmlString.trim()).childNodes;
}

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 * @param {!string} nodeName
 * @param {?string=} key
 * @constructor
 */
function NodeData(nodeName, key) {
    /**
    * The attributes and their values.
    * @const {!Object<string, *>}
    */
    this.attrs = createMap();
    /**
    * An array of attribute name/value pairs, used for quickly diffing the
    * incomming attributes to see if the DOM node's attributes need to be
    * updated.
    * @const {Array<*>}
    */
    this.attrsArr = [];
    /**
    * The incoming attributes for this Node, before they are updated.
    * @const {!Object<string, *>}
    */
    this.newAttrs = createMap();
    /**
    * The key used to identify this node, used to preserve DOM nodes when they
    * move within their parent.
    * @const
    */
    this.key = key;
    /**
    * Keeps track of children within this node by their key.
    * {?Object<string, !Element>}
    */
    this.keyMap = createMap();
    /**
    * Whether or not the keyMap is currently valid.
    * {boolean}
    */
    this.keyMapValid = true;
    /**
    * Whether or not the statics for the given node have already been applied.
    *
    * @type {boolean}
    */
    this.staticsApplied = false;
    /**
    * Whether or not the associated node is or contains a focused Element.
    * @type {boolean}
    */
    this.focused = false;
    /**
    * The node name for this node.
    * @const {string}
    */
    this.nodeName = nodeName;
    /**
    * @type {?string}
    */
    this.text = null;
    /**
    * The component instance associated with this element.
    * @type {Object}
    */
    this.componentInstance = null;
    /**
    * The length of the children in this element.
    * This value is only calculated for raw elements.
    * @type {number}
    */
    this.childLength = 0;
}
/**
 * Initializes a NodeData object for a Node.
 *
 * @param {Node} node The node to initialize data for.
 * @param {string} nodeName The node name of node.
 * @param {?string=} key The key that identifies the node.
 * @return {!NodeData} The newly initialized data object
 */
var initData = function initData(node, nodeName, key) {
    var data = new NodeData(nodeName, key);
    node['__incrementalDOMData'] = data;
    return data;
};
/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 *
 * @param {Node} node The node to retrieve the data for.
 * @return {!NodeData} The NodeData for this Node.
 */
var getData = function getData(node) {
    if (process.env.NODE_ENV !== 'production') {
        if (!node) {
            throw new Error("Can't getData for non-existing node.");
        }
    }
    importNode(node);
    return node['__incrementalDOMData'];
};
var importNode = function importNode(node) {
    var stack = [node];
    while (stack.length) {
        var node_1 = stack.pop();
        if (node_1['__incrementalDOMData']) {
            continue;
        }
        var isElement = node_1 instanceof Element;
        var nodeName = isElement ? node_1.localName : node_1.nodeName;
        var key = isElement ? node_1.getAttribute('key') : null;
        var data = initData(node_1, nodeName, key);
        if (key) {
            var parentData = node_1.parentNode && node_1.parentNode['__incrementalDOMData'];
            if (parentData) {
                parentData.keyMap[key] = node_1;
            }
        }
        if (isElement) {
            var attributes = node_1.attributes;
            var attrs = data.attrs;
            var newAttrs = data.newAttrs;
            var attrsArr = data.attrsArr;
            for (var i = 0; i < attributes.length; i += 1) {
                var attr = attributes[i];
                var name_1 = attr.name;
                var value = attr.value;
                attrs[name_1] = value;
                newAttrs[name_1] = undefined;
                attrsArr.push(name_1);
                attrsArr.push(value);
            }
            for (var child = node_1.firstChild; child; child = child.nextSibling) {
                stack.push(child);
            }
        } else if (node_1.nodeType === 3) {
            data.text = node_1.data;
        }
    }
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param {string} tag The tag to get the namespace for.
 * @param {?Node} parent
 * @return {?string} The namespace to create the tag in.
 */
var getNamespaceForTag = function getNamespaceForTag(tag, parent) {
    if (tag === 'svg') {
        return 'http://www.w3.org/2000/svg';
    }
    if (getData(parent).nodeName === 'foreignObject') {
        return null;
    }
    return parent.namespaceURI;
};
/**
 * Creates an Element.
 * @param {Document} doc The document with which to create the Element.
 * @param {?Node} parent
 * @param {string} tag The tag for the Element.
 * @param {?string=} key A key to identify the Element.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element.
 * @return {!Element}
 */
var createElement = function createElement(doc, parent, tag, key) {
    var namespace = getNamespaceForTag(tag, parent);
    var el;
    if (namespace) {
        el = doc.createElementNS(namespace, tag);
    } else {
        el = doc.createElement(tag);
    }
    initData(el, tag, key);
    return el;
};
/**
 * Creates a Text Node.
 * @param {Document} doc The document with which to create the Element.
 * @return {!Text}
 */
var createText = function createText(doc) {
    var node = doc.createTextNode('');
    initData(node, '#text', null);
    return node;
};
var createRaw = function createRaw(doc, html) {
    var children = parseHTML(html);
    if (!children.length) {
        var frag = document.createElement('div');
        frag.appendChild(doc.createTextNode(''));
        children = frag.childNodes;
    }
    var data = initData(children[0], '#raw', null);
    data.text = html;
    data.childLength = children.length;
    return children;
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
  * Keeps track whether or not we are in an attributes declaration (after
  * elementOpenStart, but before elementOpenEnd).
  * @type {boolean}
  */
var inAttributes = false;
/**
  * Keeps track whether or not we are in an element that should not have its
  * children cleared.
  * @type {boolean}
  */
var inSkip = false;
/**
 * Makes sure that there is a current patch context.
 * @param {*} context
 */
var assertInPatch = function assertInPatch(functionName, context) {
    if (!context) {
        throw new Error('Cannot call ' + functionName + '() unless in patch');
    }
};
/**
 * Makes sure that a patch closes every node that it opened.
 * @param {?Node} openElement
 * @param {!Node|!DocumentFragment} root
 */
var assertNoUnclosedTags = function assertNoUnclosedTags(openElement, root) {
    if (openElement === root) {
        return;
    }
    var currentElement = openElement;
    var openTags = [];
    while (currentElement && currentElement !== root) {
        openTags.push(currentElement.nodeName.toLowerCase());
        currentElement = currentElement.parentNode;
    }
    throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
};
/**
 * Makes sure that the caller is not where attributes are expected.
 * @param {string} functionName
 */
var assertNotInAttributes = function assertNotInAttributes(functionName) {
    if (inAttributes) {
        throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
    }
};
/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param {string} functionName
 */
var assertNotInSkip = function assertNotInSkip(functionName) {
    if (inSkip) {
        throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
    }
};
/**
 * Makes sure that the caller is where attributes are expected.
 * @param {string} functionName
 */
var assertInAttributes = function assertInAttributes(functionName) {
    if (!inAttributes) {
        throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
    }
};
/**
 * Makes sure the patch closes virtual attributes call
 */
var assertVirtualAttributesClosed = function assertVirtualAttributesClosed() {
    if (inAttributes) {
        throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
    }
};
/**
  * Makes sure that tags are correctly nested.
  * @param {string} nodeName
  * @param {string} tag
  */
var assertCloseMatchesOpenTag = function assertCloseMatchesOpenTag(nodeName, tag) {
    if (nodeName !== tag) {
        throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
    }
};
/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param {string} functionName
 * @param {?Node} previousNode
 */
var assertNoChildrenDeclaredYet = function assertNoChildrenDeclaredYet(functionName, previousNode) {
    if (previousNode !== null) {
        throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
    }
};
/**
 * Checks that a call to patchOuter actually patched the element.
 * @param {?Node} node The node requested to be patched.
 * @param {?Node} previousNode The previousNode after the patch.
 */
var assertPatchElementNoExtras = function assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode) {
    var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
    var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
    var wasRemoved = currentNode === startNode;
    if (!wasUpdated && !wasChanged && !wasRemoved) {
        throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
    }
};
/**
 * Updates the state of being in an attribute declaration.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInAttributes = function setInAttributes(value) {
    var previous = inAttributes;
    inAttributes = value;
    return previous;
};
/**
 * Updates the state of being in a skip element.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInSkip = function setInSkip(value) {
    var previous = inSkip;
    inSkip = value;
    return previous;
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!Node} node
 * @return {boolean} True if the node the root of a document, false otherwise.
 */
var isDocumentRoot = function isDocumentRoot(node) {
    // For ShadowRoots, check if they are a DocumentFragment instead of if they
    // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
    // not supported.
    return node instanceof Document || node instanceof DocumentFragment;
};
/**
 * @param {!Node} node The node to start at, inclusive.
 * @param {?Node} root The root ancestor to get until, exclusive.
 * @return {!Array<!Node>} The ancestry of DOM nodes.
 */
var getAncestry = function getAncestry(node, root) {
    var ancestry = [];
    var cur = node;
    while (cur !== root) {
        ancestry.push(cur);
        cur = cur.parentNode;
    }
    return ancestry;
};
/**
 * @param {!Node} node
 * @return {!Node} The root node of the DOM tree that contains node.
 */
var getRoot = function getRoot(node) {
    var cur = node;
    var prev = cur;
    while (cur) {
        prev = cur;
        cur = cur.parentNode;
    }
    return prev;
};
/**
 * @param {!Node} node The node to get the activeElement for.
 * @return {?Element} The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */
var getActiveElement = function getActiveElement(node) {
    var root = getRoot(node);
    return isDocumentRoot(root) ? root.activeElement : null;
};
/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param {!Node} node The reference node to get the activeElement for.
 * @param {?Node} root The root to get the focused path until.
 * @return {!Array<Node>}
 */
var getFocusedPath = function getFocusedPath(node, root) {
    var activeElement = getActiveElement(node);
    if (!activeElement || !node.contains(activeElement)) {
        return [];
    }
    return getAncestry(activeElement, root);
};
/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param {?Node} parentNode
 * @param {!Node} node
 * @param {?Node} referenceNode
 */
var moveBefore = function moveBefore(parentNode, node, referenceNode) {
    var insertReferenceNode = node.nextSibling;
    var cur = referenceNode;
    while (cur && cur !== node) {
        var next = cur.nextSibling;
        parentNode.insertBefore(cur, insertReferenceNode);
        cur = next;
    }
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @type {?Node} */
var currentNode;
/** @type {?Node} */
var currentParent;
/** @type {?Document} */
var doc;
var componentKey = null;
var currentComponent = null;
var deletedNodes = null;
var markFocused = function markFocused(focusPath, focused) {
    for (var i = 0; i < focusPath.length; i += 1) {
        getData(focusPath[i]).focused = focused;
    }
};
var patchFactory = function patchFactory(run) {
    return function (node, fn, data) {
        if (process.env.NODE_ENV !== 'production') {
            if (!node) {
                throw new Error('Patch invoked without an element.');
            }
        }
        var prevDeletedNodes = deletedNodes;
        var prevDoc = doc;
        var prevCurrentNode = currentNode;
        var prevCurrentParent = currentParent;
        var prevCurrentComponent = currentComponent;
        var previousInAttribute = false;
        var previousInSkip = false;
        deletedNodes = [];
        doc = node.ownerDocument;
        currentParent = node.parentNode;
        if (process.env.NODE_ENV !== 'production') {
            previousInAttribute = setInAttributes(false);
            previousInSkip = setInSkip(false);
        }
        var focusPath = getFocusedPath(node, currentParent);
        markFocused(focusPath, true);
        var retVal;
        if (process.env.NODE_ENV !== 'production') {
            try {
                retVal = run(node, fn, data);
            } catch (e) {
                // reset context
                deletedNodes = prevDeletedNodes;
                doc = prevDoc;
                currentNode = prevCurrentNode;
                currentParent = prevCurrentParent;
                currentComponent = prevCurrentComponent;
                // rethrow the error
                throw e;
            }
        } else {
            retVal = run(node, fn, data);
        }
        markFocused(focusPath, false);
        if (process.env.NODE_ENV !== 'production') {
            assertVirtualAttributesClosed();
            setInAttributes(previousInAttribute);
            setInSkip(previousInSkip);
        }
        var i, len;
        for (i = 0, len = deletedNodes.length; i < len; i++) {
            nodeDeleted(deletedNodes[i]);
        }
        // reset context
        deletedNodes = prevDeletedNodes;
        doc = prevDoc;
        currentNode = prevCurrentNode;
        currentParent = prevCurrentParent;
        currentComponent = prevCurrentComponent;
        return retVal;
    };
};
function nodeDeleted(node) {
    var data = getData(node);
    if (data.attrs.ref && data.attrs.ref.disposer) {
        data.attrs.ref.disposer.unsubscribe();
        data.attrs.ref = null;
    }
    if (data.componentInstance) {
        unmountComponent(data.componentInstance);
    }
    // not an ideal solution but we can eventually move it
    // towards a scheduler (perhaps `requestIdleCallback` if we notice
    // that there are actual issues with this)
    // Chose a recursive solution here to avoid unnecessary memory usage
    var child = node.firstChild;
    while (child) {
        nodeDeleted(child);
        child = child.nextSibling;
    }
}
var patchInner = patchFactory(function (node, fn, data) {
    currentNode = node;
    enterNode();
    fn(data);
    exitNode();
    if (process.env.NODE_ENV !== 'production') {
        assertNoUnclosedTags(currentNode, node);
    }
    return node;
});
var patchOuter = patchFactory(function (node, fn, data) {
    var startNode = { nextSibling: node };
    var expectedNextNode = null;
    var expectedPrevNode = null;
    if (process.env.NODE_ENV !== 'production') {
        expectedNextNode = node.nextSibling;
        expectedPrevNode = node.previousSibling;
    }
    currentNode = startNode;
    fn(data);
    if (process.env.NODE_ENV !== 'production') {
        assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
    }
    if (node !== currentNode && node.parentNode) {
        removeChild(currentParent, node, getData(currentParent).keyMap);
    }
    return startNode === currentNode ? null : currentNode;
});
/**
 * Checks whether or not the current node matches the specified nodeName and
 * key.
 *
 * @param {?string} nodeName The nodeName for this node.
 * @param {?string=} key An optional key that identifies a node.
 * @return {boolean} True if the node matches, false otherwise.
 */
var matches = function matches(matchNode, nodeName, key) {
    var data = getData(matchNode);
    // Key check is done using double equals as we want to treat a null key the
    // same as undefined. This should be okay as the only values allowed are
    // strings, null and undefined so the == semantics are not too weird.
    // templates rendered on the server side may not have keys at all while melody templates
    // always will have them so we reconcile the dom in those cases.
    if (nodeName === data.nodeName) {
        if (key == data.key) {
            return true;
        }
        // exisiting DOM element does not have a key
        // which means we can hook onto it freely
        if (!data.key) {
            data.key = key;
            // but we'll need to update the parent element
            var parentKeys = currentParent && getData(currentParent).keyMap;
            if (parentKeys) {
                parentKeys[key] = matchNode;
            }
            return true;
        }
    }
    return false;
};
/**
 * Aligns the virtual Element definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param {string} nodeName For an Element, this should be a valid tag string.
 *     For a Text, this should be #text.
 * @param {?string=} key The key used to identify this element.
 * @param {?Array<*>=} statics For an Element, this should be an array of
 *     name-value pairs.
 */
var alignWithDOM = function alignWithDOM(nodeName, key) {
    if (currentNode && matches(currentNode, nodeName, key)) {
        return;
    }
    var parentData = getData(currentParent);
    var currentNodeData = currentNode && getData(currentNode);
    var keyMap = parentData.keyMap;
    var fromKeyMap = false;
    var node;
    var componentInstance = null;
    // Check to see if the node has moved within the parent.
    if (key) {
        var keyNode = keyMap[key];
        if (keyNode) {
            if (matches(keyNode, nodeName, key)) {
                fromKeyMap = true;
                node = keyNode;
            } else if (keyNode === currentNode) {
                var keyNodeData = getData(keyNode);
                // if (keyNodeData.componentInstance === currentComponent) {
                if (keyNodeData.componentInstance) {
                    componentInstance = keyNodeData.componentInstance;
                    keyNodeData.componentInstance = null;
                } else {
                    deletedNodes.push(keyNode);
                }
            } else {
                removeChild(currentParent, keyNode, keyMap);
            }
        } else if (currentNode && currentNode.nodeType === 3 && currentNode.data.trim() === '') {
            // special handling here to ignore empty text nodes if the one after it is what we're actually looking for
            // this reduces a lot of special handling for server side rendered content.
            if (currentNode.nextSibling && matches(currentNode.nextSibling, nodeName, key)) {
                node = currentNode.nextSibling;
            }
        }
    }
    // Create the node if it doesn't exist.
    if (!node) {
        if (nodeName === '#text') {
            node = createText(doc);
        } else {
            node = createElement(doc, currentParent, nodeName, key);
        }
        if (key) {
            keyMap[key] = node;
        }
    }
    if (componentInstance) {
        getData(node).componentInstance = componentInstance;
        componentInstance.el = node;
    }
    // Re-order the node into the right position, preserving focus if either
    // node or currentNode are focused by making sure that they are not detached
    // from the DOM.
    if (getData(node).focused) {
        // move everything else before the node.
        moveBefore(currentParent, node, currentNode);
    } else if (!(fromKeyMap && !node.parentNode) && currentNodeData && currentNodeData.key && !currentNodeData.focused) {
        // Remove the currentNode, which can always be added back since we hold a
        // reference through the keyMap. This prevents a large number of moves when
        // a keyed item is removed or moved backwards in the DOM.
        currentParent.replaceChild(node, currentNode);
        parentData.keyMapValid = false;
    } else if (currentNode && currentNode.nextSibling === node && currentNode.nodeType === 3 && currentNode.data.trim() === '') {
        // if the empty text node handling above was successful, we simply remove the skipped text node
        currentParent.removeChild(currentNode);
    } else {
        currentParent.insertBefore(node, currentNode);
    }
    currentNode = node;
};
var removeChild = function removeChild(node, child, keyMap) {
    node.removeChild(child);
    deletedNodes.push(child);
    var key = getData(child).key;
    if (key) {
        delete keyMap[key];
    }
};
/**
 * Clears out any unvisited Nodes, as the corresponding virtual element
 * functions were never called for them.
 */
var clearUnvisitedDOM = function clearUnvisitedDOM() {
    var node = currentParent;
    var data = getData(node);
    var keyMap = data.keyMap;
    var keyMapValid = data.keyMapValid;
    var child = node.lastChild;
    var key;
    if (child === currentNode && keyMapValid) {
        return;
    }
    while (child && child !== currentNode) {
        removeChild(node, child, keyMap);
        child = node.lastChild;
    }
    // Clean the keyMap, removing any unusued keys.
    if (!keyMapValid) {
        for (key in keyMap) {
            child = keyMap[key];
            if (child.parentNode !== node) {
                deletedNodes.push(child);
                delete keyMap[key];
            }
        }
        data.keyMapValid = true;
    }
};
/**
 * Changes to the first child of the current node.
 */
var enterNode = function enterNode() {
    currentParent = currentNode;
    currentNode = null;
};
/**
 * Changes to the next sibling of the current node.
 */
var nextNode = function nextNode() {
    currentNode = getNextNode();
};
var getNextNode = function getNextNode() {
    if (currentNode) {
        return currentNode.nextSibling;
    } else {
        return currentParent.firstChild;
    }
};
/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
var exitNode = function exitNode() {
    clearUnvisitedDOM();
    currentNode = currentParent;
    currentParent = currentParent.parentNode;
};
var updateComponent = function updateComponent(comp) {
    var data = getData(comp.el);
    var parentComponent = currentComponent;
    componentKey = data.key;
    reset(comp);
    currentComponent = comp;
    comp.render();
    currentComponent = parentComponent;
};
var scheduleComponent = function scheduleComponent(Component, key, props, el) {
    var comp;
    if (el) {
        // we've already seen this component
        var data = getData(el);
        comp = data.componentInstance;
        if (!comp) {
            // but apparently we didn't have a component instance so far
            // most likely we're mounting a server side rendered DOM
            comp = typeof Component === 'function' ? new Component() : Component;
            comp.el = el;
            data.componentInstance = comp;
        }
        // Q: Do we even want to support this in the future?
        // if (typeof Component === 'function' && !(comp instanceof Component)) {
        //   unmountComponent(comp);
        //   comp = null;
        // }
        elementOpen(data.nodeName, key);
        skip();
        elementClose();
    } else {
        // unknown component
        if (typeof Component === 'function') {
            comp = new Component();
        } else {
            comp = Component;
        }
        elementOpen('m-placeholder', key);
        skip();
        comp.el = elementClose();
        getData(comp.el).componentInstance = comp;
    }
    if (currentComponent) {
        link(currentComponent, comp);
    }
    return comp.apply(props);
};
var component = function component(Component, key, props) {
    var el = getData(currentParent).keyMap[key];
    return scheduleComponent(Component, key, props, el);
};
var getCurrentComponent = function getCurrentComponent() {
    return currentComponent;
};
var mount = function mount(element, Component, props) {
    var data = getData(element);
    var key = data && data.key;
    var comp = data.componentInstance;
    var isComponentInstance = typeof Component !== 'function';
    // if the existing component is not an instance of the specified component type
    // then we just unmount the existing one and proceed as if none ever existed
    if (comp && !isComponentInstance && !(comp instanceof Component)) {
        unmountComponent(comp);
    }
    return scheduleComponent(Component, key, props, element);
};
/**
 * Makes sure that the current node is an Element with a matching tagName and
 * key.
 *
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function elementOpen(tag, key) {
    nextNode();
    alignWithDOM(tag, componentKey || key);
    componentKey = null;
    enterNode();
    return currentParent;
};
/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
var elementClose = function elementClose() {
    if (process.env.NODE_ENV !== 'production') {
        setInSkip(false);
    }
    exitNode();
    return currentNode;
};
/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 *
 * @return {!Text} The corresponding Text Node.
 */
var text = function text() {
    nextNode();
    alignWithDOM('#text', null);
    return currentNode;
};
/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function currentElement() {
    if (process.env.NODE_ENV !== 'production') {
        assertInPatch('currentElement', deletedNodes);
        assertNotInAttributes('currentElement');
    }
    return currentParent;
};
/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
var skip = function skip() {
    if (process.env.NODE_ENV !== 'production') {
        assertNoChildrenDeclaredYet('skip', currentNode);
        setInSkip(true);
    }
    currentNode = currentParent.lastChild;
};
var skipNode = nextNode;
var insertRawHtml = function insertRawHtml(html) {
    var children = createRaw(doc, html);
    var node = doc.createDocumentFragment(),
        lastChild = children[children.length - 1];
    while (children.length) {
        node.appendChild(children[0]);
    }
    currentParent.insertBefore(node, currentNode);
    currentNode = lastChild;
};
var raw = function raw(html) {
    nextNode();
    if (currentNode && matches(currentNode, '#raw', null)) {
        // patch node
        var data = getData(currentNode),
            remainingSiblingCount = data.childLength - 1;
        if (data.text !== html) {
            // if the text is not the same as before, we'll have some work to do
            insertRawHtml(html);
            // remove the remaining siblings of the old child
            if (data.childLength > 1) {
                while (remainingSiblingCount--) {
                    currentParent.removeChild(currentNode.nextSibling);
                }
            }
        } else if (remainingSiblingCount) {
            // still the same text so just jump over the remaining siblings
            while (remainingSiblingCount--) {
                currentNode = currentNode.nextSibling;
            }
        }
    } else {
        // insert raw html
        insertRawHtml(html);
    }
    return currentNode;
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var supportsPassiveListeners = false;
/* istanbul ignore next */
document.createElement('div').addEventListener('test', function () {}, {
    get passive() {
        supportsPassiveListeners = true;
        return false;
    }
});
var BUSY_FRAME_LENGTH = 3;
var IDLE_FRAME_LENGTH = 30;
var MESSAGE_KEY = '__melodyPrioritize_' + Math.random().toString(36).slice(2);
var mountedComponents = new WeakSet();
// by default we assume that we have to deal with a busy frame
// we can afford a little more time if we can detect that the
// browser is currently idle (=not scrolling)
var idealFrameLength = IDLE_FRAME_LENGTH;
var scrollListenerAttached = false;
var prioritizationRequested = false;
var prioritizationDisabled = false;
var NIL = { component: null, next: null };
var queue = NIL;
function isEmpty() {
    return queue === NIL;
}
function addToQueue(component$$1) {
    if (queue !== NIL) {
        // before we schedule this update, we should check a few things first
        for (var head = queue; head !== NIL; head = head.next) {
            // 1: Has this component already been scheduled for an update?
            if (head.component === component$$1) {
                // if so: we don't need
                return;
            }
            // 2: Is the parent of this component already scheduled for an update?
            if (getParent(component$$1) === head.component) {
                // if so: we don't need to do anything
                return;
            }
            // 3: Is the component a parent of a node within the queue?
            if (getParent(head.component) === component$$1) {
                // if so: replace the child with its parent
                head.component = component$$1;
                return;
            }
            if (head.next === NIL) {
                // insert the new node at the end of the list
                // we probably want to adjust that once we know how
                // to prioritize an update
                head.next = {
                    component: component$$1,
                    next: NIL
                };
                break;
            }
        }
    } else {
        queue = {
            component: component$$1,
            next: NIL
        };
    }
}
function drop(component$$1) {
    if (queue === NIL) {
        return;
    }
    if (queue.component === component$$1) {
        queue = queue.next;
    }
    var prev = queue;
    for (var head = queue.next; head && head !== NIL; head = head.next) {
        // is the component (or one of its parents) in the queue the removed component?
        var comp = head.component;
        do {
            if (comp === component$$1) {
                // if so: drop it
                prev.next = head.next;
                head = prev;
                break;
            }
            comp = getParent(comp);
        } while (comp);
        prev = head;
    }
}
function getPriority(node) {
    if (!node.component.el) {
        return -1;
    }
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var _a = node.component.el.getBoundingClientRect(),
        top = _a.top,
        bottom = _a.bottom;
    // is fully visible
    if (0 < top && bottom < windowHeight || top < 0 && windowHeight < bottom) {
        return 0;
    }
    // bottom of component is visible
    if (top < 0 && 0 < bottom && bottom < windowHeight) {
        return 1;
    }
    // top of component is visible
    if (0 < top && top < windowHeight) {
        return 2;
    }
    // not visible, not new
    return 3;
}
function prioritizeQueue(queue) {
    var buckets = new Array(4);
    for (var head = queue; head !== NIL; head = head.next) {
        var bucketIndex = getPriority(head);
        if (bucketIndex < 0) {
            continue;
        }
        var clone = { component: head.component, next: NIL };
        if (!buckets[bucketIndex]) {
            buckets[bucketIndex] = { first: clone, last: clone };
        } else {
            buckets[bucketIndex].last.next = clone;
            buckets[bucketIndex].last = clone;
        }
    }
    return buckets.reduceRight(concatWithKnownLast, NIL);
}
function concatWithKnownLast(queue, _a) {
    var first = _a.first,
        last = _a.last;
    var newList = concat(last, queue);
    return newList === last ? first : newList;
}
function concat(queue, nextQueue) {
    if (queue === NIL) {
        return nextQueue;
    }
    var p = queue;
    while (p.next !== NIL) {
        if (nextQueue === NIL) {
            return queue;
        }
        if (nextQueue.component === p.component) {
            nextQueue = nextQueue.next;
        } else {
            var prev = nextQueue;
            for (var head = nextQueue.next; head && head !== NIL; head = head.next) {
                if (head.component === p.component) {
                    prev.next = head.next;
                    break;
                }
                prev = head;
            }
        }
        p = p.next;
    }
    p.next = nextQueue;
    return queue;
}
function pop() {
    if (isEmpty()) {
        return null;
    }
    var head = queue;
    queue = queue.next;
    return head;
}
var isTicking = false;
function tick(callback) {
    if (isTicking) {
        return;
    }
    isTicking = true;
    requestAnimationFrame(function () {
        var startTime = Date.now();
        callback({
            didTimeout: false,
            timeRemaining: function timeRemaining() {
                return Math.max(0, idealFrameLength - (Date.now() - startTime));
            }
        });
    });
}
function drain() {
    var next = pop();
    var mounted = [];
    while (next) {
        if (next.component.el) {
            patchOuter(next.component.el, function (_) {
                return updateComponent(next.component);
            }, {});
            mounted.push(next.component);
        }
        next = pop();
    }
    return mounted;
}
function flush(deadline) {
    var prevQueue;
    var next = pop();
    var hasNew = false;
    var mounted = new Set();
    while (next) {
        prevQueue = queue;
        queue = NIL;
        if (next.component.el) {
            var isNew = next.component.el.localName === 'm-placeholder';
            patchOuter(next.component.el, function (_) {
                return updateComponent(next.component);
            }, {});
            mounted.add(next.component);
            if (isNew && queue !== NIL) {
                var drained = drain();
                for (var i = 0; i < drained.length; i++) {
                    mounted.add(drained[i]);
                }
                queue = NIL;
            }
        }
        if (queue !== NIL) {
            hasNew = true;
        }
        queue = concat(queue, prevQueue);
        next = 0 < deadline.timeRemaining() ? pop() : null;
    }
    // notify the freshly mounted components
    var notified = mounted.values();
    for (var current = notified.next(); !current.done; current = notified.next()) {
        var comp = current.value;
        if (comp.el) {
            mountedComponents.add(comp);
            comp.notify();
        }
    }
    isTicking = false;
    if (!isEmpty()) {
        if (!prioritizationDisabled && !prioritizationRequested && hasNew) {
            prioritizationRequested = true;
            window.postMessage(MESSAGE_KEY, '*');
        }
        tick(flush);
    }
}
function clear() {
    if (process.env.NODE_ENV !== 'test') {
        throw new Error('Clearing the queue is only allowed within a test environment.');
    }
    queue = NIL;
}
function performReordering(event) {
    if (event.source !== this || event.data !== MESSAGE_KEY) {
        return;
    }
    prioritizationRequested = false;
    var timeSpent = Date.now();
    queue = prioritizeQueue(queue);
    timeSpent = Date.now() - timeSpent;
    // Usually prioritization takes 0 - 4 ms on fast browsers. If browser is not
    // able to do that (like Edge/IE) in this period skip the process.
    if (timeSpent > 10) {
        prioritizationDisabled = true;
    }
}
window.addEventListener('message', performReordering, false);
function enqueueComponent$$1(component$$1) {
    /* istanbul ignore if */
    if (supportsPassiveListeners && !scrollListenerAttached) {
        attachScrollListener();
    }
    addToQueue(component$$1);
    /* istanbul ignore else */
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    tick(flush);
}
/* istanbul ignore next */
var detectIdleCallback = _debounce(function detectIdleCallback() {
    idealFrameLength = IDLE_FRAME_LENGTH;
}, 300);
/* istanbul ignore next */
function attachScrollListener() {
    scrollListenerAttached = true;
    // if we can detect when the browser is busy
    // then we can assume its idle by default
    idealFrameLength = IDLE_FRAME_LENGTH;
    document.addEventListener('scroll', function () {
        idealFrameLength = BUSY_FRAME_LENGTH;
        detectIdleCallback();
    }, { passive: true });
}

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var getNamespace = function getNamespace(name) {
    if (name.lastIndexOf('xml:', 0) === 0) {
        return 'http://www.w3.org/XML/1998/namespace';
    }
    if (name.lastIndexOf('xlink:', 0) === 0) {
        return 'http://www.w3.org/1999/xlink';
    }
};
/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
var applyAttr = function applyAttr(el, name, value) {
    if (value == null) {
        el.removeAttribute(name);
    } else {
        var attrNS = getNamespace(name);
        if (attrNS) {
            el.setAttributeNS(attrNS, name, value);
        } else {
            el.setAttribute(name, value);
        }
    }
};
/**
 * Updates a single attribute on an Element.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
function applyAttributeTyped(el, name, value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type === 'object' || type === 'function') {
        setProperty(el, name, value);
    } else {
        applyAttr(el, name /** @type {?(boolean|number|string)} */, value);
    }
}
function setProperty(el, name, value) {
    try {
        el[name] = value;
    } catch (e) {}
}
function eventProxy(e) {
    return this._listeners[e.type](e);
}
/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function updateAttribute(el, name, value) {
    var data = getData(el);
    var attrs = data.attrs;
    if (attrs[name] === value) {
        return;
    }
    if (name === 'style') {
        var old = attrs.style;
        if (!value || typeof value === 'string') {
            el.style.cssText = value || '';
        } else {
            if (typeof old === 'string') {
                el.style.cssText = '';
            } else {
                for (var i in old) {
                    if (!(i in value)) {
                        el.style[i] = '';
                    }
                }
            }
            for (var i in value) {
                if (i.indexOf('-') >= 0) {
                    el.style.setProperty(i, value[i]);
                } else {
                    el.style[i] = value[i];
                }
            }
        }
    } else if (name === 'ref') {
        var old = attrs.ref;
        if (old) {
            if (old.creator === value) {
                return;
            }
            old.disposer.unsubscribe();
        }
        if (!value) {
            attrs.ref = null;
            return;
        }
        attrs.ref = {
            creator: value,
            disposer: value(el)
        };
        if (process.env.NODE_ENV !== 'production') {
            if (!attrs.ref.disposer || typeof attrs.ref.disposer.unsubscribe !== 'function') {
                throw new Error("A ref handler is supposed to return a Subscription object which must have a \"unsubscribe\" method.");
            }
        }
        return;
    } else if (name[0] === 'o' && name[1] === 'n') {
        if (typeof value === 'function') {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!attrs[name]) el.addEventListener(name, eventProxy, useCapture);
            } else {
                el.removeEventListener(name, eventProxy, useCapture);
            }
            (el._listeners || (el._listeners = {}))[name] = value;
        } else {
            applyAttributeTyped(el, name, value);
        }
    } else if (name !== 'list' && name !== 'type' && !(el.ownerSVGElement || el.localName === 'svg') && name in el) {
        setProperty(el, name, value == null ? '' : value);
        if (value == null || value === false) {
            el.removeAttribute(name);
        }
    } else {
        applyAttributeTyped(el, name, value);
    }
    attrs[name] = value;
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;
/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {Array<*>}
 */
var argsBuilder = [];
/**
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen$1 = function elementOpen$$1(tag, key, statics, var_args) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('elementOpen');
        assertNotInSkip('elementOpen');
    }
    var node = elementOpen(tag, key);
    var data = getData(node);
    /*
    * Checks to see if one or more attributes have changed for a given Element.
    * When no attributes have changed, this is much faster than checking each
    * individual argument. When attributes have changed, the overhead of this is
    * minimal.
    */
    var attrsArr = data.attrsArr;
    var newAttrs = data.newAttrs;
    var isNew = !attrsArr.length;
    var i = ATTRIBUTES_OFFSET;
    var j = 0;
    if (!data.staticsApplied) {
        if (statics) {
            for (var i_1 = 0; i_1 < statics.length; i_1 += 2) {
                var name_1 = statics[i_1];
                var value = statics[i_1 + 1];
                if (newAttrs[name_1] === undefined) {
                    delete newAttrs[name_1];
                }
                updateAttribute(node, name_1, value);
            }
        }
        data.staticsApplied = true;
    }
    for (; i < arguments.length; i += 2, j += 2) {
        var attr_1 = arguments[i];
        if (isNew) {
            attrsArr[j] = attr_1;
            newAttrs[attr_1] = undefined;
        } else if (attrsArr[j] !== attr_1) {
            break;
        }
        var value = arguments[i + 1];
        if (isNew || attrsArr[j + 1] !== value) {
            attrsArr[j + 1] = value;
            updateAttribute(node, attr_1, value);
        }
    }
    if (i < arguments.length || j < attrsArr.length) {
        for (; i < arguments.length; i += 1, j += 1) {
            attrsArr[j] = arguments[i];
        }
        if (j < attrsArr.length) {
            attrsArr.length = j;
        }
        /**
        * Actually perform the attribute update.
        */
        for (i = 0; i < attrsArr.length; i += 2) {
            newAttrs[attrsArr[i]] = attrsArr[i + 1];
        }
        for (var attr_2 in newAttrs) {
            updateAttribute(node, attr_2, newAttrs[attr_2]);
            newAttrs[attr_2] = undefined;
        }
    }
    return node;
};
/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function elementOpenStart(tag, key, statics, var_args) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('elementOpenStart');
        setInAttributes(true);
    }
    argsBuilder[0] = tag;
    argsBuilder[1] = key;
    argsBuilder[2] = statics;
    var i = ATTRIBUTES_OFFSET;
    for (; i < arguments.length; i++) {
        argsBuilder[i] = arguments[i];
    }
};
/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function attr(name, value) {
    if (process.env.NODE_ENV !== 'production') {
        assertInAttributes('attr');
    }
    argsBuilder.push(name, value);
};
/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function elementOpenEnd() {
    if (process.env.NODE_ENV !== 'production') {
        assertInAttributes('elementOpenEnd');
        setInAttributes(false);
    }
    var node = elementOpen$1.apply(null, argsBuilder);
    argsBuilder.length = 0;
    return node;
};
/**
 * Closes an open virtual Element.
 *
 * @param {string} tag The element's tag.
 * @return {!Element} The corresponding Element.
 */
var elementClose$1 = function elementClose$$1(tag) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('elementClose');
    }
    var node = elementClose();
    if (process.env.NODE_ENV !== 'production') {
        assertCloseMatchesOpenTag(getData(node).nodeName, tag);
    }
    return node;
};
/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function elementVoid(tag, key, statics, var_args) {
    elementOpen$1.apply(null, arguments);
    return elementClose$1(tag);
};
var ref = function ref(id) {
    return function (element) {
        var comp = getCurrentComponent();
        if (process.env.NODE_ENV !== 'production') {
            if (!comp || !comp.refs) {
                throw new Error('ref() must be used within a component');
            }
        }
        comp.refs[id] = element;
        return {
            unsubscribe: function unsubscribe() {
                if (!comp) {
                    return;
                }
                comp = null;
            }
        };
    };
};
/**
 * Creates a new RawString that may contain HTML that should be rendered
 * as is and should not be escaped.
 *
 * @param {string} value The wrapped String.
 * @class
 */
var RawString = function RawString(value) {
    this.value = value;
};
/**
 * Return the wrapped value of the raw string.
 */
RawString.prototype.toString = function () {
    return this.value;
};
/**
 * Creates a new RawString that may contain HTML that should be rendered
 * as is and should not be escaped.
 *
 * @param {string} value The wrapped String.
 */
var rawString = function rawString(value) {
    if (value instanceof RawString) {
        return value;
    }
    if (process.env.NODE_ENV !== 'production') {
        if (typeof value !== 'string') {
            throw new Error('Tried to create a RawString from non-string value: ' + JSON.stringify(value));
        }
    }
    return new RawString(value);
};
/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean|RawString} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text$1 = function text$$1(value, var_args) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('text');
        assertNotInSkip('text');
    }
    if (value instanceof RawString) {
        if (process.env.NODE_ENV !== 'production') {
            if (arguments.length > 1) {
                throw new Error("Can't call filters on a raw string.");
            }
        }
        return raw$1(value.value);
    }
    var node = text();
    var data = getData(node);
    if (data.text !== value) {
        data.text /** @type {string} */ = value;
        var formatted = value;
        for (var i = 1; i < arguments.length; i += 1) {
            /*
            * Call the formatter function directly to prevent leaking arguments.
            * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
            */
            var fn = arguments[i];
            formatted = fn(formatted);
        }
        node.data = formatted;
    }
    return node;
};
var raw$1 = function raw$$1(value) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('text');
        assertNotInSkip('text');
    }
    return raw(value);
};

/**
 * Copyright 2015 The Incremental DOM Authors.
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.options = options;
exports.flush = flush;
exports.clearQueue = clear;
exports.getParent = getParent;
exports.link = link;
exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.currentElement = currentElement;
exports.skip = skip;
exports.skipNode = skipNode;
exports.mount = mount;
exports.component = component;
exports.enqueueComponent = enqueueComponent$$1;
exports.elementVoid = elementVoid;
exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen$1;
exports.elementClose = elementClose$1;
exports.text = text$1;
exports.attr = attr;
exports.raw = raw$1;
exports.rawString = rawString;
exports.ref = ref;
exports.getNodeData = getData;
exports.unmountComponent = unmountComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(9);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(4);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _melodyComponent = __webpack_require__(0);

var _home = __webpack_require__(17);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var documentRoot = document.getElementById('root');
(0, _melodyComponent.render)(documentRoot, _home2.default, {
    message: 'Welcome to Melody!'
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(3),
    now = __webpack_require__(8),
    toNumber = __webpack_require__(11);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(4);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(3),
    isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(5),
    getRawTag = __webpack_require__(14),
    objectToString = __webpack_require__(15);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _melodyComponent = __webpack_require__(0);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _melodyComponent.createComponent)(_index2.default);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _melodyIdom = __webpack_require__(2);

exports.default = {
  render: function render(options) {
    (0, _melodyIdom.text)("Could not load /Users/carson/Code/js/playground/melody-counter/src/home/index.twig");console.error("Could not load /Users/carson/Code/js/playground/melody-counter/src/home/index.twig", "path.state.warn is not a function");
  }
};

/***/ })
/******/ ]);