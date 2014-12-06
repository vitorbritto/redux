'use strict';

var INCLUDE_WARNING = 'execution continued',
    REQUIRE_ERROR   = 'execution stopped';


function import(path) {
    var link = new document.createElement('link');
    link.src = path;
    document.head.appendChild(link);
}

function fileExists(path) {
    var request = new XMLHttpRequest();
    request.open('HEAD', path, false);
    request.send();
    return request.status === '200';
}

function fileIsImported(path) {
    var links = document.head.getElementsByTagName('link');
    for (var i = 0, l = links.length; i < l; i++) {
        if(links[i].src === path) {
            return true;
        }
    }
    return false;
}

/**
 * Include
 *
 * @method : include
 * @param  : {String} path
 * @api    : public
 */

exports.include = function(path) {
    if (!fileExists(path)) {
        console.warn(path + ' ' + INCLUDE_WARNING);
    }
    import(path);
};

/**
 * Include once
 *
 * @method : includeOnce
 * @param  : {String} path
 * @api    : public
 */

exports.includeOnce = function(path) {
    if (!fileIsImported(path)) {
        include(path);
    }
};

/**
 * Require
 *
 * @method : include
 * @param  : {String} path
 * @api    : public
 */

exports.require = function(path) {
    if (!fileExists(path)) {
        throw path + " " + REQUIRE_ERROR;
    } else {
        import(path);
    }
};

/**
 * Require once
 *
 * @method : requireOnce
 * @param  : {String} path
 * @api    : public
 */

exports.requireOnce = function(path) {
    if (!fileIsImported(path)) {
        require(path);
    }
};


