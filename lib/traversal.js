'use strict';

/**
 * Find
 *
 * @method : find
 * @param  :
 * @return :
 * @api    :
 */

exports.find = function() {

};

/**
 * Add
 *
 * @method : add
 * @param  :
 * @return :
 * @api    :
 */

exports.add = function() {

};

/**
 * Get Style
 *
 * @method : getStyle
 * @param  :
 * @return :
 * @api    :
 */

exports.remove = function(element) {
    return element.parentNode.removeChild(element);
};

/**
 * Get Style
 *
 * @method : getStyle
 * @param  :
 * @return :
 * @api    :
 */

exports.replace = function() {

};

/**
 * Siblings Node
 *
 * @method : siblings
 * @param  :
 * @return :
 * @api    :
 */

exports.siblings = function(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
};

/**
 * Parent Node
 *
 * @method : getStyle
 * @param  :
 * @return :
 * @api    :
 */

exports.parent = function() {

};

/**
 * Parents Node
 *
 * @method : parents
 * @param  :
 * @return :
 * @api    :
 */

exports.parents = function() {

};

/**
 * Closest Node
 *
 * @method : closest
 * @param  :
 * @return :
 * @api    :
 */

exports.closest = function() {

};

/**
 * Children Node
 *
 * @method : children
 * @param  :
 * @return :
 * @api    :
 */

exports.children = function(element) {
    return element.children;
};

/**
 * Outer Width
 *
 * @method : outerWidth
 * @param  :
 * @return :
 * @api    :
 */

exports.outerWidth = function() {

};

/**
 * Outer Height
 *
 * @method : outerHeight
 * @param  :
 * @return :
 * @api    :
 */

exports.outerHeight = function() {

};
