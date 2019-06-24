(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Container/styles.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Container/styles.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n.Container {\\n  width: 100%;\\n  max-width: 1150px;\\n  padding: 0 20px;\\n  margin: 0 auto; }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/components/Container/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Container/styles_IE.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Container/styles_IE.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n.internet-explorer .Container {\\n  max-width: calc(1150px + 30px); }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/components/Container/styles_IE.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".InvalidFields {\\n  padding: 15px 0;\\n  font-style: italic;\\n  color: grey; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/InvalidFields/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! types */ \"./src/types.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/Container/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_IE_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles_IE.scss */ \"./src/components/Container/styles_IE.scss\");\n/* harmony import */ var _styles_IE_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_IE_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar propTypes = _objectSpread({}, types__WEBPACK_IMPORTED_MODULE_7__[\"HtmlProps\"], {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired\n});\n\nvar Container = function Container(_ref) {\n  var children = _ref.children,\n      className = _ref.className,\n      rest = _objectWithoutProperties(_ref, [\"children\", \"className\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", _extends({\n    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('Container', className)\n  }, rest), children);\n};\n\nContainer.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack:///./src/components/Container/index.js?");

/***/ }),

/***/ "./src/components/Container/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/Container/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Container/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Container/styles.scss?");

/***/ }),

/***/ "./src/components/Container/styles_IE.scss":
/*!*************************************************!*\
  !*** ./src/components/Container/styles_IE.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./styles_IE.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Container/styles_IE.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Container/styles_IE.scss?");

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

/***/ "./src/components/blocks/Quote/index.js":
/*!**********************************************!*\
  !*** ./src/components/blocks/Quote/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Container */ \"./src/components/Container/index.js\");\n/* harmony import */ var components_Grid_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/Row */ \"./src/components/Grid/Row/index.js\");\n/* harmony import */ var components_Grid_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/Cell */ \"./src/components/Grid/Cell/index.js\");\n/* harmony import */ var components_InvalidFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/InvalidFields */ \"./src/components/InvalidFields/index.js\");\n\n\n\n\n\n\nvar propTypes = {\n  innerHTML: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nvar defaultProps = {\n  innerHTML: ''\n};\n\nvar Quote = function Quote(_ref) {\n  var innerHTML = _ref.innerHTML;\n\n  if (!innerHTML) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_InvalidFields__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Quote\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_Cell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    width: 10,\n    widthSmall: 12,\n    offset: 1,\n    offsetSmall: 0\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: innerHTML\n    }\n  })))));\n};\n\nQuote.propTypes = propTypes;\nQuote.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\n\n//# sourceURL=webpack:///./src/components/blocks/Quote/index.js?");

/***/ })

}]);