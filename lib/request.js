'use strict';

/**
 * Request JSON Object
 *
 * @method : json
 * @param  :
 * @return :
 * @api    :
 */

exports.json = function(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function() {
        if (req.status >= 200 && req.status < 400){
            var data = JSON.parse(req.responseText);
            console.log('Success!');
        } else {
            console.log('Server Error! Timeout!');
        }
    };

    req.onerror = function() {
        console.log('Error on connection!');
    };

    req.send();
};

/**
 * GET Request
 *
 * @method : get
 * @param  :
 * @return :
 * @api    :
 */

exports.get = function(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function() {
        if (req.status >= 200 && req.status < 400){
            var res = req.responseText;
            console.log('Success!');
        } else {
            console.log('Server Error! Timeout!');
        }
    };

    req.onerror = function() {
        console.log('Error on connection!');
    };

    req.send();
};

/**
 * POST Request
 *
 * @method : post
 * @param  :
 * @return :
 * @api    :
 */

exports.post = function(url) {
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.send(data);
};
