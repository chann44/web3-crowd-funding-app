"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-hex-prefixed@1.0.0";
exports.ids = ["vendor-chunks/is-hex-prefixed@1.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/is-hex-prefixed@1.0.0/node_modules/is-hex-prefixed/src/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/is-hex-prefixed@1.0.0/node_modules/is-hex-prefixed/src/index.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("/**\n * Returns a `Boolean` on whether or not the a `String` starts with '0x'\n * @param {String} str the string input value\n * @return {Boolean} a boolean if it is or is not hex prefixed\n * @throws if the str input is not a string\n */ \nmodule.exports = function isHexPrefixed(str) {\n    if (typeof str !== \"string\") {\n        throw new Error(\"[is-hex-prefixed] value must be type 'string', is currently type \" + typeof str + \", while checking isHexPrefixed.\");\n    }\n    return str.slice(0, 2) === \"0x\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtaGV4LXByZWZpeGVkQDEuMC4wL25vZGVfbW9kdWxlcy9pcy1oZXgtcHJlZml4ZWQvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDO0FBQ0RBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxjQUFjQyxHQUFHO0lBQ3pDLElBQUksT0FBT0EsUUFBUSxVQUFVO1FBQzNCLE1BQU0sSUFBSUMsTUFBTSxzRUFBdUUsT0FBT0QsTUFBTztJQUN2RztJQUVBLE9BQU9BLElBQUlFLEtBQUssQ0FBQyxHQUFHLE9BQU87QUFDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtaGV4LXByZWZpeGVkQDEuMC4wL25vZGVfbW9kdWxlcy9pcy1oZXgtcHJlZml4ZWQvc3JjL2luZGV4LmpzP2YzOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIGEgYEJvb2xlYW5gIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBhIGBTdHJpbmdgIHN0YXJ0cyB3aXRoICcweCdcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgdGhlIHN0cmluZyBpbnB1dCB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0gYSBib29sZWFuIGlmIGl0IGlzIG9yIGlzIG5vdCBoZXggcHJlZml4ZWRcbiAqIEB0aHJvd3MgaWYgdGhlIHN0ciBpbnB1dCBpcyBub3QgYSBzdHJpbmdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0hleFByZWZpeGVkKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbaXMtaGV4LXByZWZpeGVkXSB2YWx1ZSBtdXN0IGJlIHR5cGUgJ3N0cmluZycsIGlzIGN1cnJlbnRseSB0eXBlIFwiICsgKHR5cGVvZiBzdHIpICsgXCIsIHdoaWxlIGNoZWNraW5nIGlzSGV4UHJlZml4ZWQuXCIpO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5zbGljZSgwLCAyKSA9PT0gJzB4Jztcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXNIZXhQcmVmaXhlZCIsInN0ciIsIkVycm9yIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/is-hex-prefixed@1.0.0/node_modules/is-hex-prefixed/src/index.js\n");

/***/ })

};
;