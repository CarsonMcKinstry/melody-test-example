import { Wrapper } from 'melody-test-utils';
import { getNodeData } from 'melody-idom';

var HTML_ELEMENT_REGEXP = /HTML\w*?Element/;
var isPlaceholderElement = function isPlaceholderElement(val) {
    return val !== undefined && val !== null && (val.nodeType === 1 || val.nodeType === 3 || val.nodeType === 8) && val.constructor !== undefined && val.constructor.name !== undefined && HTML_ELEMENT_REGEXP.test(val.constructor.name) && val.localName === 'm-placeholder' && !!getNodeData(val);
};

var isWrapper = function isWrapper(val) {
    return val instanceof Wrapper || !!val && val['isMelodyWrapper'];
};

function print(val, serialize, indent) {
    if (isWrapper(val)) {
        if (val.elements.length > 1) {
            return serialize(val.elements);
        }
        return serialize(val.elements[0]);
    }
    var data = getNodeData(val);
    var inst = data.componentInstance;
    var propKeys = Object.keys(inst.props);
    var hasAttrs = propKeys.length > 0;
    if (!hasAttrs) {
        return '<' + inst.displayName + ' />';
    }
    var attrs = indent(propKeys.map(function (prop) {
        return prop + '=' + serialize(inst.props[prop]);
    }).join('\n'));
    return '<' + inst.displayName + '\n' + attrs + '\n/>';
}

function test(val) {
    return isPlaceholderElement(val) || isWrapper(val);
}

export { print, test };
