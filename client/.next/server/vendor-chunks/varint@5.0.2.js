"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/varint@5.0.2";
exports.ids = ["vendor-chunks/varint@5.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = read;\nvar MSB = 0x80, REST = 0x7F;\nfunction read(buf, offset) {\n    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;\n    do {\n        if (counter >= l) {\n            read.bytes = 0;\n            throw new RangeError(\"Could not decode varint\");\n        }\n        b = buf[counter++];\n        res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);\n        shift += 7;\n    }while (b >= MSB);\n    read.bytes = counter - offset;\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZGVjb2RlLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixJQUFJQyxNQUFNLE1BQ05DLE9BQU87QUFFWCxTQUFTRixLQUFLRyxHQUFHLEVBQUVDLE1BQU07SUFDdkIsSUFBSUMsTUFBUyxHQUNURCxTQUFTQSxVQUFVLEdBQ25CRSxRQUFTLEdBQ1RDLFVBQVVILFFBQ1ZJLEdBQ0FDLElBQUlOLElBQUlPLE1BQU07SUFFbEIsR0FBRztRQUNELElBQUlILFdBQVdFLEdBQUc7WUFDaEJULEtBQUtXLEtBQUssR0FBRztZQUNiLE1BQU0sSUFBSUMsV0FBVztRQUN2QjtRQUNBSixJQUFJTCxHQUFHLENBQUNJLFVBQVU7UUFDbEJGLE9BQU9DLFFBQVEsS0FDWCxDQUFDRSxJQUFJTixJQUFHLEtBQU1JLFFBQ2QsQ0FBQ0UsSUFBSU4sSUFBRyxJQUFLVyxLQUFLQyxHQUFHLENBQUMsR0FBR1I7UUFDN0JBLFNBQVM7SUFDWCxRQUFTRSxLQUFLUCxLQUFJO0lBRWxCRCxLQUFLVyxLQUFLLEdBQUdKLFVBQVVIO0lBRXZCLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZGVjb2RlLmpzPzgyY2EiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZWFkXG5cbnZhciBNU0IgPSAweDgwXG4gICwgUkVTVCA9IDB4N0ZcblxuZnVuY3Rpb24gcmVhZChidWYsIG9mZnNldCkge1xuICB2YXIgcmVzICAgID0gMFxuICAgICwgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgICAsIHNoaWZ0ICA9IDBcbiAgICAsIGNvdW50ZXIgPSBvZmZzZXRcbiAgICAsIGJcbiAgICAsIGwgPSBidWYubGVuZ3RoXG5cbiAgZG8ge1xuICAgIGlmIChjb3VudGVyID49IGwpIHtcbiAgICAgIHJlYWQuYnl0ZXMgPSAwXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ291bGQgbm90IGRlY29kZSB2YXJpbnQnKVxuICAgIH1cbiAgICBiID0gYnVmW2NvdW50ZXIrK11cbiAgICByZXMgKz0gc2hpZnQgPCAyOFxuICAgICAgPyAoYiAmIFJFU1QpIDw8IHNoaWZ0XG4gICAgICA6IChiICYgUkVTVCkgKiBNYXRoLnBvdygyLCBzaGlmdClcbiAgICBzaGlmdCArPSA3XG4gIH0gd2hpbGUgKGIgPj0gTVNCKVxuXG4gIHJlYWQuYnl0ZXMgPSBjb3VudGVyIC0gb2Zmc2V0XG5cbiAgcmV0dXJuIHJlc1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkIiwiTVNCIiwiUkVTVCIsImJ1ZiIsIm9mZnNldCIsInJlcyIsInNoaWZ0IiwiY291bnRlciIsImIiLCJsIiwibGVuZ3RoIiwiYnl0ZXMiLCJSYW5nZUVycm9yIiwiTWF0aCIsInBvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = encode;\nvar MSB = 0x80, REST = 0x7F, MSBALL = ~REST, INT = Math.pow(2, 31);\nfunction encode(num, out, offset) {\n    out = out || [];\n    offset = offset || 0;\n    var oldOffset = offset;\n    while(num >= INT){\n        out[offset++] = num & 0xFF | MSB;\n        num /= 128;\n    }\n    while(num & MSBALL){\n        out[offset++] = num & 0xFF | MSB;\n        num >>>= 7;\n    }\n    out[offset] = num | 0;\n    encode.bytes = offset - oldOffset + 1;\n    return out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvZW5jb2RlLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixJQUFJQyxNQUFNLE1BQ05DLE9BQU8sTUFDUEMsU0FBUyxDQUFDRCxNQUNWRSxNQUFNQyxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUV0QixTQUFTTixPQUFPTyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsTUFBTTtJQUM5QkQsTUFBTUEsT0FBTyxFQUFFO0lBQ2ZDLFNBQVNBLFVBQVU7SUFDbkIsSUFBSUMsWUFBWUQ7SUFFaEIsTUFBTUYsT0FBT0gsSUFBSztRQUNoQkksR0FBRyxDQUFDQyxTQUFTLEdBQUcsTUFBTyxPQUFRUjtRQUMvQk0sT0FBTztJQUNUO0lBQ0EsTUFBTUEsTUFBTUosT0FBUTtRQUNsQkssR0FBRyxDQUFDQyxTQUFTLEdBQUcsTUFBTyxPQUFRUjtRQUMvQk0sU0FBUztJQUNYO0lBQ0FDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHRixNQUFNO0lBRXBCUCxPQUFPVyxLQUFLLEdBQUdGLFNBQVNDLFlBQVk7SUFFcEMsT0FBT0Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS92YXJpbnRANS4wLjIvbm9kZV9tb2R1bGVzL3ZhcmludC9lbmNvZGUuanM/OWY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGVuY29kZVxuXG52YXIgTVNCID0gMHg4MFxuICAsIFJFU1QgPSAweDdGXG4gICwgTVNCQUxMID0gflJFU1RcbiAgLCBJTlQgPSBNYXRoLnBvdygyLCAzMSlcblxuZnVuY3Rpb24gZW5jb2RlKG51bSwgb3V0LCBvZmZzZXQpIHtcbiAgb3V0ID0gb3V0IHx8IFtdXG4gIG9mZnNldCA9IG9mZnNldCB8fCAwXG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXRcblxuICB3aGlsZShudW0gPj0gSU5UKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IChudW0gJiAweEZGKSB8IE1TQlxuICAgIG51bSAvPSAxMjhcbiAgfVxuICB3aGlsZShudW0gJiBNU0JBTEwpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gKG51bSAmIDB4RkYpIHwgTVNCXG4gICAgbnVtID4+Pj0gN1xuICB9XG4gIG91dFtvZmZzZXRdID0gbnVtIHwgMFxuICBcbiAgZW5jb2RlLmJ5dGVzID0gb2Zmc2V0IC0gb2xkT2Zmc2V0ICsgMVxuICBcbiAgcmV0dXJuIG91dFxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbmNvZGUiLCJNU0IiLCJSRVNUIiwiTVNCQUxMIiwiSU5UIiwiTWF0aCIsInBvdyIsIm51bSIsIm91dCIsIm9mZnNldCIsIm9sZE9mZnNldCIsImJ5dGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = {\n    encode: __webpack_require__(/*! ./encode.js */ \"(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/encode.js\"),\n    decode: __webpack_require__(/*! ./decode.js */ \"(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/decode.js\"),\n    encodingLength: __webpack_require__(/*! ./length.js */ \"(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js\")\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBQSxPQUFPQyxPQUFPLEdBQUc7SUFDYkMsUUFBUUMsbUJBQU9BLENBQUM7SUFDaEJDLFFBQVFELG1CQUFPQSxDQUFDO0lBQ2hCRSxnQkFBZ0JGLG1CQUFPQSxDQUFDO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3ZhcmludEA1LjAuMi9ub2RlX21vZHVsZXMvdmFyaW50L2luZGV4LmpzPzIyM2YiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZW5jb2RlOiByZXF1aXJlKCcuL2VuY29kZS5qcycpXG4gICwgZGVjb2RlOiByZXF1aXJlKCcuL2RlY29kZS5qcycpXG4gICwgZW5jb2RpbmdMZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoLmpzJylcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW5jb2RlIiwicmVxdWlyZSIsImRlY29kZSIsImVuY29kaW5nTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\nvar N1 = Math.pow(2, 7);\nvar N2 = Math.pow(2, 14);\nvar N3 = Math.pow(2, 21);\nvar N4 = Math.pow(2, 28);\nvar N5 = Math.pow(2, 35);\nvar N6 = Math.pow(2, 42);\nvar N7 = Math.pow(2, 49);\nvar N8 = Math.pow(2, 56);\nvar N9 = Math.pow(2, 63);\nmodule.exports = function(value) {\n    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFyaW50QDUuMC4yL25vZGVfbW9kdWxlcy92YXJpbnQvbGVuZ3RoLmpzIiwibWFwcGluZ3MiOiI7QUFDQSxJQUFJQSxLQUFLQyxLQUFLQyxHQUFHLENBQUMsR0FBSTtBQUN0QixJQUFJQyxLQUFLRixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJRSxLQUFLSCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJRyxLQUFLSixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJSSxLQUFLTCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJSyxLQUFLTixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJTSxLQUFLUCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJTyxLQUFLUixLQUFLQyxHQUFHLENBQUMsR0FBRztBQUNyQixJQUFJUSxLQUFLVCxLQUFLQyxHQUFHLENBQUMsR0FBRztBQUVyQlMsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLEtBQUs7SUFDOUIsT0FDRUEsUUFBUWIsS0FBSyxJQUNiYSxRQUFRVixLQUFLLElBQ2JVLFFBQVFULEtBQUssSUFDYlMsUUFBUVIsS0FBSyxJQUNiUSxRQUFRUCxLQUFLLElBQ2JPLFFBQVFOLEtBQUssSUFDYk0sUUFBUUwsS0FBSyxJQUNiSyxRQUFRSixLQUFLLElBQ2JJLFFBQVFILEtBQUssSUFDQTtBQUVqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS92YXJpbnRANS4wLjIvbm9kZV9tb2R1bGVzL3ZhcmludC9sZW5ndGguanM/NGNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBOMSA9IE1hdGgucG93KDIsICA3KVxudmFyIE4yID0gTWF0aC5wb3coMiwgMTQpXG52YXIgTjMgPSBNYXRoLnBvdygyLCAyMSlcbnZhciBONCA9IE1hdGgucG93KDIsIDI4KVxudmFyIE41ID0gTWF0aC5wb3coMiwgMzUpXG52YXIgTjYgPSBNYXRoLnBvdygyLCA0MilcbnZhciBONyA9IE1hdGgucG93KDIsIDQ5KVxudmFyIE44ID0gTWF0aC5wb3coMiwgNTYpXG52YXIgTjkgPSBNYXRoLnBvdygyLCA2MylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSA8IE4xID8gMVxuICA6IHZhbHVlIDwgTjIgPyAyXG4gIDogdmFsdWUgPCBOMyA/IDNcbiAgOiB2YWx1ZSA8IE40ID8gNFxuICA6IHZhbHVlIDwgTjUgPyA1XG4gIDogdmFsdWUgPCBONiA/IDZcbiAgOiB2YWx1ZSA8IE43ID8gN1xuICA6IHZhbHVlIDwgTjggPyA4XG4gIDogdmFsdWUgPCBOOSA/IDlcbiAgOiAgICAgICAgICAgICAgMTBcbiAgKVxufVxuIl0sIm5hbWVzIjpbIk4xIiwiTWF0aCIsInBvdyIsIk4yIiwiTjMiLCJONCIsIk41IiwiTjYiLCJONyIsIk44IiwiTjkiLCJtb2R1bGUiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/varint@5.0.2/node_modules/varint/length.js\n");

/***/ })

};
;