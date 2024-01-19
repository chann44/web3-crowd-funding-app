"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/utf-8-validate@5.0.10";
exports.ids = ["vendor-chunks/utf-8-validate@5.0.10"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/fallback.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/fallback.js ***!
  \******************************************************************************************/
/***/ ((module) => {

eval("\n/**\n * Checks if a given buffer contains only correct UTF-8.\n * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by\n * Markus Kuhn.\n *\n * @param {Buffer} buf The buffer to check\n * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`\n * @public\n */ function isValidUTF8(buf) {\n    const len = buf.length;\n    let i = 0;\n    while(i < len){\n        if ((buf[i] & 0x80) === 0x00) {\n            i++;\n        } else if ((buf[i] & 0xe0) === 0xc0) {\n            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // overlong\n            ) {\n                return false;\n            }\n            i += 2;\n        } else if ((buf[i] & 0xf0) === 0xe0) {\n            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || // overlong\n            buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // surrogate (U+D800 - U+DFFF)\n            ) {\n                return false;\n            }\n            i += 3;\n        } else if ((buf[i] & 0xf8) === 0xf0) {\n            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || // overlong\n            buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF\n            ) {\n                return false;\n            }\n            i += 4;\n        } else {\n            return false;\n        }\n    }\n    return true;\n}\nmodule.exports = isValidUTF8;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXRmLTgtdmFsaWRhdGVANS4wLjEwL25vZGVfbW9kdWxlcy91dGYtOC12YWxpZGF0ZS9mYWxsYmFjay5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7OztDQVFDLEdBQ0QsU0FBU0EsWUFBWUMsR0FBRztJQUN0QixNQUFNQyxNQUFNRCxJQUFJRSxNQUFNO0lBQ3RCLElBQUlDLElBQUk7SUFFUixNQUFPQSxJQUFJRixJQUFLO1FBQ2QsSUFBSSxDQUFDRCxHQUFHLENBQUNHLEVBQUUsR0FBRyxJQUFHLE1BQU8sTUFBTTtZQUM1QkE7UUFDRixPQUFPLElBQUksQ0FBQ0gsR0FBRyxDQUFDRyxFQUFFLEdBQUcsSUFBRyxNQUFPLE1BQU07WUFDbkMsSUFDRUEsSUFBSSxNQUFNRixPQUNWLENBQUNELEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCLENBQUNILEdBQUcsQ0FBQ0csRUFBRSxHQUFHLElBQUcsTUFBTyxLQUFNLFdBQVc7Y0FDckM7Z0JBQ0EsT0FBTztZQUNUO1lBRUFBLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQ0gsR0FBRyxDQUFDRyxFQUFFLEdBQUcsSUFBRyxNQUFPLE1BQU07WUFDbkMsSUFDRUEsSUFBSSxLQUFLRixPQUNULENBQUNELEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQ3hCSCxHQUFHLENBQUNHLEVBQUUsS0FBSyxRQUFRLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxFQUFFLEdBQUcsSUFBRyxNQUFPLFFBQVMsV0FBVztZQUMvREgsR0FBRyxDQUFDRyxFQUFFLEtBQUssUUFBUSxDQUFDSCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLElBQUcsTUFBTyxLQUFNLDhCQUE4QjtjQUMvRTtnQkFDQSxPQUFPO1lBQ1Q7WUFFQUEsS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDSCxHQUFHLENBQUNHLEVBQUUsR0FBRyxJQUFHLE1BQU8sTUFBTTtZQUNuQyxJQUNFQSxJQUFJLEtBQUtGLE9BQ1QsQ0FBQ0QsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxJQUFHLE1BQU8sUUFDeEIsQ0FBQ0gsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxJQUFHLE1BQU8sUUFDeEIsQ0FBQ0gsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxJQUFHLE1BQU8sUUFDeEJILEdBQUcsQ0FBQ0csRUFBRSxLQUFLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRyxJQUFJLEVBQUUsR0FBRyxJQUFHLE1BQU8sUUFBUyxXQUFXO1lBQy9ESCxHQUFHLENBQUNHLEVBQUUsS0FBSyxRQUFRSCxHQUFHLENBQUNHLElBQUksRUFBRSxHQUFHLFFBQVFILEdBQUcsQ0FBQ0csRUFBRSxHQUFHLEtBQU0sYUFBYTtjQUNwRTtnQkFDQSxPQUFPO1lBQ1Q7WUFFQUEsS0FBSztRQUNQLE9BQU87WUFDTCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBQyxPQUFPQyxPQUFPLEdBQUdOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3V0Zi04LXZhbGlkYXRlQDUuMC4xMC9ub2RlX21vZHVsZXMvdXRmLTgtdmFsaWRhdGUvZmFsbGJhY2suanM/YjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gYnVmZmVyIGNvbnRhaW5zIG9ubHkgY29ycmVjdCBVVEYtOC5cbiAqIFBvcnRlZCBmcm9tIGh0dHBzOi8vd3d3LmNsLmNhbS5hYy51ay8lN0VtZ2syNS91Y3MvdXRmOF9jaGVjay5jIGJ5XG4gKiBNYXJrdXMgS3Vobi5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmIFRoZSBidWZmZXIgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgYnVmYCBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTgsIGVsc2UgYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBpc1ZhbGlkVVRGOChidWYpIHtcbiAgY29uc3QgbGVuID0gYnVmLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgaWYgKChidWZbaV0gJiAweDgwKSA9PT0gMHgwMCkgeyAgLy8gMHh4eHh4eHhcbiAgICAgIGkrKztcbiAgICB9IGVsc2UgaWYgKChidWZbaV0gJiAweGUwKSA9PT0gMHhjMCkgeyAgLy8gMTEweHh4eHggMTB4eHh4eHhcbiAgICAgIGlmIChcbiAgICAgICAgaSArIDEgPT09IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaV0gJiAweGZlKSA9PT0gMHhjMCAgLy8gb3ZlcmxvbmdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gMjtcbiAgICB9IGVsc2UgaWYgKChidWZbaV0gJiAweGYwKSA9PT0gMHhlMCkgeyAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgIGlmIChcbiAgICAgICAgaSArIDIgPj0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgMl0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICBidWZbaV0gPT09IDB4ZTAgJiYgKGJ1ZltpICsgMV0gJiAweGUwKSA9PT0gMHg4MCB8fCAgLy8gb3ZlcmxvbmdcbiAgICAgICAgYnVmW2ldID09PSAweGVkICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4YTAgIC8vIHN1cnJvZ2F0ZSAoVStEODAwIC0gVStERkZGKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSAzO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZjgpID09PSAweGYwKSB7ICAvLyAxMTExMHh4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMyA+PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDNdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgYnVmW2ldID09PSAweGYwICYmIChidWZbaSArIDFdICYgMHhmMCkgPT09IDB4ODAgfHwgIC8vIG92ZXJsb25nXG4gICAgICAgIGJ1ZltpXSA9PT0gMHhmNCAmJiBidWZbaSArIDFdID4gMHg4ZiB8fCBidWZbaV0gPiAweGY0ICAvLyA+IFUrMTBGRkZGXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1ZhbGlkVVRGODtcbiJdLCJuYW1lcyI6WyJpc1ZhbGlkVVRGOCIsImJ1ZiIsImxlbiIsImxlbmd0aCIsImkiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/fallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/index.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    module.exports = __webpack_require__(/*! node-gyp-build */ \"(ssr)/./node_modules/.pnpm/node-gyp-build@4.8.0/node_modules/node-gyp-build/index.js\")(__dirname);\n} catch (e) {\n    module.exports = __webpack_require__(/*! ./fallback */ \"(ssr)/./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/fallback.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXRmLTgtdmFsaWRhdGVANS4wLjEwL25vZGVfbW9kdWxlcy91dGYtOC12YWxpZGF0ZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUk7SUFDRkEsT0FBT0MsT0FBTyxHQUFHQyxtQkFBT0EsQ0FBQyw4R0FBa0JDO0FBQzdDLEVBQUUsT0FBT0MsR0FBRztJQUNWSixrSkFBeUI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vdXRmLTgtdmFsaWRhdGVANS4wLjEwL25vZGVfbW9kdWxlcy91dGYtOC12YWxpZGF0ZS9pbmRleC5qcz83MDIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdub2RlLWd5cC1idWlsZCcpKF9fZGlybmFtZSk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWxsYmFjaycpO1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX19kaXJuYW1lIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/utf-8-validate@5.0.10/node_modules/utf-8-validate/index.js\n");

/***/ })

};
;