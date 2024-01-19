"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ethersproject+base64@5.7.0";
exports.ids = ["vendor-chunks/@ethersproject+base64@5.7.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/base64.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/base64.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/bytes */ \"(ssr)/./node_modules/.pnpm/@ethersproject+bytes@5.7.0/node_modules/@ethersproject/bytes/lib.esm/index.js\");\n\n\nfunction decode(textData) {\n    textData = atob(textData);\n    const data = [];\n    for(let i = 0; i < textData.length; i++){\n        data.push(textData.charCodeAt(i));\n    }\n    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(data);\n}\nfunction encode(data) {\n    data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(data);\n    let textData = \"\";\n    for(let i = 0; i < data.length; i++){\n        textData += String.fromCharCode(data[i]);\n    }\n    return btoa(textData);\n} //# sourceMappingURL=base64.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrYmFzZTY0QDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9iYXNlNjQvbGliLmVzbS9iYXNlNjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDbUM7QUFDekMsU0FBU0MsT0FBT0MsUUFBUTtJQUMzQkEsV0FBV0MsS0FBS0Q7SUFDaEIsTUFBTUUsT0FBTyxFQUFFO0lBQ2YsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILFNBQVNJLE1BQU0sRUFBRUQsSUFBSztRQUN0Q0QsS0FBS0csSUFBSSxDQUFDTCxTQUFTTSxVQUFVLENBQUNIO0lBQ2xDO0lBQ0EsT0FBT0wsOERBQVFBLENBQUNJO0FBQ3BCO0FBQ08sU0FBU0ssT0FBT0wsSUFBSTtJQUN2QkEsT0FBT0osOERBQVFBLENBQUNJO0lBQ2hCLElBQUlGLFdBQVc7SUFDZixJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUQsS0FBS0UsTUFBTSxFQUFFRCxJQUFLO1FBQ2xDSCxZQUFZUSxPQUFPQyxZQUFZLENBQUNQLElBQUksQ0FBQ0MsRUFBRTtJQUMzQztJQUNBLE9BQU9PLEtBQUtWO0FBQ2hCLEVBQ0Esa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BldGhlcnNwcm9qZWN0K2Jhc2U2NEA1LjcuMC9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYmFzZTY0L2xpYi5lc20vYmFzZTY0LmpzP2IzNDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBhcnJheWlmeSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZSh0ZXh0RGF0YSkge1xuICAgIHRleHREYXRhID0gYXRvYih0ZXh0RGF0YSk7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YS5wdXNoKHRleHREYXRhLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlpZnkoZGF0YSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlKGRhdGEpIHtcbiAgICBkYXRhID0gYXJyYXlpZnkoZGF0YSk7XG4gICAgbGV0IHRleHREYXRhID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGV4dERhdGEgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ0b2EodGV4dERhdGEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0LmpzLm1hcCJdLCJuYW1lcyI6WyJhcnJheWlmeSIsImRlY29kZSIsInRleHREYXRhIiwiYXRvYiIsImRhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/base64.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* reexport safe */ _base64__WEBPACK_IMPORTED_MODULE_0__.decode),\n/* harmony export */   encode: () => (/* reexport safe */ _base64__WEBPACK_IMPORTED_MODULE_0__.encode)\n/* harmony export */ });\n/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base64 */ \"(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/base64.js\");\n\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrYmFzZTY0QDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9iYXNlNjQvbGliLmVzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUM2QixDQUMxQyxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrYmFzZTY0QDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9iYXNlNjQvbGliLmVzbS9pbmRleC5qcz83NTgwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0IHsgZGVjb2RlLCBlbmNvZGUgfSBmcm9tIFwiLi9iYXNlNjRcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJkZWNvZGUiLCJlbmNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.7.0/node_modules/@ethersproject/base64/lib.esm/index.js\n");

/***/ })

};
;