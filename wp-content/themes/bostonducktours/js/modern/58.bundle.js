(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./src/scenes/Post/components/Page/index.js":
/*!**************************************************!*\
  !*** ./src/scenes/Post/components/Page/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! types */ \"./src/types.js\");\n/* harmony import */ var components_GutenbergBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/GutenbergBlocks */ \"./src/components/GutenbergBlocks/index.js\");\n/* harmony import */ var components_blocks_WavyHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/blocks/WavyHero */ \"./src/components/blocks/WavyHero/index.js\");\n\n\n\n\nvar propTypes = {\n  post: types__WEBPACK_IMPORTED_MODULE_1__[\"Post\"]\n};\nvar defaultProps = {\n  post: null\n};\n\nvar Page = function Page(_ref) {\n  var post = _ref.post;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, post.featured_image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_blocks_WavyHero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: post.featured_image\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_GutenbergBlocks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    blocks: post.blocks\n  }));\n};\n\nPage.propTypes = propTypes;\nPage.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\n//# sourceURL=webpack:///./src/scenes/Post/components/Page/index.js?");

/***/ })

}]);