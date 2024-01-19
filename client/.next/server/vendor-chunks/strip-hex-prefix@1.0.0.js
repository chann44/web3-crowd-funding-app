"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/strip-hex-prefix@1.0.0";
exports.ids = ["vendor-chunks/strip-hex-prefix@1.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/strip-hex-prefix@1.0.0/node_modules/strip-hex-prefix/src/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/strip-hex-prefix@1.0.0/node_modules/strip-hex-prefix/src/index.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isHexPrefixed = __webpack_require__(/*! is-hex-prefixed */ \"(ssr)/./node_modules/.pnpm/is-hex-prefixed@1.0.0/node_modules/is-hex-prefixed/src/index.js\");\n/**\n * Removes '0x' from a given `String` is present\n * @param {String} str the string value\n * @return {String|Optional} a string by pass if necessary\n */ module.exports = function stripHexPrefix(str) {\n    if (typeof str !== \"string\") {\n        return str;\n    }\n    return isHexPrefixed(str) ? str.slice(2) : str;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc3RyaXAtaGV4LXByZWZpeEAxLjAuMC9ub2RlX21vZHVsZXMvc3RyaXAtaGV4LXByZWZpeC9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLGdCQUFnQkMsbUJBQU9BLENBQUM7QUFFNUI7Ozs7Q0FJQyxHQUNEQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsZUFBZUMsR0FBRztJQUMxQyxJQUFJLE9BQU9BLFFBQVEsVUFBVTtRQUMzQixPQUFPQTtJQUNUO0lBRUEsT0FBT0wsY0FBY0ssT0FBT0EsSUFBSUMsS0FBSyxDQUFDLEtBQUtEO0FBQzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0cmlwLWhleC1wcmVmaXhAMS4wLjAvbm9kZV9tb2R1bGVzL3N0cmlwLWhleC1wcmVmaXgvc3JjL2luZGV4LmpzPzIxNzEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzSGV4UHJlZml4ZWQgPSByZXF1aXJlKCdpcy1oZXgtcHJlZml4ZWQnKTtcblxuLyoqXG4gKiBSZW1vdmVzICcweCcgZnJvbSBhIGdpdmVuIGBTdHJpbmdgIGlzIHByZXNlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgdGhlIHN0cmluZyB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfE9wdGlvbmFsfSBhIHN0cmluZyBieSBwYXNzIGlmIG5lY2Vzc2FyeVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmlwSGV4UHJlZml4KHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmV0dXJuIGlzSGV4UHJlZml4ZWQoc3RyKSA/IHN0ci5zbGljZSgyKSA6IHN0cjtcbn1cbiJdLCJuYW1lcyI6WyJpc0hleFByZWZpeGVkIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpcEhleFByZWZpeCIsInN0ciIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/strip-hex-prefix@1.0.0/node_modules/strip-hex-prefix/src/index.js\n");

/***/ })

};
;