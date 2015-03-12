'use strict';

/**
 * Add Class to Element
 *
 * @method : addClass
 * @param  :
 * @return :
 * @api    :
 */

exports.addClass = function(element, className) {
    if (element.classList) {
        element.classList.add(className);
    } else {
        element.className += ' ' + className;
    }

    return;
};

/**
 * Remove Class from Element
 *
 * @method : removeClass
 * @param  :
 * @return :
 * @api    :
 */

exports.removeClass = function(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else {
        element.className = element.className
            .replace(
                new RegExp('(^|\\b)' + className
                    .split(' ')
                    .join('|') + '(\\b|$)', 'gi'), ' '
                );
    }

    return;
};

/**
 * Toggle Class
 *
 * @method : toggleClass
 * @param  :
 * @return :
 * @api    :
 */

exports.toggleClass = function(element, className) {
    if (element.classList) {
        element.classList.toggle(className);
    } else {

        var classes = element.className.split(' '),
            existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }
        element.className = classes.join(' ');
    }

    return;
};

/**
 * If Element Has Class
 *
 * @method : hasClass
 * @param  :
 * @return : boolean
 * @api    :
 */

exports.hasClass = function(element, className) {
    if (element.classList) {
        element.classList.contains(className);
    } else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }

    return;
};
