"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.0.0";
exports.ids = ["vendor-chunks/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.0.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.0.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useInsertionEffectAlwaysWithSyncFallback: () => (/* binding */ useInsertionEffectAlwaysWithSyncFallback),\n/* harmony export */   useInsertionEffectWithLayoutFallback: () => (/* binding */ useInsertionEffectWithLayoutFallback)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.1.0_react-dom@18.0.0_react@18.0.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar isBrowser = typeof document !== \"undefined\";\nvar syncFallback = function syncFallback(create) {\n    return create();\n};\nvar useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__[\"useInsertion\" + \"Effect\"] ? react__WEBPACK_IMPORTED_MODULE_0__[\"useInsertion\" + \"Effect\"] : false;\nvar useInsertionEffectAlwaysWithSyncFallback = !isBrowser ? syncFallback : useInsertionEffect || syncFallback;\nvar useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3NAMS4wLjFfcmVhY3RAMTguMC4wL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFFL0IsSUFBSUMsWUFBWSxPQUFPQyxhQUFhO0FBRXBDLElBQUlDLGVBQWUsU0FBU0EsYUFBYUMsTUFBTTtJQUM3QyxPQUFPQTtBQUNUO0FBRUEsSUFBSUMscUJBQXFCTCxrQ0FBSyxDQUFDLGlCQUFpQixTQUFTLEdBQUdBLGtDQUFLLENBQUMsaUJBQWlCLFNBQVMsR0FBRztBQUMvRixJQUFJTSwyQ0FBMkMsQ0FBQ0wsWUFBWUUsZUFBZUUsc0JBQXNCRjtBQUNqRyxJQUFJSSx1Q0FBdUNGLHNCQUFzQkwsa0RBQXFCO0FBRUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3NAMS4wLjFfcmVhY3RAMTguMC4wL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuZXNtLmpzP2VlNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIHN5bmNGYWxsYmFjayA9IGZ1bmN0aW9uIHN5bmNGYWxsYmFjayhjcmVhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZSgpO1xufTtcblxudmFyIHVzZUluc2VydGlvbkVmZmVjdCA9IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddID8gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gOiBmYWxzZTtcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrID0gIWlzQnJvd3NlciA/IHN5bmNGYWxsYmFjayA6IHVzZUluc2VydGlvbkVmZmVjdCB8fCBzeW5jRmFsbGJhY2s7XG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0IHx8IFJlYWN0LnVzZUxheW91dEVmZmVjdDtcblxuZXhwb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjaywgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJpc0Jyb3dzZXIiLCJkb2N1bWVudCIsInN5bmNGYWxsYmFjayIsImNyZWF0ZSIsInVzZUluc2VydGlvbkVmZmVjdCIsInVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2siLCJ1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2siLCJ1c2VMYXlvdXRFZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.0.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js\n");

/***/ })

};
;