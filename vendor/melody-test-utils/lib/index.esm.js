import { component, patchOuter, patchInner, flush, clearQueue, getNodeData, setCurrentComponent } from 'melody-idom';
import { print, test } from 'melody-snapshot-serializer';
import prettyFormat from 'pretty-format';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var flatten = function flatten(nestedArray) {
    return nestedArray.reduce(function (acc, cur) {
        return acc.concat(cur);
    }, []);
};
var map = function map(transform) {
    return function (data) {
        return data.map(transform);
    };
};
var flatMap = function flatMap(transform) {
    return function (data) {
        return flatten(map(transform)(data));
    };
};
var maybeUnwrap = function maybeUnwrap(data) {
    return data.length === 1 ? data[0] : data;
};

var selectNodes = function selectNodes(predicate) {
    return function (el) {
        var walker = document.createTreeWalker(el);
        var matches = [];
        while (walker.nextNode()) {
            if (predicate(walker.currentNode)) {
                matches.push(walker.currentNode);
            }
        }
        return matches;
    };
};

var drainQueue = function drainQueue() {
    return flush({
        didTimeout: false,
        timeRemaining: function timeRemaining() {
            return 10;
        }
    });
};

var hasComponentOfType = function hasComponentOfType(Type) {
    return function (node) {
        var inst = getNodeData(node).componentInstance;
        return !!inst && inst instanceof Type;
    };
};

var assertNotEmpty = function assertNotEmpty(selector, component$$1) {
    if (component$$1.elements.length === 0) {
        throw new Error('Couldn\'t find component with selector: ' + selector);
    }
    return component$$1;
};
var exists = function exists(x) {
    return !!x;
};

var compose = function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
};

var getComponentAt = function getComponentAt(node) {
    return getNodeData(node).componentInstance;
};

var shallowRenderComponent = function shallowRenderComponent(comp) {
    setCurrentComponent(comp);
    patchOuter(comp.el, comp.render.bind(comp), {});
    clearQueue();
};

var dispatchTo = function dispatchTo(action) {
    return function (comp) {
        if (comp && comp.dispatch) {
            comp.dispatch(action);
            shallowRenderComponent(comp);
        }
    };
};

var getComponentProps = compose(function (comp) {
    return comp && comp.props;
}, getComponentAt);

var getProp = function getProp(key) {
    return compose(function (props) {
        return props[key];
    }, getComponentProps);
};

var getComponentState = compose(function (comp) {
    return comp && comp.getState && comp.getState();
}, getComponentAt);

var Wrapper = function () {
    function Wrapper(rootElement) {
        classCallCheck(this, Wrapper);

        this.elements = [].concat(rootElement);
    }

    Wrapper.prototype.empty = function empty() {
        return this.elements.length === 0;
    };

    Wrapper.prototype.tap = function tap(callback) {
        callback(this);
        return this;
    };

    Wrapper.prototype.map = function map(transform) {
        return this.lift(this.elements.map(transform));
    };

    Wrapper.prototype.reduce = function reduce(reducer, initial) {
        return this.elements.reduce(reducer, initial);
    };

    Wrapper.prototype.forEach = function forEach(callback) {
        this.elements.forEach(callback);
        return this;
    };

    Wrapper.prototype.filter = function filter(selector) {
        return this.filterWhere(function (x) {
            return x.is(selector);
        });
    };

    Wrapper.prototype.filterWhere = function filterWhere(predicate) {
        return this.lift(this.elements.map(this.lift).filter(predicate).reduce(function (acc, wrapper) {
            return acc.concat(wrapper);
        }, this.lift([])));
    };

    Wrapper.prototype.concat = function concat(other) {
        return this.lift(this.elements.concat(other.elements));
    };

    Wrapper.prototype.chain = function chain(transform) {
        return this.lift(flatMap(transform)(this.elements));
    };

    Wrapper.prototype.props = function props() {
        return maybeUnwrap(this.elements.map(getComponentProps).filter(exists));
    };

    Wrapper.prototype.prop = function prop(key) {
        return maybeUnwrap(this.elements.map(getProp(key)).filter(exists));
    };

    Wrapper.prototype.state = function state() {
        return maybeUnwrap(this.elements.map(getComponentState).filter(exists));
    };

    Wrapper.prototype.first = function first() {
        return this.at(0);
    };

    Wrapper.prototype.last = function last() {
        return this.at(this.length - 1);
    };

    Wrapper.prototype.at = function at(index) {
        return this.lift(this.elements[index]);
    };

    Wrapper.prototype.get = function get$$1(index) {
        return this.elements[index];
    };

    Wrapper.prototype.dispatch = function dispatch(action) {
        this.elements.forEach(compose(dispatchTo(action), getComponentAt));
        return this;
    };

    Wrapper.prototype.shallow = function shallow() {
        var forceRender = function forceRender(comp) {
            if (comp) {
                shallowRenderComponent(comp);
            }
        };
        this.elements.forEach(compose(forceRender, getComponentAt));
        return this;
    };

    Wrapper.prototype.render = function render() {
        var forceRender = function forceRender(comp) {
            if (comp) {
                setCurrentComponent(comp);
                patchOuter(comp.el, comp.render.bind(comp), {});
            }
        };
        this.elements.forEach(compose(forceRender, getComponentAt));
        drainQueue();
        return this;
    };

    Wrapper.prototype.setProps = function setProps(props) {
        var setProps = function setProps(comp) {
            if (comp && comp.apply) {
                comp.apply(props);
                shallowRenderComponent(comp);
            }
        };
        this.elements.forEach(compose(setProps, getComponentAt));
        return this;
    };

    Wrapper.prototype.find = function find(selector) {
        if (typeof selector === 'string') {
            return assertNotEmpty(selector, this.chain(function (el) {
                return Array.from(el.querySelectorAll(selector));
            }));
        } else if (typeof selector === 'function') {
            return assertNotEmpty(selector.prototype.displayName, this.chain(selectNodes(hasComponentOfType(selector))));
        } else {
            throw new Error('Your selector is invalid: ' + selector + ' \n Make sure you give CSS selector or Component as selector');
        }
    };

    Wrapper.prototype.findWhere = function findWhere(predicate) {
        return this.chain(selectNodes(compose(predicate, this.lift)));
    };

    Wrapper.prototype.is = function is(selector) {
        var test$$1 = typeof selector === 'string' ? function (el) {
            return el.matches(selector);
        } : hasComponentOfType(selector);
        return this.length === 0 ? false : this.reduce(function (acc, el) {
            return acc && test$$1(el);
        }, true);
    };

    Wrapper.prototype.hasClass = function hasClass(className) {
        return this.length === 0 ? false : this.reduce(function (acc, el) {
            return acc && el.classList.contains(className);
        }, true);
    };

    Wrapper.prototype.html = function html() {
        return this.reduce(function (acc, el) {
            return acc + el.outerHTML;
        }, '');
    };

    Wrapper.prototype.text = function text() {
        return this.reduce(function (acc, el) {
            return acc + el.textContent;
        }, '');
    };

    Wrapper.prototype.simulate = function simulate(type) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: true };

        var event = new Event(type, options);
        this.forEach(function (el) {
            return el.dispatchEvent(event);
        });
        drainQueue();
        return this;
    };

    Wrapper.prototype.debug = function debug() {
        return prettyFormat(this, {
            escapeRegex: true,
            plugins: [{ test: test, print: print }, prettyFormat.plugins.DOMElement],
            printFunctionName: false
        });
    };

    // abstract lift(elements): Wrapper;


    createClass(Wrapper, [{
        key: 'isMelodyWrapper',
        get: function get$$1() {
            return true;
        }
    }, {
        key: 'length',
        get: function get$$1() {
            return this.elements.length;
        }
    }]);
    return Wrapper;
}();

var FullWrapper = function (_Wrapper) {
    inherits(FullWrapper, _Wrapper);

    function FullWrapper(rootElement) {
        classCallCheck(this, FullWrapper);
        return possibleConstructorReturn(this, _Wrapper.call(this, rootElement));
    }

    FullWrapper.prototype.setProps = function setProps(props) {
        var setProps = function setProps(comp) {
            if (comp && comp.apply) {
                comp.apply(props);
                patchOuter(comp.el, comp.render.bind(comp), {});
            }
        };
        this.elements.forEach(compose(setProps, getComponentAt));
        drainQueue();
        return this;
    };

    FullWrapper.prototype.lift = function lift(rootElement) {
        return new FullWrapper(rootElement);
    };

    FullWrapper.empty = function empty() {
        return new FullWrapper([]);
    };

    return FullWrapper;
}(Wrapper);

var ShallowWrapper = function (_Wrapper2) {
    inherits(ShallowWrapper, _Wrapper2);

    function ShallowWrapper(rootElement) {
        classCallCheck(this, ShallowWrapper);
        return possibleConstructorReturn(this, _Wrapper2.call(this, rootElement));
    }

    ShallowWrapper.prototype.setProps = function setProps(props) {
        var setProps = function setProps(comp) {
            if (comp && comp.apply) {
                comp.apply(props);
                shallowRenderComponent(comp);
            }
        };
        this.elements.forEach(compose(setProps, getComponentAt));
        return this;
    };

    ShallowWrapper.prototype.lift = function lift(rootElement) {
        return new ShallowWrapper(rootElement);
    };

    ShallowWrapper.empty = function empty() {
        return new ShallowWrapper([]);
    };

    return ShallowWrapper;
}(Wrapper);

function render(Component) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var el = document.createElement('div');
    patchInner(el, function () {
        return component(Component, 'key', props);
    }, {});
    drainQueue();
    return new FullWrapper(el.firstChild);
}

function shallow(Component) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var el = document.createElement('div');
    getNodeData(el).key = Symbol();
    patchInner(el, function () {
        return component(Component, 'key', props);
    }, {});
    var comp = getComponentAt(el.firstElementChild);
    shallowRenderComponent(comp);

    comp.el = el.firstElementChild;
    getNodeData(comp.el).componentInstance = comp;

    return new ShallowWrapper(comp.el);
}

export { getComponentAt, Wrapper, FullWrapper, ShallowWrapper, render, shallow };
