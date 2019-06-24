(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/AnimatedWave/styles.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/AnimatedWave/styles.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".AnimatedWave {\\n  display: block;\\n  width: 100%; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/AnimatedWave/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".InvalidFields {\\n  padding: 15px 0;\\n  font-style: italic;\\n  color: grey; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/InvalidFields/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/WavyHero/styles.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/WavyHero/styles.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n.WavyHero {\\n  height: 565px;\\n  position: relative;\\n  background-position: center center;\\n  background-size: cover; }\\n  @media (max-width: 767px) {\\n    .WavyHero {\\n      height: 319px;\\n      margin-bottom: 5px; } }\\n  .WavyHero h2 {\\n    width: 100%;\\n    position: absolute;\\n    z-index: 2;\\n    top: 182px;\\n    left: 0;\\n    margin: 0;\\n    font-size: 62px;\\n    font-weight: 700;\\n    line-height: 56px;\\n    text-align: center !important;\\n    color: #ffffff;\\n    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.59); }\\n    @media (max-width: 767px) {\\n      .WavyHero h2 {\\n        padding: 0 20px;\\n        top: 139px;\\n        font-size: 32px;\\n        line-height: 36px; } }\\n  .WavyHero .bottom-gradient {\\n    width: 100%;\\n    height: 316px;\\n    position: absolute;\\n    z-index: 1;\\n    bottom: 0;\\n    left: 0;\\n    opacity: .7; }\\n  .WavyHero .AnimatedWave {\\n    width: 100%;\\n    position: absolute;\\n    z-index: 2;\\n    bottom: -1px;\\n    left: 0; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/components/blocks/WavyHero/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/_variables.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/_variables.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/styles/_variables.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/AnimatedWave/index.js":
/*!**********************************************!*\
  !*** ./src/components/AnimatedWave/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_AnimatedWaveTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AnimatedWaveTracker */ \"./src/components/AnimatedWaveTracker/index.js\");\n/* harmony import */ var _services_drawWave_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/drawWave/index.ts */ \"./src/components/AnimatedWave/services/drawWave/index.ts\");\n/* harmony import */ var _services_drawWave_index_ts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_services_drawWave_index_ts__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/AnimatedWave/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar propTypes = {\n  width: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,\n  height: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,\n  direction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['UP', 'DOWN']).isRequired,\n  offset: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n  f: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n  shadowColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n  shadowSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string\n};\nvar defaultProps = {\n  offset: 0,\n  f: 1,\n  shadowColor: null,\n  shadowSize: 0,\n  className: ''\n};\nvar AnimatedWave = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {\n  var width = _ref.width,\n      height = _ref.height,\n      color = _ref.color,\n      direction = _ref.direction,\n      offset = _ref.offset,\n      f = _ref.f,\n      shadowColor = _ref.shadowColor,\n      shadowSize = _ref.shadowSize,\n      className = _ref.className;\n  var parameters = {\n    f: f,\n    color: color,\n    direction: direction,\n    shadowColor: shadowColor,\n    shadowSize: shadowSize\n  }; // The canvas will not animate without any ref, and we don't want\n  // to force the parent components to provide a ref any time they use\n  // AnimatedWave, even thought they don't use the ref. So this fallback\n  // ref will be used if one is not provided by the parent.\n\n  var fallbackRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(); // There is only one scroll listener at the top of the application\n  // that is used by all AnimatedWave instances.\n\n  var scrollOffset = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(components_AnimatedWaveTracker__WEBPACK_IMPORTED_MODULE_6__[\"Context\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var canvas = ref || fallbackRef;\n\n    if (!canvas || !canvas.current) {\n      return;\n    }\n\n    var ctx = canvas.current.getContext('2d'); // Draw and animate wave only when it is appearing in viewport\n\n    var _canvas$current$getBo = canvas.current.getBoundingClientRect(),\n        top = _canvas$current$getBo.top;\n\n    _services_drawWave_index_ts__WEBPACK_IMPORTED_MODULE_7___default()(ctx, _objectSpread({}, parameters, {\n      offset: scrollOffset + offset\n    }));\n\n    if (top + scrollOffset >= 0 && top - scrollOffset <= window.innerHeight) {\n      _services_drawWave_index_ts__WEBPACK_IMPORTED_MODULE_7___default()(ctx, _objectSpread({}, parameters, {\n        offset: scrollOffset + offset\n      }));\n    }\n  }, [scrollOffset]);\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"canvas\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('AnimatedWave', className),\n    ref: ref || fallbackRef,\n    width: width,\n    height: height + shadowSize * 2\n  });\n});\nAnimatedWave.propTypes = propTypes;\nAnimatedWave.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedWave);\n\n//# sourceURL=webpack:///./src/components/AnimatedWave/index.js?");

/***/ }),

/***/ "./src/components/AnimatedWave/services/drawWave/index.ts":
/*!****************************************************************!*\
  !*** ./src/components/AnimatedWave/services/drawWave/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Directions;\r\n(function (Directions) {\r\n    Directions[\"UP\"] = \"UP\";\r\n    Directions[\"DOWN\"] = \"DOWN\";\r\n})(Directions || (Directions = {}));\r\n/**\r\n * Draw a filled sinusoid in a given canvas context.\r\n *\r\n * By default the sinusoid spans entire canvas (horizontally) but that can\r\n * be modified with:\r\n *  - f - The frequency of the wave. 0.5 means that the wave will span half\r\n *        of the canvas (and then repeats, etc).\r\n *  - offset - How much should the wave be offset horizontally. The scale is:\r\n *             offset = 1 means the wave will be offset by 2PI.\r\n */\r\nexports[\"default\"] = (function (ctx, _a) {\r\n    var f = _a.f, _b = _a.offset, offset = _b === void 0 ? 0 : _b, color = _a.color, direction = _a.direction, _c = _a.shadowColor, shadowColor = _c === void 0 ? null : _c, _d = _a.shadowSize, shadowSize = _d === void 0 ? 0 : _d;\r\n    // Canvas resolution.\r\n    var width = ctx.canvas.width;\r\n    var height = ctx.canvas.height;\r\n    // Wave proportions.\r\n    var waveWidth = width;\r\n    var waveHeight = height - 2 * shadowSize;\r\n    // How many pixels 1 unit on y axis is.\r\n    // So the domain of the sine function will be [-scale, scale].\r\n    // Additionally we have to smaller it by 2 units to prevent\r\n    // cutting wave for some elements\r\n    var scale = Math.round(waveHeight / 2) - 2;\r\n    // y coordinate of the \"x axis\" of our coordinate system.\r\n    // This is essentially the middle of the canvas and the\r\n    // sine wave wraps round it.\r\n    var xAxis = Math.round(height / 2);\r\n    ctx.clearRect(0, 0, width, height);\r\n    // Shadow, if set.\r\n    if (shadowColor && shadowSize) {\r\n        ctx.shadowColor = shadowColor;\r\n        ctx.shadowBlur = shadowSize;\r\n    }\r\n    // Wave properties / colors.\r\n    ctx.fillStyle = color;\r\n    ctx.strokeStyle = color;\r\n    ctx.beginPath();\r\n    // Start with the middle left.\r\n    ctx.moveTo(0, xAxis);\r\n    // Draw a sinusoid spanning entire canvas.\r\n    var PI = 3.14;\r\n    for (var i = 1; i <= width; i++) {\r\n        ctx.lineTo(i, \r\n        // Sine (0, 2PI) spans the entire canvas, scaled by the frequency.\r\n        // So we need to figure out how much in this scale one horizontal pixel is.\r\n        // width * f = 2PI   and\r\n        // 1 = x\r\n        // so: width * f * x = 2PI\r\n        // therefore: x = 2PI / (width * f)\r\n        xAxis - (Math.sin((i * ((2 * PI) / (waveWidth * f))) + offset * 2 * PI) * scale));\r\n    }\r\n    // Now we need to fill the shape with the color.\r\n    // It can be specified via config whether to fill the space above\r\n    // or below the sinusoid.\r\n    var closingPointsY;\r\n    if (direction === Directions.UP) {\r\n        closingPointsY = 0;\r\n    }\r\n    else {\r\n        closingPointsY = waveHeight;\r\n    }\r\n    // Add points in either two top or bottom corners to close the path.\r\n    ctx.lineTo(waveWidth, closingPointsY);\r\n    ctx.lineTo(0, closingPointsY);\r\n    ctx.closePath();\r\n    ctx.stroke();\r\n    ctx.fill();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/AnimatedWave/services/drawWave/index.ts?");

/***/ }),

/***/ "./src/components/AnimatedWave/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/AnimatedWave/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/AnimatedWave/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/AnimatedWave/styles.scss?");

/***/ }),

/***/ "./src/components/InvalidFields/index.js":
/*!***********************************************!*\
  !*** ./src/components/InvalidFields/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var services_environmentContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/environmentContext */ \"./src/services/environmentContext/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/InvalidFields/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* global wp */\n\n\n\nvar __ = wp.i18n.__;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var environment = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(services_environmentContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // Render the information only on admin panel side of things.\n\n  if (environment === 'front') {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"InvalidFields\"\n  }, __('Please fill the ACF fields to display the block.', 'bostonducktours'));\n});\n\n//# sourceURL=webpack:///./src/components/InvalidFields/index.js?");

/***/ }),

/***/ "./src/components/InvalidFields/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/InvalidFields/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/InvalidFields/styles.scss?");

/***/ }),

/***/ "./src/components/blocks/WavyHero/index.js":
/*!*************************************************!*\
  !*** ./src/components/blocks/WavyHero/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! types */ \"./src/types.js\");\n/* harmony import */ var components_AnimatedWave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AnimatedWave */ \"./src/components/AnimatedWave/index.js\");\n/* harmony import */ var components_InvalidFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/InvalidFields */ \"./src/components/InvalidFields/index.js\");\n/* harmony import */ var services_byBreakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/byBreakpoint */ \"./src/services/byBreakpoint/index.js\");\n/* harmony import */ var services_getImageSrc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/getImageSrc */ \"./src/services/getImageSrc/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/blocks/WavyHero/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar propTypes = {\n  image: types__WEBPACK_IMPORTED_MODULE_2__[\"Image\"],\n  headline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  has_fade_gradients: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  bottom_gradient_color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  desktop_height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  mobile_height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n};\nvar defaultProps = {\n  image: null,\n  headline: '',\n  has_fade_gradients: false,\n  bottom_gradient_color: '',\n  desktop_height: 540,\n  mobile_height: 319\n};\n\nvar WavyHero = function WavyHero(_ref) {\n  var image = _ref.image,\n      headline = _ref.headline,\n      has_fade_gradients = _ref.has_fade_gradients,\n      bottom_gradient_color = _ref.bottom_gradient_color,\n      desktop_height = _ref.desktop_height,\n      mobile_height = _ref.mobile_height;\n\n  // We'll get falsy ID from backend if the image cannot be found.\n  if (!image || !image.ID) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_InvalidFields__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null);\n  }\n\n  var heroHeight = Object(services_byBreakpoint__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    any: desktop_height,\n    small: mobile_height\n  });\n  var heroStyle = {\n    backgroundImage: `url(\"${Object(services_getImageSrc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(image, 'full-width')}\")`,\n    height: `${heroHeight}px`\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"WavyHero\",\n    style: heroStyle\n  }, headline ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    dangerouslySetInnerHTML: {\n      __html: headline\n    }\n  }) : null, has_fade_gradients && bottom_gradient_color ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bottom-gradient\",\n    style: {\n      backgroundImage: `linear-gradient(180deg, rgba(17, 45, 115, 0) 0%, ${bottom_gradient_color} 100%)`\n    }\n  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AnimatedWave__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    color: \"white\",\n    direction: \"DOWN\",\n    height: Object(services_byBreakpoint__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n      any: 133,\n      small: 70\n    }),\n    width: Object(services_byBreakpoint__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n      any: 1920,\n      small: 768\n    }),\n    offset: 0.5\n  }));\n};\n\nWavyHero.propTypes = propTypes;\nWavyHero.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WavyHero);\n\n//# sourceURL=webpack:///./src/components/blocks/WavyHero/index.js?");

/***/ }),

/***/ "./src/components/blocks/WavyHero/styles.scss":
/*!****************************************************!*\
  !*** ./src/components/blocks/WavyHero/styles.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/WavyHero/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/blocks/WavyHero/styles.scss?");

/***/ }),

/***/ "./src/services/breakpoints/index.js":
/*!*******************************************!*\
  !*** ./src/services/breakpoints/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styles_variables_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/_variables.scss */ \"./src/styles/_variables.scss\");\n/* harmony import */ var styles_variables_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles_variables_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * This is a copy of breakpoints from _variables.scss.\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styles_variables_scss__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./src/services/breakpoints/index.js?");

/***/ }),

/***/ "./src/services/byBreakpoint/index.js":
/*!********************************************!*\
  !*** ./src/services/byBreakpoint/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var services_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/breakpoints */ \"./src/services/breakpoints/index.js\");\n\n\n\n/**\n * Choose a value based on breakpoint.\n *\n * \"spec\" is an object in the following format:\n * {\n *     small: 200,\n *     medium: 500,\n *     any: 1000,\n * }\n *\n * Properties in spec should be from smallest to largest breakpoint.\n * The order matters!\n *\n * The function will return value for the first breakpoint matched,\n * or the value of \"any\" if no breakpoints match.\n *\n * @param {object} spec\n * @returns {any}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (spec) {\n  var options = Object.keys(spec); // Go over all specified breakpoints, and return the value\n  // for the first one that matches.\n\n  for (var i = 0; i < options.length; i++) {\n    var breakpoint = options[i];\n    var breakpointWidth = services_breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"][breakpoint];\n\n    if (matchMedia(`(max-width: ${breakpointWidth}px)`).matches) {\n      return spec[breakpoint];\n    }\n  } // Return value of \"any\" if no breakpoint matched.\n\n\n  return spec.any || null;\n});\n\n//# sourceURL=webpack:///./src/services/byBreakpoint/index.js?");

/***/ }),

/***/ "./src/services/getImageSrc/index.js":
/*!*******************************************!*\
  !*** ./src/services/getImageSrc/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Retrieve the source (url) of the given size of the image.\n * This will fall back to 'full', if the given size does not\n * exist (this is default WP behavior).\n *\n * Image must be of type Image from types.\n *\n * @param {object} image\n * @param {string} size\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (image, size) {\n  var sizeToRetrieve = image.sources[size] ? size : 'full';\n  return image.sources[sizeToRetrieve].src;\n});\n\n//# sourceURL=webpack:///./src/services/getImageSrc/index.js?");

/***/ }),

/***/ "./src/styles/_variables.scss":
/*!************************************!*\
  !*** ./src/styles/_variables.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./_variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/_variables.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/_variables.scss?");

/***/ })

}]);