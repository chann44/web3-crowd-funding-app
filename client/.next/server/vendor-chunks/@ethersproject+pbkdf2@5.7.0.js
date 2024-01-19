"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ethersproject+pbkdf2@5.7.0";
exports.ids = ["vendor-chunks/@ethersproject+pbkdf2@5.7.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@ethersproject+pbkdf2@5.7.0/node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ethersproject+pbkdf2@5.7.0/node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pbkdf2: () => (/* binding */ pbkdf2)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/bytes */ \"(ssr)/./node_modules/.pnpm/@ethersproject+bytes@5.7.0/node_modules/@ethersproject/bytes/lib.esm/index.js\");\n/* harmony import */ var _ethersproject_sha2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/sha2 */ \"(ssr)/./node_modules/.pnpm/@ethersproject+sha2@5.7.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js\");\n\n\n\nfunction pbkdf2(password, salt, iterations, keylen, hashAlgorithm) {\n    password = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(password);\n    salt = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(salt);\n    let hLen;\n    let l = 1;\n    const DK = new Uint8Array(keylen);\n    const block1 = new Uint8Array(salt.length + 4);\n    block1.set(salt);\n    //salt.copy(block1, 0, 0, salt.length)\n    let r;\n    let T;\n    for(let i = 1; i <= l; i++){\n        //block1.writeUInt32BE(i, salt.length)\n        block1[salt.length] = i >> 24 & 0xff;\n        block1[salt.length + 1] = i >> 16 & 0xff;\n        block1[salt.length + 2] = i >> 8 & 0xff;\n        block1[salt.length + 3] = i & 0xff;\n        //let U = createHmac(password).update(block1).digest();\n        let U = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)((0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_1__.computeHmac)(hashAlgorithm, password, block1));\n        if (!hLen) {\n            hLen = U.length;\n            T = new Uint8Array(hLen);\n            l = Math.ceil(keylen / hLen);\n            r = keylen - (l - 1) * hLen;\n        }\n        //U.copy(T, 0, 0, hLen)\n        T.set(U);\n        for(let j = 1; j < iterations; j++){\n            //U = createHmac(password).update(U).digest();\n            U = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)((0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_1__.computeHmac)(hashAlgorithm, password, U));\n            for(let k = 0; k < hLen; k++)T[k] ^= U[k];\n        }\n        const destPos = (i - 1) * hLen;\n        const len = i === l ? r : hLen;\n        //T.copy(DK, destPos, 0, len)\n        DK.set((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(T).slice(0, len), destPos);\n    }\n    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.hexlify)(DK);\n} //# sourceMappingURL=pbkdf2.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrcGJrZGYyQDUuNy4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9wYmtkZjIvbGliLmVzbS9wYmtkZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDNEM7QUFDUDtBQUMzQyxTQUFTRyxPQUFPQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxNQUFNLEVBQUVDLGFBQWE7SUFDcEVKLFdBQVdKLDhEQUFRQSxDQUFDSTtJQUNwQkMsT0FBT0wsOERBQVFBLENBQUNLO0lBQ2hCLElBQUlJO0lBQ0osSUFBSUMsSUFBSTtJQUNSLE1BQU1DLEtBQUssSUFBSUMsV0FBV0w7SUFDMUIsTUFBTU0sU0FBUyxJQUFJRCxXQUFXUCxLQUFLUyxNQUFNLEdBQUc7SUFDNUNELE9BQU9FLEdBQUcsQ0FBQ1Y7SUFDWCxzQ0FBc0M7SUFDdEMsSUFBSVc7SUFDSixJQUFJQztJQUNKLElBQUssSUFBSUMsSUFBSSxHQUFHQSxLQUFLUixHQUFHUSxJQUFLO1FBQ3pCLHNDQUFzQztRQUN0Q0wsTUFBTSxDQUFDUixLQUFLUyxNQUFNLENBQUMsR0FBRyxLQUFNLEtBQU07UUFDbENELE1BQU0sQ0FBQ1IsS0FBS1MsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFNLEtBQU07UUFDdENELE1BQU0sQ0FBQ1IsS0FBS1MsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFNLElBQUs7UUFDckNELE1BQU0sQ0FBQ1IsS0FBS1MsTUFBTSxHQUFHLEVBQUUsR0FBR0ksSUFBSTtRQUM5Qix1REFBdUQ7UUFDdkQsSUFBSUMsSUFBSW5CLDhEQUFRQSxDQUFDRSxnRUFBV0EsQ0FBQ00sZUFBZUosVUFBVVM7UUFDdEQsSUFBSSxDQUFDSixNQUFNO1lBQ1BBLE9BQU9VLEVBQUVMLE1BQU07WUFDZkcsSUFBSSxJQUFJTCxXQUFXSDtZQUNuQkMsSUFBSVUsS0FBS0MsSUFBSSxDQUFDZCxTQUFTRTtZQUN2Qk8sSUFBSVQsU0FBUyxDQUFDRyxJQUFJLEtBQUtEO1FBQzNCO1FBQ0EsdUJBQXVCO1FBQ3ZCUSxFQUFFRixHQUFHLENBQUNJO1FBQ04sSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUloQixZQUFZZ0IsSUFBSztZQUNqQyw4Q0FBOEM7WUFDOUNILElBQUluQiw4REFBUUEsQ0FBQ0UsZ0VBQVdBLENBQUNNLGVBQWVKLFVBQVVlO1lBQ2xELElBQUssSUFBSUksSUFBSSxHQUFHQSxJQUFJZCxNQUFNYyxJQUN0Qk4sQ0FBQyxDQUFDTSxFQUFFLElBQUlKLENBQUMsQ0FBQ0ksRUFBRTtRQUNwQjtRQUNBLE1BQU1DLFVBQVUsQ0FBQ04sSUFBSSxLQUFLVDtRQUMxQixNQUFNZ0IsTUFBT1AsTUFBTVIsSUFBSU0sSUFBSVA7UUFDM0IsNkJBQTZCO1FBQzdCRSxHQUFHSSxHQUFHLENBQUNmLDhEQUFRQSxDQUFDaUIsR0FBR1MsS0FBSyxDQUFDLEdBQUdELE1BQU1EO0lBQ3RDO0lBQ0EsT0FBT3ZCLDZEQUFPQSxDQUFDVTtBQUNuQixFQUNBLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZXRoZXJzcHJvamVjdCtwYmtkZjJANS43LjAvbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L3Bia2RmMi9saWIuZXNtL3Bia2RmMi5qcz8wYmY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgYXJyYXlpZnksIGhleGxpZnkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVIbWFjIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3NoYTJcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYmtkZjIocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbiwgaGFzaEFsZ29yaXRobSkge1xuICAgIHBhc3N3b3JkID0gYXJyYXlpZnkocGFzc3dvcmQpO1xuICAgIHNhbHQgPSBhcnJheWlmeShzYWx0KTtcbiAgICBsZXQgaExlbjtcbiAgICBsZXQgbCA9IDE7XG4gICAgY29uc3QgREsgPSBuZXcgVWludDhBcnJheShrZXlsZW4pO1xuICAgIGNvbnN0IGJsb2NrMSA9IG5ldyBVaW50OEFycmF5KHNhbHQubGVuZ3RoICsgNCk7XG4gICAgYmxvY2sxLnNldChzYWx0KTtcbiAgICAvL3NhbHQuY29weShibG9jazEsIDAsIDAsIHNhbHQubGVuZ3RoKVxuICAgIGxldCByO1xuICAgIGxldCBUO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGw7IGkrKykge1xuICAgICAgICAvL2Jsb2NrMS53cml0ZVVJbnQzMkJFKGksIHNhbHQubGVuZ3RoKVxuICAgICAgICBibG9jazFbc2FsdC5sZW5ndGhdID0gKGkgPj4gMjQpICYgMHhmZjtcbiAgICAgICAgYmxvY2sxW3NhbHQubGVuZ3RoICsgMV0gPSAoaSA+PiAxNikgJiAweGZmO1xuICAgICAgICBibG9jazFbc2FsdC5sZW5ndGggKyAyXSA9IChpID4+IDgpICYgMHhmZjtcbiAgICAgICAgYmxvY2sxW3NhbHQubGVuZ3RoICsgM10gPSBpICYgMHhmZjtcbiAgICAgICAgLy9sZXQgVSA9IGNyZWF0ZUhtYWMocGFzc3dvcmQpLnVwZGF0ZShibG9jazEpLmRpZ2VzdCgpO1xuICAgICAgICBsZXQgVSA9IGFycmF5aWZ5KGNvbXB1dGVIbWFjKGhhc2hBbGdvcml0aG0sIHBhc3N3b3JkLCBibG9jazEpKTtcbiAgICAgICAgaWYgKCFoTGVuKSB7XG4gICAgICAgICAgICBoTGVuID0gVS5sZW5ndGg7XG4gICAgICAgICAgICBUID0gbmV3IFVpbnQ4QXJyYXkoaExlbik7XG4gICAgICAgICAgICBsID0gTWF0aC5jZWlsKGtleWxlbiAvIGhMZW4pO1xuICAgICAgICAgICAgciA9IGtleWxlbiAtIChsIC0gMSkgKiBoTGVuO1xuICAgICAgICB9XG4gICAgICAgIC8vVS5jb3B5KFQsIDAsIDAsIGhMZW4pXG4gICAgICAgIFQuc2V0KFUpO1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICAgICAgLy9VID0gY3JlYXRlSG1hYyhwYXNzd29yZCkudXBkYXRlKFUpLmRpZ2VzdCgpO1xuICAgICAgICAgICAgVSA9IGFycmF5aWZ5KGNvbXB1dGVIbWFjKGhhc2hBbGdvcml0aG0sIHBhc3N3b3JkLCBVKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGhMZW47IGsrKylcbiAgICAgICAgICAgICAgICBUW2tdIF49IFVba107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFBvcyA9IChpIC0gMSkgKiBoTGVuO1xuICAgICAgICBjb25zdCBsZW4gPSAoaSA9PT0gbCA/IHIgOiBoTGVuKTtcbiAgICAgICAgLy9ULmNvcHkoREssIGRlc3RQb3MsIDAsIGxlbilcbiAgICAgICAgREsuc2V0KGFycmF5aWZ5KFQpLnNsaWNlKDAsIGxlbiksIGRlc3RQb3MpO1xuICAgIH1cbiAgICByZXR1cm4gaGV4bGlmeShESyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYmtkZjIuanMubWFwIl0sIm5hbWVzIjpbImFycmF5aWZ5IiwiaGV4bGlmeSIsImNvbXB1dGVIbWFjIiwicGJrZGYyIiwicGFzc3dvcmQiLCJzYWx0IiwiaXRlcmF0aW9ucyIsImtleWxlbiIsImhhc2hBbGdvcml0aG0iLCJoTGVuIiwibCIsIkRLIiwiVWludDhBcnJheSIsImJsb2NrMSIsImxlbmd0aCIsInNldCIsInIiLCJUIiwiaSIsIlUiLCJNYXRoIiwiY2VpbCIsImoiLCJrIiwiZGVzdFBvcyIsImxlbiIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ethersproject+pbkdf2@5.7.0/node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js\n");

/***/ })

};
;