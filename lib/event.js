'use strict';

/**
 * Add Event Handler
 *
 * @method : on
 * @param  :
 * @return :
 * @api    :
 */

exports.on = function(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        type = 'on' + type;
        element.attachEvent(type, handler);
    } else {
        element['on' + type] = handler;
    }
};

/**
 * Remove Event Handler
 *
 * @method : off
 * @param  :
 * @return :
 * @api    :
 */

exports.off = function(element, type, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
        type = 'on' + type;
        element.detachEvent(type, handler);
    } else {
        element['on' + type] = null;
    }
};
