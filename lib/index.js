// =====================================================
// PARTIALS
// =====================================================


// === CORE ============================================

// var common       = require('./core/common'),
//     wrapper      = require('./core/wrapper'),
//     debug        = require('./core/debug');

// === LIBS ============================================

var request         = require('./request'),
    _json           = request.json,
    _get            = request.get,
    _post           = request.post,

    element         = require('./element'),
    _queryAll       = elements.queryall,
    _query          = elements.query,

    traversal       = require('./traversal'),
    _find           = traversal.find,
    _add            = traversal.add,
    _remove         = traversal.remove,
    _replace        = traversal.replace,
    _siblings       = traversal.siblings,
    _parent         = traversal.parent,
    _parents        = traversal.parents,
    _closest        = traversal.closest,
    _children       = traversal.children,
    _oWidth         = traversal.outerWidth,
    _oHeight        = traversal.outerHeight,

    manipulation    = require('./manipulation'),
    _after          = manipulation.after,
    _before         = manipulation.before,
    _append         = manipulation.append,
    _prepend        = manipulation.prepend,
    _clone          = manipulation.clone,
    _each           = manipulation.each,
    _empty          = manipulation.empty,
    _macthes        = manipulation.macthes,

    position        = require('./position'),
    _width          = position.width,
    _height         = position.height,
    _offset         = position.offset,
    _position       = position.position,

    filters         = require('./filter'),
    _filter         = filters.filter,
    _contains       = filters.contains,
    _is             = filters.is,
    _first          = filters.first,
    _last           = filters.last,

    events          = require('./event'),
    _on             = request.on,
    _off            = request.off,

    attributes      = require('./attribute'),
    getAttr         = attributes.getAttr,
    getText         = attributes.getText,
    getHTML         = attributes.getHTML,
    setAttr         = attributes.setAttr,
    setText         = attributes.setText,
    setHTML         = attributes.setHTML,

    styles          = require('./style'),
    hide            = styles.hide,
    show            = styles.show,
    addClass        = styles.addClass,
    removeClass     = styles.removeClass,
    toggleClass     = styles.toggleClass,

    utils           = require('./utils'),
    forEach         = utils.forEach,
    bind            = utils.bind,
    extend          = utils.extend,
    indexOf         = utils.indexOf,
    isArray         = utils.isArray,
    map             = utils.map,
    now             = utils.now,
    parseHTML       = utils.parseHTML,
    parseJSON       = utils.parseJSON,
    trim            = utils.trim,
    type            = utils.type;
