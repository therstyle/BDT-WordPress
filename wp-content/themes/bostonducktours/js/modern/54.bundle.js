(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/InvalidFields/styles.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".InvalidFields {\\n  padding: 15px 0;\\n  font-style: italic;\\n  color: grey; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/InvalidFields/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/TextLinks/styles.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/TextLinks/styles.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n.TextLinksBlock {\\n  margin-bottom: 74px; }\\n  @media (max-width: 767px) {\\n    .TextLinksBlock {\\n      margin-bottom: 26px; } }\\n  .TextLinksBlock .TextLinks {\\n    display: grid;\\n    grid-column-gap: 30px;\\n    grid-template-columns: repeat(3, 1fr); }\\n    @media (max-width: 767px) {\\n      .TextLinksBlock .TextLinks {\\n        grid-template-columns: repeat(1, 1fr);\\n        margin-top: 12px; } }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/components/blocks/TextLinks/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

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

/***/ "./src/components/blocks/TextLinks/index.js":
/*!**************************************************!*\
  !*** ./src/components/blocks/TextLinks/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! types */ \"./src/types.js\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Container */ \"./src/components/Container/index.js\");\n/* harmony import */ var components_TextLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TextLinks */ \"./src/components/TextLinks/index.js\");\n/* harmony import */ var components_InvalidFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/InvalidFields */ \"./src/components/InvalidFields/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/blocks/TextLinks/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar propTypes = {\n  links: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    link: types__WEBPACK_IMPORTED_MODULE_2__[\"Link\"]\n  }))])\n};\nvar defaultProps = {\n  links: []\n};\n\nvar TextLinks = function TextLinks(_ref) {\n  var links = _ref.links;\n\n  if (!links || Array.isArray(links) && !links.length) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_InvalidFields__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"TextLinksBlock\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextLinks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    links: links\n  })));\n};\n\nTextLinks.propTypes = propTypes;\nTextLinks.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextLinks);\n\n//# sourceURL=webpack:///./src/components/blocks/TextLinks/index.js?");

/***/ }),

/***/ "./src/components/blocks/TextLinks/styles.scss":
/*!*****************************************************!*\
  !*** ./src/components/blocks/TextLinks/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/TextLinks/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/blocks/TextLinks/styles.scss?");

/***/ })

}]);