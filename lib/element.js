'use strict';

/**
 * Return a NodeList for queried Element
 *
 * @method : queryall
 * @param  :
 * @return :
 * @api    :
 */

exports.queryall = function(element) {
    return document.querySelectorAll(element);
};

/**
 * Return the queried Element
 *
 * @method : query
 * @param  :
 * @return :
 * @api    :
 */

exports.query = function(element) {
    return document.querySelector(element);
};
