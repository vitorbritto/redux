'use strict';

/**
 * Hide Element
 *
 * @method : hide
 * @param  :
 * @return :
 * @api    :
 */

exports.hide = function(element) {
    element.style.display = 'none';
};

/**
 * Show Element
 *
 * @method : show
 * @param  :
 * @return :
 * @api    :
 */

exports.show = function(element) {
    element.style.display = '';
};
