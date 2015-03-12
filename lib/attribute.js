'use strict';

/**
 * Get Attribute
 *
 * @method : getAttr
 * @param  :
 * @return :
 * @api    :
 */

exports.getAttr = function(element, attr) {
    return element.getAttribute(attr);
};

/**
 * Set Attribute
 *
 * @method : setAttr
 * @param  :
 * @return :
 * @api    :
 */

exports.setAttr = function(element, name, value) {
    return element.setAttribute(name, value);
};
