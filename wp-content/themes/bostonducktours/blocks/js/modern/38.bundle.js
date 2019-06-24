(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/js-video-url-parser/lib/base.js":
/*!******************************************************!*\
  !*** ./node_modules/js-video-url-parser/lib/base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const UrlParser = __webpack_require__(/*! ./urlParser */ \"./node_modules/js-video-url-parser/lib/urlParser.js\");\nconst parser = new UrlParser();\nmodule.exports = parser;\n\n\n//# sourceURL=webpack:///./node_modules/js-video-url-parser/lib/base.js?");

/***/ }),

/***/ "./node_modules/js-video-url-parser/lib/provider/youtube.js":
/*!******************************************************************!*\
  !*** ./node_modules/js-video-url-parser/lib/provider/youtube.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  combineParams,\n  getTime,\n} = __webpack_require__(/*! ../util */ \"./node_modules/js-video-url-parser/lib/util.js\");\n\nfunction YouTube() {\n  this.provider = 'youtube';\n  this.alternatives = ['youtu', 'ytimg'];\n  this.defaultFormat = 'long';\n  this.formats = {\n    short: this.createShortUrl,\n    long: this.createLongUrl,\n    embed: this.createEmbedUrl,\n    shortImage: this.createShortImageUrl,\n    longImage: this.createLongImageUrl,\n  };\n  this.imageQualities = {\n    '0': '0',\n    '1': '1',\n    '2': '2',\n    '3': '3',\n    DEFAULT: 'default',\n    HQDEFAULT: 'hqdefault',\n    SDDEFAULT: 'sddefault',\n    MQDEFAULT: 'mqdefault',\n    MAXRESDEFAULT: 'maxresdefault',\n  };\n  this.defaultImageQuality = this.imageQualities.HQDEFAULT;\n  this.mediaTypes = {\n    VIDEO: 'video',\n    PLAYLIST: 'playlist',\n    SHARE: 'share',\n    CHANNEL: 'channel',\n  };\n}\n\nmodule.exports = YouTube;\n\nYouTube.prototype.parseVideoUrl = function(url) {\n  var match = url.match(\n    /(?:(?:v|vi|be|videos|embed)\\/(?!videoseries)|(?:v|ci)=)([\\w-]{11})/i\n  );\n  return match ? match[1] : undefined;\n};\n\nYouTube.prototype.parseChannelUrl = function(url) {\n  // Match an opaque channel ID\n  var match = url.match(/\\/channel\\/([\\w-]+)/);\n  if (match) {\n    return { id: match[1], mediaType: this.mediaTypes.CHANNEL };\n  }\n\n  // Match a vanity channel name or a user name. User urls are deprecated and\n  // currently redirect to the channel of that same name.\n  match = url.match(/\\/(?:c|user)\\/([\\w-]+)/);\n  if (match) {\n    return { name: match[1], mediaType: this.mediaTypes.CHANNEL };\n  }\n};\n\nYouTube.prototype.parseParameters = function(params, result) {\n  if (params.start || params.t) {\n    params.start = getTime(params.start || params.t);\n    delete params.t;\n  }\n  if (params.v === result.id) {\n    delete params.v;\n  }\n  if (params.list === result.id) {\n    delete params.list;\n  }\n\n  return params;\n};\n\nYouTube.prototype.parseMediaType = function(result) {\n  if (result.params.list) {\n    result.list = result.params.list;\n    delete result.params.list;\n  }\n  if (result.id && !result.params.ci) {\n    result.mediaType = this.mediaTypes.VIDEO;\n  } else if (result.list) {\n    delete result.id;\n    result.mediaType = this.mediaTypes.PLAYLIST;\n  } else if (result.params.ci) {\n    delete result.params.ci;\n    result.mediaType = this.mediaTypes.SHARE;\n  } else {\n    return undefined;\n  }\n  return result;\n};\n\nYouTube.prototype.parse = function(url, params) {\n  var channelResult = this.parseChannelUrl(url);\n  if (channelResult) {\n    return channelResult;\n  } else {\n    var result = {\n      params: params,\n      id: this.parseVideoUrl(url),\n    };\n    result.params = this.parseParameters(params, result);\n    result = this.parseMediaType(result);\n    return result;\n  }\n};\n\nYouTube.prototype.createShortUrl = function(vi, params) {\n  var url = 'https://youtu.be/' + vi.id;\n  if (params.start) {\n    url += '#t=' + params.start;\n  }\n  return url;\n};\n\nYouTube.prototype.createLongUrl = function(vi, params) {\n  var url = '';\n  var startTime = params.start;\n  delete params.start;\n\n  if (vi.mediaType === this.mediaTypes.CHANNEL) {\n    if (vi.id) {\n      url += 'https://www.youtube.com/channel/' + vi.id;\n    } else if (vi.name) {\n      url += 'https://www.youtube.com/c/' + vi.name;\n    }\n  }\n  if (vi.mediaType === this.mediaTypes.PLAYLIST) {\n    params.feature = 'share';\n    url += 'https://www.youtube.com/playlist';\n  }\n  if (vi.mediaType === this.mediaTypes.VIDEO) {\n    params.v = vi.id;\n    url += 'https://www.youtube.com/watch';\n  }\n  if (vi.mediaType === this.mediaTypes.SHARE) {\n    params.ci = vi.id;\n    url += 'https://www.youtube.com/shared';\n  }\n\n  if (vi.list) {\n    params.list = vi.list;\n  }\n\n  url += combineParams({\n    params: params,\n  });\n\n  if (vi.mediaType !== this.mediaTypes.PLAYLIST && startTime) {\n    url += '#t=' + startTime;\n  }\n  return url;\n};\n\nYouTube.prototype.createEmbedUrl = function(vi, params) {\n  var url = 'https://www.youtube.com/embed';\n\n  if (vi.mediaType === this.mediaTypes.PLAYLIST) {\n    params.listType = 'playlist';\n  } else {\n    url += '/' + vi.id;\n    //loop hack\n    if (params.loop === '1') {\n      params.playlist = vi.id;\n    }\n  }\n\n  if (vi.list) {\n    params.list = vi.list;\n  }\n\n  url += combineParams({\n    params: params,\n  });\n\n  return url;\n};\n\nYouTube.prototype.createImageUrl = function(baseUrl, vi, params) {\n  var url = baseUrl + vi.id + '/';\n  var quality = params.imageQuality || this.defaultImageQuality;\n\n  return url + quality + '.jpg';\n};\n\nYouTube.prototype.createShortImageUrl = function(vi, params) {\n  return this.createImageUrl('https://i.ytimg.com/vi/', vi, params);\n};\n\nYouTube.prototype.createLongImageUrl = function(vi, params) {\n  return this.createImageUrl('https://img.youtube.com/vi/', vi, params);\n};\n\n__webpack_require__(/*! ../base */ \"./node_modules/js-video-url-parser/lib/base.js\").bind(new YouTube());\n\n\n//# sourceURL=webpack:///./node_modules/js-video-url-parser/lib/provider/youtube.js?");

/***/ }),

/***/ "./node_modules/js-video-url-parser/lib/urlParser.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-video-url-parser/lib/urlParser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  getQueryParams,\n} = __webpack_require__(/*! ./util */ \"./node_modules/js-video-url-parser/lib/util.js\");\n\nfunction UrlParser() {\n  for (const key of [\n    'parseProvider',\n    'parse',\n    'bind',\n    'create',\n  ]) {\n    this[key] = this[key].bind(this);\n  }\n  this.plugins = {};\n}\n\nmodule.exports = UrlParser;\n\nUrlParser.prototype.parseProvider = function(url) {\n  var match = url.match(\n    /(?:(?:https?:)?\\/\\/)?(?:[^.]+\\.)?(\\w+)\\./i\n  );\n  return match ? match[1] : undefined;\n};\n\nUrlParser.prototype.parse = function(url) {\n  if (typeof url === 'undefined') {\n    return undefined;\n  }\n  var provider = this.parseProvider(url);\n  var result;\n  var plugin = this.plugins[provider];\n  if (!provider || !plugin || !plugin.parse) {\n    return undefined;\n  }\n  result = plugin.parse.call(\n    plugin, url, getQueryParams(url)\n  );\n  if (result) {\n    result = removeEmptyParameters(result);\n    result.provider = plugin.provider;\n  }\n  return result;\n};\n\nUrlParser.prototype.bind = function(plugin) {\n  this.plugins[plugin.provider] = plugin;\n  if (plugin.alternatives) {\n    for (var i = 0; i < plugin.alternatives.length; i += 1) {\n      this.plugins[plugin.alternatives[i]] = plugin;\n    }\n  }\n};\n\nUrlParser.prototype.create = function(op) {\n  var vi = op.videoInfo;\n  var params = op.params;\n  var plugin = this.plugins[vi.provider];\n\n  params = (params === 'internal') ? vi.params : params || {};\n\n  if (plugin) {\n    op.format = op.format || plugin.defaultFormat;\n    if (plugin.formats.hasOwnProperty(op.format)) {\n      return plugin.formats[op.format].apply(plugin, [vi, Object.assign({}, params)]);\n    }\n  }\n  return undefined;\n};\n\nfunction removeEmptyParameters(result) {\n  if (result.params && Object.keys(result.params).length === 0) {\n    delete result.params;\n  }\n  return result;\n}\n\n//# sourceURL=webpack:///./node_modules/js-video-url-parser/lib/urlParser.js?");

/***/ }),

/***/ "./node_modules/js-video-url-parser/lib/util.js":
/*!******************************************************!*\
  !*** ./node_modules/js-video-url-parser/lib/util.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.getQueryParams = function getQueryParams(qs) {\n  if (typeof qs !== 'string') {\n    return {};\n  }\n  qs = qs.split('+').join(' ');\n\n  var params = {};\n  var match = qs.match(\n    /(?:[?](?:[^=]+)=(?:[^&#]*)(?:[&](?:[^=]+)=(?:[^&#]*))*(?:[#].*)?)|(?:[#].*)/\n  );\n  var split;\n\n  if (match === null) {\n    return {};\n  }\n\n  split = match[0].substr(1).split(/[&#=]/);\n\n  for (var i = 0; i < split.length; i += 2) {\n    params[decodeURIComponent(split[i])] =\n      decodeURIComponent(split[i + 1] || '');\n  }\n\n  return params;\n};\n\nexports.combineParams = function combineParams(op) {\n  if (typeof op !== 'object') {\n    return '';\n  }\n  op.params = op.params || {};\n  var combined = '',\n    i = 0,\n    keys = Object.keys(op.params);\n\n  if (keys.length === 0) {\n    return '';\n  }\n\n  //always have parameters in the same order\n  keys.sort();\n\n  if (!op.hasParams) {\n    combined += '?' + keys[0] + '=' + op.params[keys[0]];\n    i += 1;\n  }\n\n  for (; i < keys.length; i += 1) {\n    combined += '&' + keys[i] + '=' + op.params[keys[i]];\n  }\n  return combined;\n};\n\n//parses strings like 1h30m20s to seconds\nfunction getLetterTime(timeString) {\n  var totalSeconds = 0;\n  var timeValues = {\n    's': 1,\n    'm': 1 * 60,\n    'h': 1 * 60 * 60,\n    'd': 1 * 60 * 60 * 24,\n    'w': 1 * 60 * 60 * 24 * 7,\n  };\n  var timePairs;\n\n  //expand to \"1 h 30 m 20 s\" and split\n  timeString = timeString.replace(/([smhdw])/g, ' $1 ').trim();\n  timePairs = timeString.split(' ');\n\n  for (var i = 0; i < timePairs.length; i += 2) {\n    totalSeconds += parseInt(timePairs[i], 10) *\n      timeValues[timePairs[i + 1] || 's'];\n  }\n  return totalSeconds;\n}\n\n//parses strings like 1:30:20 to seconds\nfunction getColonTime(timeString) {\n  var totalSeconds = 0;\n  var timeValues = [\n    1,\n    1 * 60,\n    1 * 60 * 60,\n    1 * 60 * 60 * 24,\n    1 * 60 * 60 * 24 * 7,\n  ];\n  var timePairs = timeString.split(':');\n  for (var i = 0; i < timePairs.length; i++) {\n    totalSeconds += parseInt(timePairs[i], 10) * timeValues[timePairs.length - i - 1];\n  }\n  return totalSeconds;\n}\n\nexports.getTime = function getTime(timeString) {\n  if (typeof timeString === 'undefined') {\n    return 0;\n  }\n  if (timeString.match(/^(\\d+[smhdw]?)+$/)) {\n    return getLetterTime(timeString);\n  }\n  if (timeString.match(/^(\\d+:?)+$/)) {\n    return getColonTime(timeString);\n  }\n  return 0;\n};\n\n//# sourceURL=webpack:///./node_modules/js-video-url-parser/lib/util.js?");

/***/ })

}]);