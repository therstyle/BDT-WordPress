(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

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

/***/ "./src/services/getImageSrc/index.js":
/*!*******************************************!*\
  !*** ./src/services/getImageSrc/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Retrieve the source (url) of the given size of the image.\n * This will fall back to 'full', if the given size does not\n * exist (this is default WP behavior).\n *\n * Image must be of type Image from types.\n *\n * @param {object} image\n * @param {string} size\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (image, size) {\n  var sizeToRetrieve = image.sources[size] ? size : 'full';\n  return image.sources[sizeToRetrieve].src;\n});\n\n//# sourceURL=webpack:///./src/services/getImageSrc/index.js?");

/***/ })

}]);