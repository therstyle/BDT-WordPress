(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Column/styles.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Column/styles.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Column .Cell {\\n  grid-column-end: span 12;\\n  grid-column-start: auto; }\\n\\n.Column .wp-block-column {\\n  display: block;\\n  flex: none;\\n  margin: 0; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/blocks/Column/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Content/styles.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Content/styles.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* ==========================================================================\\n   #COLORS\\n========================================================================== */\\n/* ==========================================================================\\n   #GRADIENTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #TIMINGS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #BREAKPOINTS\\n========================================================================== */\\n\\n/* ==========================================================================\\n   #KEYFRAMES\\n========================================================================== */\\n@keyframes icon-pulse {\\n  50% {\\n    height: 30px; } }\\n\\n@keyframes toRightFromLeft {\\n  49% {\\n    transform: translate(100%, -50%); }\\n  50% {\\n    opacity: 0;\\n    transform: translate(-100%, -50%); }\\n  51% {\\n    opacity: 1; } }\\n\\n/* ==========================================================================\\n   #BOX MODEL\\n========================================================================== */\\n.Content ul,\\n.Content ol {\\n  padding: 0;\\n  position: relative;\\n  margin: 15px 0;\\n  list-style-type: none; }\\n  @media (max-width: 767px) {\\n    .Content ul,\\n    .Content ol {\\n      margin: 10.6px 0; } }\\n\\n.Content ul li {\\n  padding-left: 36px;\\n  position: relative;\\n  margin-top: 13px; }\\n  .Content ul li:first-child {\\n    margin-top: 0; }\\n  .Content ul li:before {\\n    content: '';\\n    width: 6px;\\n    height: 6px;\\n    position: absolute;\\n    top: 9px;\\n    left: 11px;\\n    border-radius: 50%;\\n    background-color: #224cb3; }\\n    @media (max-width: 767px) {\\n      .Content ul li:before {\\n        width: 4px;\\n        height: 4px; } }\\n\\n.Content ul li li:before {\\n  height: 4px;\\n  top: 12px;\\n  border-radius: 0; }\\n  @media (max-width: 767px) {\\n    .Content ul li li:before {\\n      height: 3px;\\n      top: 10px; } }\\n\\n.Content ol {\\n  counter-reset: ol; }\\n  .Content ol li {\\n    counter-increment: ol;\\n    padding-left: 36px; }\\n    .Content ol li:before {\\n      content: counter(ol) \\\".\\\";\\n      position: absolute;\\n      top: 0;\\n      left: 11px;\\n      color: #224cb3; }\\n\\n.Content li[style*=\\\"list-style-type: none\\\"]:before {\\n  content: none; }\\n\\n@media (max-width: 767px) {\\n  .Content h1,\\n  .Content h2,\\n  .Content h3,\\n  .Content h4,\\n  .Content h5,\\n  .Content h6,\\n  .Content p {\\n    text-align: left !important; } }\\n\\n@media (max-width: 767px) {\\n  .ImageSlider + .Content h1,\\n  .ImageSlider + .Content h2,\\n  .ImageSlider + .Content h3,\\n  .ImageSlider + .Content h4,\\n  .ImageSlider + .Content h5,\\n  .ImageSlider + .Content h6,\\n  .ImageSlider + .Content p {\\n    text-align: center !important; } }\\n\\n@media (max-width: 767px) {\\n  .ImageSlider + .Content h2 {\\n    margin: 7px 0 0;\\n    font-size: 32px; } }\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"colorBlueDeep\": \"#112d73\",\n\t\"colorBlueLink\": \"#244cb3\",\n\t\"colorYellowLight\": \"#ffe366\",\n\t\"colorYellow\": \"#ffde4c\",\n\t\"colorYellowGradient\": \"linear-gradient(180deg, #ffe366 0%, #ffde4c 100%)\",\n\t\"transition\": \"200\",\n\t\"transitionFast\": \"100\",\n\t\"transitionSlow\": \"400\",\n\t\"extra_large\": \"1439\",\n\t\"large\": \"1150\",\n\t\"medium\": \"991\",\n\t\"small\": \"767\",\n\t\"extra_small\": \"575\"\n};\n\n//# sourceURL=webpack:///./src/components/blocks/Content/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/blocks/Column/index.js":
/*!***********************************************!*\
  !*** ./src/components/blocks/Column/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_GutenbergBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/GutenbergBlocks */ \"./src/components/GutenbergBlocks/index.js\");\n/* harmony import */ var components_blocks_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/blocks/Content */ \"./src/components/blocks/Content/index.js\");\n/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! types */ \"./src/types.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/blocks/Column/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar propTypes = {\n  innerBlocks: types__WEBPACK_IMPORTED_MODULE_4__[\"GutenbergBlocks\"],\n  innerHTML: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nvar defaultProps = {\n  innerBlocks: [],\n  innerHTML: ''\n};\n\nvar Column = function Column(_ref) {\n  var innerBlocks = _ref.innerBlocks,\n      innerHTML = _ref.innerHTML;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Column\"\n  }, innerHTML ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_blocks_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    innerHTML: innerHTML\n  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_GutenbergBlocks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    blocks: innerBlocks\n  }));\n};\n\nColumn.propTypes = propTypes;\nColumn.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\n\n//# sourceURL=webpack:///./src/components/blocks/Column/index.js?");

/***/ }),

/***/ "./src/components/blocks/Column/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/blocks/Column/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Column/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/blocks/Column/styles.scss?");

/***/ }),

/***/ "./src/components/blocks/Content/index.js":
/*!************************************************!*\
  !*** ./src/components/blocks/Content/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! types */ \"./src/types.js\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Container */ \"./src/components/Container/index.js\");\n/* harmony import */ var components_Grid_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/Row */ \"./src/components/Grid/Row/index.js\");\n/* harmony import */ var components_Grid_Cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/Cell */ \"./src/components/Grid/Cell/index.js\");\n/* harmony import */ var components_HtmlToComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/HtmlToComponent */ \"./src/components/HtmlToComponent/index.js\");\n/* harmony import */ var services_stripTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/stripTags */ \"./src/services/stripTags/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/blocks/Content/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n/**\n * Renders anything that might be considered \"content\" in WP,\n * so any blocks that have paragraphs, headings, etc.\n */\n\nvar Content = function Content(_ref) {\n  var innerHTML = _ref.innerHTML;\n\n  if (!Object(services_stripTags__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(innerHTML).trim()) {\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_Cell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    width: 8,\n    widthMedium: 10,\n    widthSmall: 12,\n    offset: 2,\n    offsetMedium: 1,\n    offsetSmall: 0\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HtmlToComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    html: innerHTML\n  })))));\n};\n\nContent.propTypes = types__WEBPACK_IMPORTED_MODULE_1__[\"GutenbergBlock\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/components/blocks/Content/index.js?");

/***/ }),

/***/ "./src/components/blocks/Content/styles.scss":
/*!***************************************************!*\
  !*** ./src/components/blocks/Content/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Content/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/blocks/Content/styles.scss?");

/***/ }),

/***/ "./src/services/stripTags/index.js":
/*!*****************************************!*\
  !*** ./src/services/stripTags/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * Removes HTML tag from the given piece of content.\n *\n * @param {string} content\n *\n * @return {string}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (content) {\n  return content.replace(/<.+?>/, '');\n});\n\n//# sourceURL=webpack:///./src/services/stripTags/index.js?");

/***/ })

}]);