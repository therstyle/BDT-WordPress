(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Separator/styles.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Separator/styles.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n.Separator {\\n  margin: 12px 0; }\\n  @media (max-width: 767px) {\\n    .Separator {\\n      margin: 5px 0 46px; } }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/components/blocks/Separator/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/blocks/Separator/index.js":
/*!**************************************************!*\
  !*** ./src/components/blocks/Separator/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_AnimatedWave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/AnimatedWave */ \"./src/components/AnimatedWave/index.js\");\n/* harmony import */ var services_byBreakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/byBreakpoint */ \"./src/services/byBreakpoint/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/blocks/Separator/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Separator\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AnimatedWave__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    width: Object(services_byBreakpoint__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      any: 1920,\n      small: 768\n    }),\n    height: Object(services_byBreakpoint__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      any: 127,\n      small: 50\n    }),\n    color: \"white\",\n    direction: \"UP\",\n    shadowColor: \"#dfdfdf\",\n    shadowSize: Object(services_byBreakpoint__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      any: 40,\n      small: 132\n    })\n  }));\n});\n\n//# sourceURL=webpack:///./src/components/blocks/Separator/index.js?");

/***/ }),

/***/ "./src/components/blocks/Separator/styles.scss":
/*!*****************************************************!*\
  !*** ./src/components/blocks/Separator/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Separator/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/blocks/Separator/styles.scss?");

/***/ })

}]);