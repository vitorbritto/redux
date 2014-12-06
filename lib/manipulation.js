'use strict';

/**
 * After Node
 *
 * @method : after
 * @param  :
 * @return :
 * @api    :
 */

exports.after = function(element, string) {
    return element.insertAdjacentHTML('afterend', string);
};

/**
 * Before Node
 *
 * @method : before
 * @param  :
 * @return :
 * @api    :
 */

exports.before = function(element, string) {
    return element.insertAdjacentHTML('beforebegin', string);
};

/**
 * Append Child Node
 *
 * @method : append
 * @param  :
 * @return :
 * @api    :
 */

exports.append = function(parent, element) {
    return parent.appendChild(element);
};

/**
 * Insert Before Parent Node
 *
 * @method : getStyle
 * @param  :
 * @return :
 * @api    :
 */

exports.prepend = function(parent, element) {
    return parent.insertBefore(element, parent.firstChild);
};

/**
 * Clone Node
 *
 * @method : getStyle
 * @param  :
 * @return :
 * @api    :
 */

exports.clone = function(element) {
    return element.cloneNode(true);
};

/**
 * Each Element
 *
 * @method : each
 * @param  :
 * @return :
 * @api    :
 */

exports.each = function(selector, callback) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.forEach.call(elements, callback);
};

/**
 * Empty Element
 *
 * @method : empty
 * @param  :
 * @return :
 * @api    :
 */

exports.empty = function(element) {
    return element.innerHTML = '';
};

/**
 * Matches Element
 *
 * @method : matches
 * @param  :
 * @return :
 * @api    :
 */

exports.matches = function() {

};

/**
 * Next Element
 *
 * @method : next
 * @param  :
 * @return :
 * @api    :
 */

exports.next = function(element) {
    return element.nextElementSibling;
};

/**
 * Previous Element
 *
 * @method : prev
 * @param  :
 * @return :
 * @api    :
 */

exports.prev = function(element) {
    return element.previousElementSibling;
};
