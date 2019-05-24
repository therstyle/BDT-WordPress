(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Column/styles.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/blocks/Column/styles.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Column .Cell {\\n  grid-column-end: span 12;\\n  grid-column-start: auto; }\\n\\n.Column .wp-block-column {\\n  display: block;\\n  flex: none;\\n  margin: 0; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/blocks/Column/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

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

/***/ })

}]);