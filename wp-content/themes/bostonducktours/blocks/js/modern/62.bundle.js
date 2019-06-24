(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

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