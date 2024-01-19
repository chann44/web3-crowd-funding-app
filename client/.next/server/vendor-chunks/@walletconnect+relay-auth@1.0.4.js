/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+relay-auth@1.0.4";
exports.ids = ["vendor-chunks/@walletconnect+relay-auth@1.0.4"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateKeyPair: () => (/* binding */ generateKeyPair),\n/* harmony export */   signJWT: () => (/* binding */ signJWT),\n/* harmony export */   verifyJWT: () => (/* binding */ verifyJWT)\n/* harmony export */ });\n/* harmony import */ var _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stablelib/ed25519 */ \"(ssr)/./node_modules/.pnpm/@stablelib+ed25519@1.0.3/node_modules/@stablelib/ed25519/lib/ed25519.js\");\n/* harmony import */ var _stablelib_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stablelib/random */ \"(ssr)/./node_modules/.pnpm/@stablelib+random@1.0.2/node_modules/@stablelib/random/lib/random.js\");\n/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/time */ \"(ssr)/./node_modules/.pnpm/@walletconnect+time@1.0.2/node_modules/@walletconnect/time/dist/cjs/index.js\");\n/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_time__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js\");\n\n\n\n\n\nfunction generateKeyPair(seed = (0,_stablelib_random__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(_constants__WEBPACK_IMPORTED_MODULE_3__.KEY_PAIR_SEED_LENGTH)) {\n    return _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__.generateKeyPairFromSeed(seed);\n}\nasync function signJWT(sub, aud, ttl, keyPair, iat = (0,_walletconnect_time__WEBPACK_IMPORTED_MODULE_2__.fromMiliseconds)(Date.now())) {\n    const header = {\n        alg: _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_ALG,\n        typ: _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_TYP\n    };\n    const iss = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.encodeIss)(keyPair.publicKey);\n    const exp = iat + ttl;\n    const payload = {\n        iss,\n        sub,\n        aud,\n        iat,\n        exp\n    };\n    const data = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.encodeData)({\n        header,\n        payload\n    });\n    const signature = _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__.sign(keyPair.secretKey, data);\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.encodeJWT)({\n        header,\n        payload,\n        signature\n    });\n}\nasync function verifyJWT(jwt) {\n    const { header, payload, data, signature } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.decodeJWT)(jwt);\n    if (header.alg !== _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_ALG || header.typ !== _constants__WEBPACK_IMPORTED_MODULE_3__.JWT_IRIDIUM_TYP) {\n        throw new Error(\"JWT must use EdDSA algorithm\");\n    }\n    const publicKey = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.decodeIss)(payload.iss);\n    return _stablelib_ed25519__WEBPACK_IMPORTED_MODULE_0__.verify(publicKey, data, signature);\n} //# sourceMappingURL=api.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0U7QUFDTTtBQUNnQztBQUNKO0FBQzNFLFNBQVNXLGdCQUFnQkMsT0FBT1gsOERBQVdBLENBQUNJLDREQUFvQkEsQ0FBQztJQUNwRSxPQUFPTCx1RUFBK0IsQ0FBQ1k7QUFDM0M7QUFDTyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU1qQixvRUFBZUEsQ0FBQ2tCLEtBQUtDLEdBQUcsR0FBRztJQUNuRixNQUFNQyxTQUFTO1FBQUVDLEtBQUtwQix1REFBZUE7UUFBRXFCLEtBQUtwQix1REFBZUE7SUFBQztJQUM1RCxNQUFNcUIsTUFBTWhCLGlEQUFTQSxDQUFDUyxRQUFRUSxTQUFTO0lBQ3ZDLE1BQU1DLE1BQU1SLE1BQU1GO0lBQ2xCLE1BQU1XLFVBQVU7UUFBRUg7UUFBS1Y7UUFBS0M7UUFBS0c7UUFBS1E7SUFBSTtJQUMxQyxNQUFNRSxPQUFPckIsa0RBQVVBLENBQUM7UUFBRWM7UUFBUU07SUFBUTtJQUMxQyxNQUFNRSxZQUFZOUIsb0RBQVksQ0FBQ2tCLFFBQVFjLFNBQVMsRUFBRUg7SUFDbEQsT0FBT25CLGlEQUFTQSxDQUFDO1FBQUVZO1FBQVFNO1FBQVNFO0lBQVU7QUFDbEQ7QUFDTyxlQUFlRyxVQUFVQyxHQUFHO0lBQy9CLE1BQU0sRUFBRVosTUFBTSxFQUFFTSxPQUFPLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUd2QixpREFBU0EsQ0FBQzJCO0lBQ3ZELElBQUlaLE9BQU9DLEdBQUcsS0FBS3BCLHVEQUFlQSxJQUFJbUIsT0FBT0UsR0FBRyxLQUFLcEIsdURBQWVBLEVBQUU7UUFDbEUsTUFBTSxJQUFJK0IsTUFBTTtJQUNwQjtJQUNBLE1BQU1ULFlBQVlwQixpREFBU0EsQ0FBQ3NCLFFBQVFILEdBQUc7SUFDdkMsT0FBT3pCLHNEQUFjLENBQUMwQixXQUFXRyxNQUFNQztBQUMzQyxFQUNBLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCtyZWxheS1hdXRoQDEuMC40L25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9yZWxheS1hdXRoL2Rpc3QvZXNtL2FwaS5qcz81YTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVkMjU1MTkgZnJvbSBcIkBzdGFibGVsaWIvZWQyNTUxOVwiO1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tIFwiQHN0YWJsZWxpYi9yYW5kb21cIjtcbmltcG9ydCB7IGZyb21NaWxpc2Vjb25kcyB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC90aW1lXCI7XG5pbXBvcnQgeyBKV1RfSVJJRElVTV9BTEcsIEpXVF9JUklESVVNX1RZUCwgS0VZX1BBSVJfU0VFRF9MRU5HVEgsIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWNvZGVJc3MsIGRlY29kZUpXVCwgZW5jb2RlRGF0YSwgZW5jb2RlSXNzLCBlbmNvZGVKV1QsIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUtleVBhaXIoc2VlZCA9IHJhbmRvbUJ5dGVzKEtFWV9QQUlSX1NFRURfTEVOR1RIKSkge1xuICAgIHJldHVybiBlZDI1NTE5LmdlbmVyYXRlS2V5UGFpckZyb21TZWVkKHNlZWQpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25KV1Qoc3ViLCBhdWQsIHR0bCwga2V5UGFpciwgaWF0ID0gZnJvbU1pbGlzZWNvbmRzKERhdGUubm93KCkpKSB7XG4gICAgY29uc3QgaGVhZGVyID0geyBhbGc6IEpXVF9JUklESVVNX0FMRywgdHlwOiBKV1RfSVJJRElVTV9UWVAgfTtcbiAgICBjb25zdCBpc3MgPSBlbmNvZGVJc3Moa2V5UGFpci5wdWJsaWNLZXkpO1xuICAgIGNvbnN0IGV4cCA9IGlhdCArIHR0bDtcbiAgICBjb25zdCBwYXlsb2FkID0geyBpc3MsIHN1YiwgYXVkLCBpYXQsIGV4cCB9O1xuICAgIGNvbnN0IGRhdGEgPSBlbmNvZGVEYXRhKHsgaGVhZGVyLCBwYXlsb2FkIH0pO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGVkMjU1MTkuc2lnbihrZXlQYWlyLnNlY3JldEtleSwgZGF0YSk7XG4gICAgcmV0dXJuIGVuY29kZUpXVCh7IGhlYWRlciwgcGF5bG9hZCwgc2lnbmF0dXJlIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUpXVChqd3QpIHtcbiAgICBjb25zdCB7IGhlYWRlciwgcGF5bG9hZCwgZGF0YSwgc2lnbmF0dXJlIH0gPSBkZWNvZGVKV1Qoand0KTtcbiAgICBpZiAoaGVhZGVyLmFsZyAhPT0gSldUX0lSSURJVU1fQUxHIHx8IGhlYWRlci50eXAgIT09IEpXVF9JUklESVVNX1RZUCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJKV1QgbXVzdCB1c2UgRWREU0EgYWxnb3JpdGhtXCIpO1xuICAgIH1cbiAgICBjb25zdCBwdWJsaWNLZXkgPSBkZWNvZGVJc3MocGF5bG9hZC5pc3MpO1xuICAgIHJldHVybiBlZDI1NTE5LnZlcmlmeShwdWJsaWNLZXksIGRhdGEsIHNpZ25hdHVyZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcGkuanMubWFwIl0sIm5hbWVzIjpbImVkMjU1MTkiLCJyYW5kb21CeXRlcyIsImZyb21NaWxpc2Vjb25kcyIsIkpXVF9JUklESVVNX0FMRyIsIkpXVF9JUklESVVNX1RZUCIsIktFWV9QQUlSX1NFRURfTEVOR1RIIiwiZGVjb2RlSXNzIiwiZGVjb2RlSldUIiwiZW5jb2RlRGF0YSIsImVuY29kZUlzcyIsImVuY29kZUpXVCIsImdlbmVyYXRlS2V5UGFpciIsInNlZWQiLCJnZW5lcmF0ZUtleVBhaXJGcm9tU2VlZCIsInNpZ25KV1QiLCJzdWIiLCJhdWQiLCJ0dGwiLCJrZXlQYWlyIiwiaWF0IiwiRGF0ZSIsIm5vdyIsImhlYWRlciIsImFsZyIsInR5cCIsImlzcyIsInB1YmxpY0tleSIsImV4cCIsInBheWxvYWQiLCJkYXRhIiwic2lnbmF0dXJlIiwic2lnbiIsInNlY3JldEtleSIsInZlcmlmeUpXVCIsImp3dCIsIkVycm9yIiwidmVyaWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DATA_ENCODING: () => (/* binding */ DATA_ENCODING),\n/* harmony export */   DID_DELIMITER: () => (/* binding */ DID_DELIMITER),\n/* harmony export */   DID_METHOD: () => (/* binding */ DID_METHOD),\n/* harmony export */   DID_PREFIX: () => (/* binding */ DID_PREFIX),\n/* harmony export */   JSON_ENCODING: () => (/* binding */ JSON_ENCODING),\n/* harmony export */   JWT_DELIMITER: () => (/* binding */ JWT_DELIMITER),\n/* harmony export */   JWT_ENCODING: () => (/* binding */ JWT_ENCODING),\n/* harmony export */   JWT_IRIDIUM_ALG: () => (/* binding */ JWT_IRIDIUM_ALG),\n/* harmony export */   JWT_IRIDIUM_TYP: () => (/* binding */ JWT_IRIDIUM_TYP),\n/* harmony export */   KEY_PAIR_SEED_LENGTH: () => (/* binding */ KEY_PAIR_SEED_LENGTH),\n/* harmony export */   MULTICODEC_ED25519_BASE: () => (/* binding */ MULTICODEC_ED25519_BASE),\n/* harmony export */   MULTICODEC_ED25519_ENCODING: () => (/* binding */ MULTICODEC_ED25519_ENCODING),\n/* harmony export */   MULTICODEC_ED25519_HEADER: () => (/* binding */ MULTICODEC_ED25519_HEADER),\n/* harmony export */   MULTICODEC_ED25519_LENGTH: () => (/* binding */ MULTICODEC_ED25519_LENGTH)\n/* harmony export */ });\nconst JWT_IRIDIUM_ALG = \"EdDSA\";\nconst JWT_IRIDIUM_TYP = \"JWT\";\nconst JWT_DELIMITER = \".\";\nconst JWT_ENCODING = \"base64url\";\nconst JSON_ENCODING = \"utf8\";\nconst DATA_ENCODING = \"utf8\";\nconst DID_DELIMITER = \":\";\nconst DID_PREFIX = \"did\";\nconst DID_METHOD = \"key\";\nconst MULTICODEC_ED25519_ENCODING = \"base58btc\";\nconst MULTICODEC_ED25519_BASE = \"z\";\nconst MULTICODEC_ED25519_HEADER = \"K36\";\nconst MULTICODEC_ED25519_LENGTH = 32;\nconst KEY_PAIR_SEED_LENGTH = 32; //# sourceMappingURL=constants.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxrQkFBa0IsUUFBUTtBQUNoQyxNQUFNQyxrQkFBa0IsTUFBTTtBQUM5QixNQUFNQyxnQkFBZ0IsSUFBSTtBQUMxQixNQUFNQyxlQUFlLFlBQVk7QUFDakMsTUFBTUMsZ0JBQWdCLE9BQU87QUFDN0IsTUFBTUMsZ0JBQWdCLE9BQU87QUFDN0IsTUFBTUMsZ0JBQWdCLElBQUk7QUFDMUIsTUFBTUMsYUFBYSxNQUFNO0FBQ3pCLE1BQU1DLGFBQWEsTUFBTTtBQUN6QixNQUFNQyw4QkFBOEIsWUFBWTtBQUNoRCxNQUFNQywwQkFBMEIsSUFBSTtBQUNwQyxNQUFNQyw0QkFBNEIsTUFBTTtBQUN4QyxNQUFNQyw0QkFBNEIsR0FBRztBQUNyQyxNQUFNQyx1QkFBdUIsR0FBRyxDQUN2QyxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9jb25zdGFudHMuanM/OTIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSldUX0lSSURJVU1fQUxHID0gXCJFZERTQVwiO1xuZXhwb3J0IGNvbnN0IEpXVF9JUklESVVNX1RZUCA9IFwiSldUXCI7XG5leHBvcnQgY29uc3QgSldUX0RFTElNSVRFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IEpXVF9FTkNPRElORyA9IFwiYmFzZTY0dXJsXCI7XG5leHBvcnQgY29uc3QgSlNPTl9FTkNPRElORyA9IFwidXRmOFwiO1xuZXhwb3J0IGNvbnN0IERBVEFfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBESURfREVMSU1JVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgRElEX1BSRUZJWCA9IFwiZGlkXCI7XG5leHBvcnQgY29uc3QgRElEX01FVEhPRCA9IFwia2V5XCI7XG5leHBvcnQgY29uc3QgTVVMVElDT0RFQ19FRDI1NTE5X0VOQ09ESU5HID0gXCJiYXNlNThidGNcIjtcbmV4cG9ydCBjb25zdCBNVUxUSUNPREVDX0VEMjU1MTlfQkFTRSA9IFwielwiO1xuZXhwb3J0IGNvbnN0IE1VTFRJQ09ERUNfRUQyNTUxOV9IRUFERVIgPSBcIkszNlwiO1xuZXhwb3J0IGNvbnN0IE1VTFRJQ09ERUNfRUQyNTUxOV9MRU5HVEggPSAzMjtcbmV4cG9ydCBjb25zdCBLRVlfUEFJUl9TRUVEX0xFTkdUSCA9IDMyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCJdLCJuYW1lcyI6WyJKV1RfSVJJRElVTV9BTEciLCJKV1RfSVJJRElVTV9UWVAiLCJKV1RfREVMSU1JVEVSIiwiSldUX0VOQ09ESU5HIiwiSlNPTl9FTkNPRElORyIsIkRBVEFfRU5DT0RJTkciLCJESURfREVMSU1JVEVSIiwiRElEX1BSRUZJWCIsIkRJRF9NRVRIT0QiLCJNVUxUSUNPREVDX0VEMjU1MTlfRU5DT0RJTkciLCJNVUxUSUNPREVDX0VEMjU1MTlfQkFTRSIsIk1VTFRJQ09ERUNfRUQyNTUxOV9IRUFERVIiLCJNVUxUSUNPREVDX0VEMjU1MTlfTEVOR1RIIiwiS0VZX1BBSVJfU0VFRF9MRU5HVEgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DATA_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DATA_ENCODING),\n/* harmony export */   DID_DELIMITER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DID_DELIMITER),\n/* harmony export */   DID_METHOD: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DID_METHOD),\n/* harmony export */   DID_PREFIX: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DID_PREFIX),\n/* harmony export */   JSON_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JSON_ENCODING),\n/* harmony export */   JWT_DELIMITER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_DELIMITER),\n/* harmony export */   JWT_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_ENCODING),\n/* harmony export */   JWT_IRIDIUM_ALG: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_IRIDIUM_ALG),\n/* harmony export */   JWT_IRIDIUM_TYP: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.JWT_IRIDIUM_TYP),\n/* harmony export */   KEY_PAIR_SEED_LENGTH: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.KEY_PAIR_SEED_LENGTH),\n/* harmony export */   MULTICODEC_ED25519_BASE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_BASE),\n/* harmony export */   MULTICODEC_ED25519_ENCODING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_ENCODING),\n/* harmony export */   MULTICODEC_ED25519_HEADER: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_HEADER),\n/* harmony export */   MULTICODEC_ED25519_LENGTH: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MULTICODEC_ED25519_LENGTH),\n/* harmony export */   decodeData: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeData),\n/* harmony export */   decodeIss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeIss),\n/* harmony export */   decodeJSON: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeJSON),\n/* harmony export */   decodeJWT: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeJWT),\n/* harmony export */   decodeSig: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.decodeSig),\n/* harmony export */   encodeData: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeData),\n/* harmony export */   encodeIss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeIss),\n/* harmony export */   encodeJSON: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeJSON),\n/* harmony export */   encodeJWT: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeJWT),\n/* harmony export */   encodeSig: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.encodeSig),\n/* harmony export */   generateKeyPair: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.generateKeyPair),\n/* harmony export */   signJWT: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.signJWT),\n/* harmony export */   verifyJWT: () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.verifyJWT)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/api.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if([\"default\",\"generateKeyPair\",\"signJWT\",\"verifyJWT\",\"DATA_ENCODING\",\"DID_DELIMITER\",\"DID_METHOD\",\"DID_PREFIX\",\"JSON_ENCODING\",\"JWT_DELIMITER\",\"JWT_ENCODING\",\"JWT_IRIDIUM_ALG\",\"JWT_IRIDIUM_TYP\",\"KEY_PAIR_SEED_LENGTH\",\"MULTICODEC_ED25519_BASE\",\"MULTICODEC_ED25519_ENCODING\",\"MULTICODEC_ED25519_HEADER\",\"MULTICODEC_ED25519_LENGTH\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js\");\n\n\n\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNNO0FBQ0o7QUFDQSxDQUN4QixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS9pbmRleC5qcz81MmRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js ***!
  \*********************************************************************************************************************/
/***/ (() => {

eval("//# sourceMappingURL=types.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS90eXBlcy5qcz82OWU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUMiLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS90eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeData: () => (/* binding */ decodeData),\n/* harmony export */   decodeIss: () => (/* binding */ decodeIss),\n/* harmony export */   decodeJSON: () => (/* binding */ decodeJSON),\n/* harmony export */   decodeJWT: () => (/* binding */ decodeJWT),\n/* harmony export */   decodeSig: () => (/* binding */ decodeSig),\n/* harmony export */   encodeData: () => (/* binding */ encodeData),\n/* harmony export */   encodeIss: () => (/* binding */ encodeIss),\n/* harmony export */   encodeJSON: () => (/* binding */ encodeJSON),\n/* harmony export */   encodeJWT: () => (/* binding */ encodeJWT),\n/* harmony export */   encodeSig: () => (/* binding */ encodeSig)\n/* harmony export */ });\n/* harmony import */ var uint8arrays_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uint8arrays/concat */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/concat.js\");\n/* harmony import */ var uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uint8arrays/to-string */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/to-string.js\");\n/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uint8arrays/from-string */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/from-string.js\");\n/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @walletconnect/safe-json */ \"(ssr)/./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/constants.js\");\n\n\n\n\n\nfunction decodeJSON(str) {\n    return (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__.safeJsonParse)((0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)((0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(str, _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING), _constants__WEBPACK_IMPORTED_MODULE_4__.JSON_ENCODING));\n}\nfunction encodeJSON(val) {\n    return (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)((0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__.safeJsonStringify)(val), _constants__WEBPACK_IMPORTED_MODULE_4__.JSON_ENCODING), _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING);\n}\nfunction encodeIss(publicKey) {\n    const header = (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(_constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_HEADER, _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    const multicodec = _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_BASE + (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)((0,uint8arrays_concat__WEBPACK_IMPORTED_MODULE_0__.concat)([\n        header,\n        publicKey\n    ]), _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    return [\n        _constants__WEBPACK_IMPORTED_MODULE_4__.DID_PREFIX,\n        _constants__WEBPACK_IMPORTED_MODULE_4__.DID_METHOD,\n        multicodec\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_4__.DID_DELIMITER);\n}\nfunction decodeIss(issuer) {\n    const [prefix, method, multicodec] = issuer.split(_constants__WEBPACK_IMPORTED_MODULE_4__.DID_DELIMITER);\n    if (prefix !== _constants__WEBPACK_IMPORTED_MODULE_4__.DID_PREFIX || method !== _constants__WEBPACK_IMPORTED_MODULE_4__.DID_METHOD) {\n        throw new Error(`Issuer must be a DID with method \"key\"`);\n    }\n    const base = multicodec.slice(0, 1);\n    if (base !== _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_BASE) {\n        throw new Error(`Issuer must be a key in mulicodec format`);\n    }\n    const bytes = (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(multicodec.slice(1), _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    const type = (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(bytes.slice(0, 2), _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_ENCODING);\n    if (type !== _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_HEADER) {\n        throw new Error(`Issuer must be a public key with type \"Ed25519\"`);\n    }\n    const publicKey = bytes.slice(2);\n    if (publicKey.length !== _constants__WEBPACK_IMPORTED_MODULE_4__.MULTICODEC_ED25519_LENGTH) {\n        throw new Error(`Issuer must be a public key with length 32 bytes`);\n    }\n    return publicKey;\n}\nfunction encodeSig(bytes) {\n    return (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(bytes, _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING);\n}\nfunction decodeSig(encoded) {\n    return (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(encoded, _constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ENCODING);\n}\nfunction encodeData(params) {\n    return (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)([\n        encodeJSON(params.header),\n        encodeJSON(params.payload)\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER), _constants__WEBPACK_IMPORTED_MODULE_4__.DATA_ENCODING);\n}\nfunction decodeData(data) {\n    const params = (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(data, _constants__WEBPACK_IMPORTED_MODULE_4__.DATA_ENCODING).split(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER);\n    const header = decodeJSON(params[0]);\n    const payload = decodeJSON(params[1]);\n    return {\n        header,\n        payload\n    };\n}\nfunction encodeJWT(params) {\n    return [\n        encodeJSON(params.header),\n        encodeJSON(params.payload),\n        encodeSig(params.signature)\n    ].join(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER);\n}\nfunction decodeJWT(jwt) {\n    const params = jwt.split(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER);\n    const header = decodeJSON(params[0]);\n    const payload = decodeJSON(params[1]);\n    const signature = decodeSig(params[2]);\n    const data = (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_2__.fromString)(params.slice(0, 2).join(_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_DELIMITER), _constants__WEBPACK_IMPORTED_MODULE_4__.DATA_ENCODING);\n    return {\n        header,\n        payload,\n        signature,\n        data\n    };\n} //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXV0aEAxLjAuNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXV0aC9kaXN0L2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSztBQUNJO0FBQ3VCO0FBQ2dLO0FBQ3JPLFNBQVNnQixXQUFXQyxHQUFHO0lBQzFCLE9BQU9kLHVFQUFhQSxDQUFDRiwrREFBUUEsQ0FBQ0MsbUVBQVVBLENBQUNlLEtBQUtOLG9EQUFZQSxHQUFHRixxREFBYUE7QUFDOUU7QUFDTyxTQUFTUyxXQUFXQyxHQUFHO0lBQzFCLE9BQU9sQiwrREFBUUEsQ0FBQ0MsbUVBQVVBLENBQUNFLDJFQUFpQkEsQ0FBQ2UsTUFBTVYscURBQWFBLEdBQUdFLG9EQUFZQTtBQUNuRjtBQUNPLFNBQVNTLFVBQVVDLFNBQVM7SUFDL0IsTUFBTUMsU0FBU3BCLG1FQUFVQSxDQUFDWSxpRUFBeUJBLEVBQUVELG1FQUEyQkE7SUFDaEYsTUFBTVUsYUFBYVgsK0RBQXVCQSxHQUN0Q1gsK0RBQVFBLENBQUNELDBEQUFNQSxDQUFDO1FBQUNzQjtRQUFRRDtLQUFVLEdBQUdSLG1FQUEyQkE7SUFDckUsT0FBTztRQUFDTCxrREFBVUE7UUFBRUQsa0RBQVVBO1FBQUVnQjtLQUFXLENBQUNDLElBQUksQ0FBQ2xCLHFEQUFhQTtBQUNsRTtBQUNPLFNBQVNtQixVQUFVQyxNQUFNO0lBQzVCLE1BQU0sQ0FBQ0MsUUFBUUMsUUFBUUwsV0FBVyxHQUFHRyxPQUFPRyxLQUFLLENBQUN2QixxREFBYUE7SUFDL0QsSUFBSXFCLFdBQVduQixrREFBVUEsSUFBSW9CLFdBQVdyQixrREFBVUEsRUFBRTtRQUNoRCxNQUFNLElBQUl1QixNQUFNLENBQUMsc0NBQXNDLENBQUM7SUFDNUQ7SUFDQSxNQUFNQyxPQUFPUixXQUFXUyxLQUFLLENBQUMsR0FBRztJQUNqQyxJQUFJRCxTQUFTbkIsK0RBQXVCQSxFQUFFO1FBQ2xDLE1BQU0sSUFBSWtCLE1BQU0sQ0FBQyx3Q0FBd0MsQ0FBQztJQUM5RDtJQUNBLE1BQU1HLFFBQVEvQixtRUFBVUEsQ0FBQ3FCLFdBQVdTLEtBQUssQ0FBQyxJQUFJbkIsbUVBQTJCQTtJQUN6RSxNQUFNcUIsT0FBT2pDLCtEQUFRQSxDQUFDZ0MsTUFBTUQsS0FBSyxDQUFDLEdBQUcsSUFBSW5CLG1FQUEyQkE7SUFDcEUsSUFBSXFCLFNBQVNwQixpRUFBeUJBLEVBQUU7UUFDcEMsTUFBTSxJQUFJZ0IsTUFBTSxDQUFDLCtDQUErQyxDQUFDO0lBQ3JFO0lBQ0EsTUFBTVQsWUFBWVksTUFBTUQsS0FBSyxDQUFDO0lBQzlCLElBQUlYLFVBQVVjLE1BQU0sS0FBS3BCLGlFQUF5QkEsRUFBRTtRQUNoRCxNQUFNLElBQUllLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQztJQUN0RTtJQUNBLE9BQU9UO0FBQ1g7QUFDTyxTQUFTZSxVQUFVSCxLQUFLO0lBQzNCLE9BQU9oQywrREFBUUEsQ0FBQ2dDLE9BQU90QixvREFBWUE7QUFDdkM7QUFDTyxTQUFTMEIsVUFBVUMsT0FBTztJQUM3QixPQUFPcEMsbUVBQVVBLENBQUNvQyxTQUFTM0Isb0RBQVlBO0FBQzNDO0FBQ08sU0FBUzRCLFdBQVdDLE1BQU07SUFDN0IsT0FBT3RDLG1FQUFVQSxDQUFDO1FBQUNnQixXQUFXc0IsT0FBT2xCLE1BQU07UUFBR0osV0FBV3NCLE9BQU9DLE9BQU87S0FBRSxDQUFDakIsSUFBSSxDQUFDZCxxREFBYUEsR0FBR0wscURBQWFBO0FBQ2hIO0FBQ08sU0FBU3FDLFdBQVdDLElBQUk7SUFDM0IsTUFBTUgsU0FBU3ZDLCtEQUFRQSxDQUFDMEMsTUFBTXRDLHFEQUFhQSxFQUFFd0IsS0FBSyxDQUFDbkIscURBQWFBO0lBQ2hFLE1BQU1ZLFNBQVNOLFdBQVd3QixNQUFNLENBQUMsRUFBRTtJQUNuQyxNQUFNQyxVQUFVekIsV0FBV3dCLE1BQU0sQ0FBQyxFQUFFO0lBQ3BDLE9BQU87UUFBRWxCO1FBQVFtQjtJQUFRO0FBQzdCO0FBQ08sU0FBU0csVUFBVUosTUFBTTtJQUM1QixPQUFPO1FBQ0h0QixXQUFXc0IsT0FBT2xCLE1BQU07UUFDeEJKLFdBQVdzQixPQUFPQyxPQUFPO1FBQ3pCTCxVQUFVSSxPQUFPSyxTQUFTO0tBQzdCLENBQUNyQixJQUFJLENBQUNkLHFEQUFhQTtBQUN4QjtBQUNPLFNBQVNvQyxVQUFVQyxHQUFHO0lBQ3pCLE1BQU1QLFNBQVNPLElBQUlsQixLQUFLLENBQUNuQixxREFBYUE7SUFDdEMsTUFBTVksU0FBU04sV0FBV3dCLE1BQU0sQ0FBQyxFQUFFO0lBQ25DLE1BQU1DLFVBQVV6QixXQUFXd0IsTUFBTSxDQUFDLEVBQUU7SUFDcEMsTUFBTUssWUFBWVIsVUFBVUcsTUFBTSxDQUFDLEVBQUU7SUFDckMsTUFBTUcsT0FBT3pDLG1FQUFVQSxDQUFDc0MsT0FBT1IsS0FBSyxDQUFDLEdBQUcsR0FBR1IsSUFBSSxDQUFDZCxxREFBYUEsR0FBR0wscURBQWFBO0lBQzdFLE9BQU87UUFBRWlCO1FBQVFtQjtRQUFTSTtRQUFXRjtJQUFLO0FBQzlDLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K3JlbGF5LWF1dGhAMS4wLjQvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3JlbGF5LWF1dGgvZGlzdC9lc20vdXRpbHMuanM/NmJiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25jYXQgfSBmcm9tIFwidWludDhhcnJheXMvY29uY2F0XCI7XG5pbXBvcnQgeyB0b1N0cmluZyB9IGZyb20gXCJ1aW50OGFycmF5cy90by1zdHJpbmdcIjtcbmltcG9ydCB7IGZyb21TdHJpbmcgfSBmcm9tIFwidWludDhhcnJheXMvZnJvbS1zdHJpbmdcIjtcbmltcG9ydCB7IHNhZmVKc29uUGFyc2UsIHNhZmVKc29uU3RyaW5naWZ5IH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3NhZmUtanNvblwiO1xuaW1wb3J0IHsgREFUQV9FTkNPRElORywgRElEX0RFTElNSVRFUiwgRElEX01FVEhPRCwgRElEX1BSRUZJWCwgSlNPTl9FTkNPRElORywgSldUX0RFTElNSVRFUiwgSldUX0VOQ09ESU5HLCBNVUxUSUNPREVDX0VEMjU1MTlfQkFTRSwgTVVMVElDT0RFQ19FRDI1NTE5X0VOQ09ESU5HLCBNVUxUSUNPREVDX0VEMjU1MTlfSEVBREVSLCBNVUxUSUNPREVDX0VEMjU1MTlfTEVOR1RILCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUpTT04oc3RyKSB7XG4gICAgcmV0dXJuIHNhZmVKc29uUGFyc2UodG9TdHJpbmcoZnJvbVN0cmluZyhzdHIsIEpXVF9FTkNPRElORyksIEpTT05fRU5DT0RJTkcpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVKU09OKHZhbCkge1xuICAgIHJldHVybiB0b1N0cmluZyhmcm9tU3RyaW5nKHNhZmVKc29uU3RyaW5naWZ5KHZhbCksIEpTT05fRU5DT0RJTkcpLCBKV1RfRU5DT0RJTkcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUlzcyhwdWJsaWNLZXkpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBmcm9tU3RyaW5nKE1VTFRJQ09ERUNfRUQyNTUxOV9IRUFERVIsIE1VTFRJQ09ERUNfRUQyNTUxOV9FTkNPRElORyk7XG4gICAgY29uc3QgbXVsdGljb2RlYyA9IE1VTFRJQ09ERUNfRUQyNTUxOV9CQVNFICtcbiAgICAgICAgdG9TdHJpbmcoY29uY2F0KFtoZWFkZXIsIHB1YmxpY0tleV0pLCBNVUxUSUNPREVDX0VEMjU1MTlfRU5DT0RJTkcpO1xuICAgIHJldHVybiBbRElEX1BSRUZJWCwgRElEX01FVEhPRCwgbXVsdGljb2RlY10uam9pbihESURfREVMSU1JVEVSKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVJc3MoaXNzdWVyKSB7XG4gICAgY29uc3QgW3ByZWZpeCwgbWV0aG9kLCBtdWx0aWNvZGVjXSA9IGlzc3Vlci5zcGxpdChESURfREVMSU1JVEVSKTtcbiAgICBpZiAocHJlZml4ICE9PSBESURfUFJFRklYIHx8IG1ldGhvZCAhPT0gRElEX01FVEhPRCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElzc3VlciBtdXN0IGJlIGEgRElEIHdpdGggbWV0aG9kIFwia2V5XCJgKTtcbiAgICB9XG4gICAgY29uc3QgYmFzZSA9IG11bHRpY29kZWMuc2xpY2UoMCwgMSk7XG4gICAgaWYgKGJhc2UgIT09IE1VTFRJQ09ERUNfRUQyNTUxOV9CQVNFKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSXNzdWVyIG11c3QgYmUgYSBrZXkgaW4gbXVsaWNvZGVjIGZvcm1hdGApO1xuICAgIH1cbiAgICBjb25zdCBieXRlcyA9IGZyb21TdHJpbmcobXVsdGljb2RlYy5zbGljZSgxKSwgTVVMVElDT0RFQ19FRDI1NTE5X0VOQ09ESU5HKTtcbiAgICBjb25zdCB0eXBlID0gdG9TdHJpbmcoYnl0ZXMuc2xpY2UoMCwgMiksIE1VTFRJQ09ERUNfRUQyNTUxOV9FTkNPRElORyk7XG4gICAgaWYgKHR5cGUgIT09IE1VTFRJQ09ERUNfRUQyNTUxOV9IRUFERVIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJc3N1ZXIgbXVzdCBiZSBhIHB1YmxpYyBrZXkgd2l0aCB0eXBlIFwiRWQyNTUxOVwiYCk7XG4gICAgfVxuICAgIGNvbnN0IHB1YmxpY0tleSA9IGJ5dGVzLnNsaWNlKDIpO1xuICAgIGlmIChwdWJsaWNLZXkubGVuZ3RoICE9PSBNVUxUSUNPREVDX0VEMjU1MTlfTEVOR1RIKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSXNzdWVyIG11c3QgYmUgYSBwdWJsaWMga2V5IHdpdGggbGVuZ3RoIDMyIGJ5dGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBwdWJsaWNLZXk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU2lnKGJ5dGVzKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nKGJ5dGVzLCBKV1RfRU5DT0RJTkcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVNpZyhlbmNvZGVkKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcoZW5jb2RlZCwgSldUX0VOQ09ESU5HKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVEYXRhKHBhcmFtcykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKFtlbmNvZGVKU09OKHBhcmFtcy5oZWFkZXIpLCBlbmNvZGVKU09OKHBhcmFtcy5wYXlsb2FkKV0uam9pbihKV1RfREVMSU1JVEVSKSwgREFUQV9FTkNPRElORyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRGF0YShkYXRhKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdG9TdHJpbmcoZGF0YSwgREFUQV9FTkNPRElORykuc3BsaXQoSldUX0RFTElNSVRFUik7XG4gICAgY29uc3QgaGVhZGVyID0gZGVjb2RlSlNPTihwYXJhbXNbMF0pO1xuICAgIGNvbnN0IHBheWxvYWQgPSBkZWNvZGVKU09OKHBhcmFtc1sxXSk7XG4gICAgcmV0dXJuIHsgaGVhZGVyLCBwYXlsb2FkIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSldUKHBhcmFtcykge1xuICAgIHJldHVybiBbXG4gICAgICAgIGVuY29kZUpTT04ocGFyYW1zLmhlYWRlciksXG4gICAgICAgIGVuY29kZUpTT04ocGFyYW1zLnBheWxvYWQpLFxuICAgICAgICBlbmNvZGVTaWcocGFyYW1zLnNpZ25hdHVyZSksXG4gICAgXS5qb2luKEpXVF9ERUxJTUlURVIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUpXVChqd3QpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBqd3Quc3BsaXQoSldUX0RFTElNSVRFUik7XG4gICAgY29uc3QgaGVhZGVyID0gZGVjb2RlSlNPTihwYXJhbXNbMF0pO1xuICAgIGNvbnN0IHBheWxvYWQgPSBkZWNvZGVKU09OKHBhcmFtc1sxXSk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gZGVjb2RlU2lnKHBhcmFtc1syXSk7XG4gICAgY29uc3QgZGF0YSA9IGZyb21TdHJpbmcocGFyYW1zLnNsaWNlKDAsIDIpLmpvaW4oSldUX0RFTElNSVRFUiksIERBVEFfRU5DT0RJTkcpO1xuICAgIHJldHVybiB7IGhlYWRlciwgcGF5bG9hZCwgc2lnbmF0dXJlLCBkYXRhIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiXSwibmFtZXMiOlsiY29uY2F0IiwidG9TdHJpbmciLCJmcm9tU3RyaW5nIiwic2FmZUpzb25QYXJzZSIsInNhZmVKc29uU3RyaW5naWZ5IiwiREFUQV9FTkNPRElORyIsIkRJRF9ERUxJTUlURVIiLCJESURfTUVUSE9EIiwiRElEX1BSRUZJWCIsIkpTT05fRU5DT0RJTkciLCJKV1RfREVMSU1JVEVSIiwiSldUX0VOQ09ESU5HIiwiTVVMVElDT0RFQ19FRDI1NTE5X0JBU0UiLCJNVUxUSUNPREVDX0VEMjU1MTlfRU5DT0RJTkciLCJNVUxUSUNPREVDX0VEMjU1MTlfSEVBREVSIiwiTVVMVElDT0RFQ19FRDI1NTE5X0xFTkdUSCIsImRlY29kZUpTT04iLCJzdHIiLCJlbmNvZGVKU09OIiwidmFsIiwiZW5jb2RlSXNzIiwicHVibGljS2V5IiwiaGVhZGVyIiwibXVsdGljb2RlYyIsImpvaW4iLCJkZWNvZGVJc3MiLCJpc3N1ZXIiLCJwcmVmaXgiLCJtZXRob2QiLCJzcGxpdCIsIkVycm9yIiwiYmFzZSIsInNsaWNlIiwiYnl0ZXMiLCJ0eXBlIiwibGVuZ3RoIiwiZW5jb2RlU2lnIiwiZGVjb2RlU2lnIiwiZW5jb2RlZCIsImVuY29kZURhdGEiLCJwYXJhbXMiLCJwYXlsb2FkIiwiZGVjb2RlRGF0YSIsImRhdGEiLCJlbmNvZGVKV1QiLCJzaWduYXR1cmUiLCJkZWNvZGVKV1QiLCJqd3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js\n");

/***/ })

};
;