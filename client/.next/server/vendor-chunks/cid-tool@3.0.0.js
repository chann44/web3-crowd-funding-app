"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cid-tool@3.0.0";
exports.ids = ["vendor-chunks/cid-tool@3.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/base32.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/base32.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst CID = __webpack_require__(/*! cids */ \"(ssr)/./node_modules/.pnpm/cids@1.1.9/node_modules/cids/src/index.js\");\n// @ts-ignore no types\nconst explain = __webpack_require__(/*! explain-error */ \"(ssr)/./node_modules/.pnpm/explain-error@1.0.4/node_modules/explain-error/index.js\");\n/**\n * @param {CID | string | Uint8Array} cid\n */ module.exports = function base32(cid) {\n    try {\n        cid = new CID(cid);\n    } catch (err) {\n        throw explain(err, `invalid cid: ${cid}`);\n    }\n    if (cid.version !== 1) {\n        cid = cid.toV1();\n    }\n    return cid.toBaseEncodedString(\"base32\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2Jhc2UzMi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLE1BQU1DLG1CQUFPQSxDQUFDO0FBQ3BCLHNCQUFzQjtBQUN0QixNQUFNQyxVQUFVRCxtQkFBT0EsQ0FBQztBQUV4Qjs7Q0FFQyxHQUNERSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsT0FBUUMsR0FBRztJQUNuQyxJQUFJO1FBQ0ZBLE1BQU0sSUFBSU4sSUFBSU07SUFDaEIsRUFBRSxPQUFPQyxLQUFLO1FBQ1osTUFBTUwsUUFBUUssS0FBSyxDQUFDLGFBQWEsRUFBRUQsSUFBSSxDQUFDO0lBQzFDO0lBRUEsSUFBSUEsSUFBSUUsT0FBTyxLQUFLLEdBQUc7UUFDckJGLE1BQU1BLElBQUlHLElBQUk7SUFDaEI7SUFFQSxPQUFPSCxJQUFJSSxtQkFBbUIsQ0FBQztBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jaWQtdG9vbEAzLjAuMC9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvYmFzZTMyLmpzPzFhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IENJRCA9IHJlcXVpcmUoJ2NpZHMnKVxuLy8gQHRzLWlnbm9yZSBubyB0eXBlc1xuY29uc3QgZXhwbGFpbiA9IHJlcXVpcmUoJ2V4cGxhaW4tZXJyb3InKVxuXG4vKipcbiAqIEBwYXJhbSB7Q0lEIHwgc3RyaW5nIHwgVWludDhBcnJheX0gY2lkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFzZTMyIChjaWQpIHtcbiAgdHJ5IHtcbiAgICBjaWQgPSBuZXcgQ0lEKGNpZClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgZXhwbGFpbihlcnIsIGBpbnZhbGlkIGNpZDogJHtjaWR9YClcbiAgfVxuXG4gIGlmIChjaWQudmVyc2lvbiAhPT0gMSkge1xuICAgIGNpZCA9IGNpZC50b1YxKClcbiAgfVxuXG4gIHJldHVybiBjaWQudG9CYXNlRW5jb2RlZFN0cmluZygnYmFzZTMyJylcbn1cbiJdLCJuYW1lcyI6WyJDSUQiLCJyZXF1aXJlIiwiZXhwbGFpbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJiYXNlMzIiLCJjaWQiLCJlcnIiLCJ2ZXJzaW9uIiwidG9WMSIsInRvQmFzZUVuY29kZWRTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/base32.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/bases.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/bases.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst multibase = __webpack_require__(/*! multibase */ \"(ssr)/./node_modules/.pnpm/multibase@4.0.6/node_modules/multibase/src/index.js\");\nmodule.exports = function bases() {\n    const output = [];\n    for (const base of Object.values(multibase.names)){\n        output.push({\n            name: base.name,\n            code: base.code\n        });\n    }\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2Jhc2VzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsWUFBWUMsbUJBQU9BLENBQUM7QUFFMUJDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN4QixNQUFNQyxTQUFTLEVBQUU7SUFFakIsS0FBSyxNQUFNQyxRQUFRQyxPQUFPQyxNQUFNLENBQUNSLFVBQVVTLEtBQUssRUFBRztRQUNqREosT0FBT0ssSUFBSSxDQUFDO1lBQUVDLE1BQU1MLEtBQUtLLElBQUk7WUFBRUMsTUFBTU4sS0FBS00sSUFBSTtRQUFDO0lBQ2pEO0lBRUEsT0FBT1A7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jaWQtdG9vbEAzLjAuMC9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2NvcmUvYmFzZXMuanM/YjlkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgbXVsdGliYXNlID0gcmVxdWlyZSgnbXVsdGliYXNlJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlcyAoKSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdXG5cbiAgZm9yIChjb25zdCBiYXNlIG9mIE9iamVjdC52YWx1ZXMobXVsdGliYXNlLm5hbWVzKSkge1xuICAgIG91dHB1dC5wdXNoKHsgbmFtZTogYmFzZS5uYW1lLCBjb2RlOiBiYXNlLmNvZGUgfSlcbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cbiJdLCJuYW1lcyI6WyJtdWx0aWJhc2UiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImJhc2VzIiwib3V0cHV0IiwiYmFzZSIsIk9iamVjdCIsInZhbHVlcyIsIm5hbWVzIiwicHVzaCIsIm5hbWUiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/bases.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/codecs.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/codecs.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst CID = __webpack_require__(/*! cids */ \"(ssr)/./node_modules/.pnpm/cids@1.1.9/node_modules/cids/src/index.js\");\nmodule.exports = function codecs() {\n    const output = [];\n    for (const [key, value] of Object.entries(CID.codecs)){\n        output.push({\n            name: key,\n            code: value\n        });\n    }\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2NvZGVjcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLE1BQU1DLG1CQUFPQSxDQUFDO0FBRXBCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDeEIsTUFBTUMsU0FBUyxFQUFFO0lBRWpCLEtBQUssTUFBTSxDQUFDQyxLQUFLQyxNQUFNLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ1QsSUFBSUksTUFBTSxFQUFHO1FBQ3JEQyxPQUFPSyxJQUFJLENBQUM7WUFBRUMsTUFBTUw7WUFBS00sTUFBTUw7UUFBTTtJQUN2QztJQUVBLE9BQU9GO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2NvZGVjcy5qcz82OTEzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBDSUQgPSByZXF1aXJlKCdjaWRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb2RlY3MgKCkge1xuICBjb25zdCBvdXRwdXQgPSBbXVxuXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKENJRC5jb2RlY3MpKSB7XG4gICAgb3V0cHV0LnB1c2goeyBuYW1lOiBrZXksIGNvZGU6IHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG4iXSwibmFtZXMiOlsiQ0lEIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb2RlY3MiLCJvdXRwdXQiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJwdXNoIiwibmFtZSIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/codecs.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/format.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/format.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst CID = __webpack_require__(/*! cids */ \"(ssr)/./node_modules/.pnpm/cids@1.1.9/node_modules/cids/src/index.js\");\nconst bases = __webpack_require__(/*! ./bases */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/bases.js\");\nconst codecs = __webpack_require__(/*! ./codecs */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/codecs.js\");\n// @ts-ignore no types\nconst explain = __webpack_require__(/*! explain-error */ \"(ssr)/./node_modules/.pnpm/explain-error@1.0.4/node_modules/explain-error/index.js\");\nconst multibase = __webpack_require__(/*! multibase */ \"(ssr)/./node_modules/.pnpm/multibase@4.0.6/node_modules/multibase/src/index.js\");\nconst multihash = __webpack_require__(/*! multihashes */ \"(ssr)/./node_modules/.pnpm/multihashes@4.0.3/node_modules/multihashes/src/index.js\");\nconst uint8ArrayToString = __webpack_require__(/*! uint8arrays/to-string */ \"(ssr)/./node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/to-string.js\");\n/**\n * @typedef {import('multibase').BaseName} BaseName\n * @typedef {import('multibase').BaseNameOrCode} BaseNameOrCode\n */ /**\n * @param {CID | string | Uint8Array} cid\n * @param {import('./types').FormatOptions} options\n */ module.exports = function format(cid, options) {\n    options = options || {};\n    let formatStr = options.format || \"%s\";\n    if (formatStr === \"prefix\") {\n        formatStr = \"%P\";\n    }\n    if (!isString(formatStr) || formatStr.indexOf(\"%\") === -1) {\n        throw new Error(`invalid format string: ${formatStr}`);\n    }\n    const originalCid = cid;\n    try {\n        cid = new CID(cid);\n    } catch (err) {\n        throw explain(err, `invalid cid: ${cid}`);\n    }\n    if (options.cidVersion != null && cid.version !== options.cidVersion) {\n        if (options.cidVersion === 0) {\n            cid = cid.toV0();\n        } else if (options.cidVersion === 1) {\n            cid = cid.toV1();\n        } else {\n            throw new Error(`invalid cid version: ${options.cidVersion}`);\n        }\n    }\n    /**\n   * @type {BaseName}\n   */ let base = \"base58btc\";\n    if (options.base) {\n        // Validate passed base name/code\n        base = findBase(options.base).name;\n    } else if (isString(originalCid)) {\n        // Use base of input CID if string\n        base = multibase.isEncoded(originalCid) || base;\n    }\n    return formatStr.replace(/%([a-zA-Z%])/g, replacer(cid, base));\n};\n/**\n * @param {*} obj\n * @returns {obj is String}\n */ function isString(obj) {\n    return Object.prototype.toString.call(obj) === \"[object String]\";\n}\n/**\n * @param {CID} cid\n * @param {BaseName} base\n * @returns {(match: any, specifier: string) => string}\n */ function replacer(cid, base) {\n    /**\n   * @param {*} match\n   * @param {string} specifier\n   */ const replace = (match, specifier)=>{\n        switch(specifier){\n            case \"%\":\n                return \"%\";\n            case \"b\":\n                return base;\n            case \"B\":\n                return findBase(base).code;\n            case \"v\":\n                return `cidv${cid.version}`;\n            case \"V\":\n                return cid.version.toString();\n            case \"c\":\n                return cid.codec;\n            case \"C\":\n                return findCodec(cid).toString();\n            case \"h\":\n                return multihash.decode(cid.multihash).name;\n            case \"H\":\n                return multihash.decode(cid.multihash).code.toString();\n            case \"L\":\n                return multihash.decode(cid.multihash).length.toString();\n            case \"m\":\n                return uint8ArrayToString(multibase.encode(base, cid.multihash));\n            case \"M\":\n                return uint8ArrayToString(cid.multihash, base);\n            case \"d\":\n                return uint8ArrayToString(multibase.encode(base, multihash.decode(cid.multihash).digest));\n            case \"D\":\n                return uint8ArrayToString(multihash.decode(cid.multihash).digest, base);\n            case \"s\":\n                return cid.toString(base);\n            case \"S\":\n                return cid.version === 1 ? cid.toString(base).slice(1) : uint8ArrayToString(cid.bytes, base);\n            case \"P\":\n                return prefix(cid);\n            default:\n                throw new Error(`unrecognized specifier in format string: ${specifier}`);\n        }\n    };\n    return replace;\n}\n/**\n * @param {BaseNameOrCode} nameOrCode\n */ function findBase(nameOrCode) {\n    const baseNameCode = bases().find((b)=>b.code === nameOrCode || b.name === nameOrCode);\n    if (!baseNameCode) {\n        throw new Error(`invalid multibase: ${nameOrCode}`);\n    }\n    return baseNameCode;\n}\n/**\n * @param {CID} cid\n */ function findCodec(cid) {\n    const codec = codecs().find((c)=>c.name === cid.codec);\n    if (!codec) {\n        throw new Error(`invalid codec: ${cid.codec}`);\n    }\n    return codec.code;\n}\n/**\n * @param {CID} cid\n */ function prefix(cid) {\n    const { name, length } = multihash.decode(cid.multihash);\n    return `cidv${cid.version}-${cid.codec}-${name}-${length}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2Zvcm1hdC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLE1BQU1DLG1CQUFPQSxDQUFDO0FBQ3BCLE1BQU1DLFFBQVFELG1CQUFPQSxDQUFDO0FBQ3RCLE1BQU1FLFNBQVNGLG1CQUFPQSxDQUFDO0FBQ3ZCLHNCQUFzQjtBQUN0QixNQUFNRyxVQUFVSCxtQkFBT0EsQ0FBQztBQUN4QixNQUFNSSxZQUFZSixtQkFBT0EsQ0FBQztBQUMxQixNQUFNSyxZQUFZTCxtQkFBT0EsQ0FBQztBQUMxQixNQUFNTSxxQkFBcUJOLG1CQUFPQSxDQUFDO0FBRW5DOzs7Q0FHQyxHQUVEOzs7Q0FHQyxHQUNETyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsT0FBUUMsR0FBRyxFQUFFQyxPQUFPO0lBQzVDQSxVQUFVQSxXQUFXLENBQUM7SUFFdEIsSUFBSUMsWUFBWUQsUUFBUUYsTUFBTSxJQUFJO0lBRWxDLElBQUlHLGNBQWMsVUFBVTtRQUMxQkEsWUFBWTtJQUNkO0lBRUEsSUFBSSxDQUFDQyxTQUFTRCxjQUFjQSxVQUFVRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7UUFDekQsTUFBTSxJQUFJQyxNQUFNLENBQUMsdUJBQXVCLEVBQUVILFVBQVUsQ0FBQztJQUN2RDtJQUVBLE1BQU1JLGNBQWNOO0lBRXBCLElBQUk7UUFDRkEsTUFBTSxJQUFJWCxJQUFJVztJQUNoQixFQUFFLE9BQU9PLEtBQUs7UUFDWixNQUFNZCxRQUFRYyxLQUFLLENBQUMsYUFBYSxFQUFFUCxJQUFJLENBQUM7SUFDMUM7SUFFQSxJQUFJQyxRQUFRTyxVQUFVLElBQUksUUFBUVIsSUFBSVMsT0FBTyxLQUFLUixRQUFRTyxVQUFVLEVBQUU7UUFDcEUsSUFBSVAsUUFBUU8sVUFBVSxLQUFLLEdBQUc7WUFDNUJSLE1BQU1BLElBQUlVLElBQUk7UUFDaEIsT0FBTyxJQUFJVCxR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bUJBQW1CLEVBQUU4QixXQUFXLENBQUM7SUFDcEQ7SUFFQSxPQUFPQztBQUNUO0FBRUE7O0NBRUMsR0FDRCxTQUFTVCxVQUFXM0IsR0FBRztJQUNyQixNQUFNMEIsUUFBUWxDLFNBQVM2QyxJQUFJLENBQUNFLENBQUFBLElBQUtBLEVBQUV6QixJQUFJLEtBQUtkLElBQUkwQixLQUFLO0lBRXJELElBQUksQ0FBQ0EsT0FBTztRQUNWLE1BQU0sSUFBSXJCLE1BQU0sQ0FBQyxlQUFlLEVBQUVMLElBQUkwQixLQUFLLENBQUMsQ0FBQztJQUMvQztJQUVBLE9BQU9BLE1BQU1ELElBQUk7QUFDbkI7QUFFQTs7Q0FFQyxHQUNELFNBQVNTLE9BQVFsQyxHQUFHO0lBQ2xCLE1BQU0sRUFBRWMsSUFBSSxFQUFFZSxNQUFNLEVBQUUsR0FBR2xDLFVBQVVpQyxNQUFNLENBQUM1QixJQUFJTCxTQUFTO0lBQ3ZELE9BQU8sQ0FBQyxJQUFJLEVBQUVLLElBQUlTLE9BQU8sQ0FBQyxDQUFDLEVBQUVULElBQUkwQixLQUFLLENBQUMsQ0FBQyxFQUFFWixLQUFLLENBQUMsRUFBRWUsT0FBTyxDQUFDO0FBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2NpZC10b29sQDMuMC4wL25vZGVfbW9kdWxlcy9jaWQtdG9vbC9zcmMvY29yZS9mb3JtYXQuanM/M2Y0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgQ0lEID0gcmVxdWlyZSgnY2lkcycpXG5jb25zdCBiYXNlcyA9IHJlcXVpcmUoJy4vYmFzZXMnKVxuY29uc3QgY29kZWNzID0gcmVxdWlyZSgnLi9jb2RlY3MnKVxuLy8gQHRzLWlnbm9yZSBubyB0eXBlc1xuY29uc3QgZXhwbGFpbiA9IHJlcXVpcmUoJ2V4cGxhaW4tZXJyb3InKVxuY29uc3QgbXVsdGliYXNlID0gcmVxdWlyZSgnbXVsdGliYXNlJylcbmNvbnN0IG11bHRpaGFzaCA9IHJlcXVpcmUoJ211bHRpaGFzaGVzJylcbmNvbnN0IHVpbnQ4QXJyYXlUb1N0cmluZyA9IHJlcXVpcmUoJ3VpbnQ4YXJyYXlzL3RvLXN0cmluZycpXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbXVsdGliYXNlJykuQmFzZU5hbWV9IEJhc2VOYW1lXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtdWx0aWJhc2UnKS5CYXNlTmFtZU9yQ29kZX0gQmFzZU5hbWVPckNvZGVcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7Q0lEIHwgc3RyaW5nIHwgVWludDhBcnJheX0gY2lkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi90eXBlcycpLkZvcm1hdE9wdGlvbnN9IG9wdGlvbnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JtYXQgKGNpZCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCBmb3JtYXRTdHIgPSBvcHRpb25zLmZvcm1hdCB8fCAnJXMnXG5cbiAgaWYgKGZvcm1hdFN0ciA9PT0gJ3ByZWZpeCcpIHtcbiAgICBmb3JtYXRTdHIgPSAnJVAnXG4gIH1cblxuICBpZiAoIWlzU3RyaW5nKGZvcm1hdFN0cikgfHwgZm9ybWF0U3RyLmluZGV4T2YoJyUnKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgZm9ybWF0IHN0cmluZzogJHtmb3JtYXRTdHJ9YClcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsQ2lkID0gY2lkXG5cbiAgdHJ5IHtcbiAgICBjaWQgPSBuZXcgQ0lEKGNpZClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgZXhwbGFpbihlcnIsIGBpbnZhbGlkIGNpZDogJHtjaWR9YClcbiAgfVxuXG4gIGlmIChvcHRpb25zLmNpZFZlcnNpb24gIT0gbnVsbCAmJiBjaWQudmVyc2lvbiAhPT0gb3B0aW9ucy5jaWRWZXJzaW9uKSB7XG4gICAgaWYgKG9wdGlvbnMuY2lkVmVyc2lvbiA9PT0gMCkge1xuICAgICAgY2lkID0gY2lkLnRvVjAoKVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5jaWRWZXJzaW9uID09PSAxKSB7XG4gICAgICBjaWQgPSBjaWQudG9WMSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBjaWQgdmVyc2lvbjogJHtvcHRpb25zLmNpZFZlcnNpb259YClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Jhc2VOYW1lfVxuICAgKi9cbiAgbGV0IGJhc2UgPSAnYmFzZTU4YnRjJ1xuXG4gIGlmIChvcHRpb25zLmJhc2UpIHtcbiAgICAvLyBWYWxpZGF0ZSBwYXNzZWQgYmFzZSBuYW1lL2NvZGVcbiAgICBiYXNlID0gZmluZEJhc2Uob3B0aW9ucy5iYXNlKS5uYW1lXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcob3JpZ2luYWxDaWQpKSB7XG4gICAgLy8gVXNlIGJhc2Ugb2YgaW5wdXQgQ0lEIGlmIHN0cmluZ1xuICAgIGJhc2UgPSBtdWx0aWJhc2UuaXNFbmNvZGVkKG9yaWdpbmFsQ2lkKSB8fCBiYXNlXG4gIH1cblxuICByZXR1cm4gZm9ybWF0U3RyLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCByZXBsYWNlcihjaWQsIGJhc2UpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7b2JqIGlzIFN0cmluZ31cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nXG59XG5cbi8qKlxuICogQHBhcmFtIHtDSUR9IGNpZFxuICogQHBhcmFtIHtCYXNlTmFtZX0gYmFzZVxuICogQHJldHVybnMgeyhtYXRjaDogYW55LCBzcGVjaWZpZXI6IHN0cmluZykgPT4gc3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlciAoY2lkLCBiYXNlKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG1hdGNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWZpZXJcbiAgICovXG4gIGNvbnN0IHJlcGxhY2UgPSAobWF0Y2gsIHNwZWNpZmllcikgPT4ge1xuICAgIHN3aXRjaCAoc3BlY2lmaWVyKSB7XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgcmV0dXJuICclJ1xuICAgICAgY2FzZSAnYic6IC8vIGJhc2UgbmFtZVxuICAgICAgICByZXR1cm4gYmFzZVxuICAgICAgY2FzZSAnQic6IC8vIGJhc2UgY29kZVxuICAgICAgICByZXR1cm4gZmluZEJhc2UoYmFzZSkuY29kZVxuICAgICAgY2FzZSAndic6IC8vIHZlcnNpb24gc3RyaW5nXG4gICAgICAgIHJldHVybiBgY2lkdiR7Y2lkLnZlcnNpb259YFxuICAgICAgY2FzZSAnVic6IC8vIHZlcnNpb24gbnVtXG4gICAgICAgIHJldHVybiBjaWQudmVyc2lvbi50b1N0cmluZygpXG4gICAgICBjYXNlICdjJzogLy8gY29kZWMgbmFtZVxuICAgICAgICByZXR1cm4gY2lkLmNvZGVjXG4gICAgICBjYXNlICdDJzogLy8gY29kZWMgY29kZVxuICAgICAgICByZXR1cm4gZmluZENvZGVjKGNpZCkudG9TdHJpbmcoKVxuICAgICAgY2FzZSAnaCc6IC8vIGhhc2ggZnVuIG5hbWVcbiAgICAgICAgcmV0dXJuIG11bHRpaGFzaC5kZWNvZGUoY2lkLm11bHRpaGFzaCkubmFtZVxuICAgICAgY2FzZSAnSCc6IC8vIGhhc2ggZnVuIGNvZGVcbiAgICAgICAgcmV0dXJuIG11bHRpaGFzaC5kZWNvZGUoY2lkLm11bHRpaGFzaCkuY29kZS50b1N0cmluZygpXG4gICAgICBjYXNlICdMJzogLy8gaGFzaCBsZW5ndGhcbiAgICAgICAgcmV0dXJuIG11bHRpaGFzaC5kZWNvZGUoY2lkLm11bHRpaGFzaCkubGVuZ3RoLnRvU3RyaW5nKClcbiAgICAgIGNhc2UgJ20nOiAvLyBtdWx0aWhhc2ggZW5jb2RlZCBpbiBiYXNlICViXG4gICAgICAgIHJldHVybiB1aW50OEFycmF5VG9TdHJpbmcobXVsdGliYXNlLmVuY29kZShiYXNlLCBjaWQubXVsdGloYXNoKSlcbiAgICAgIGNhc2UgJ00nOiAvLyBtdWx0aWhhc2ggZW5jb2RlZCBpbiBiYXNlICViIHdpdGhvdXQgYmFzZSBwcmVmaXhcbiAgICAgICAgcmV0dXJuIHVpbnQ4QXJyYXlUb1N0cmluZyhjaWQubXVsdGloYXNoLCBiYXNlKVxuICAgICAgY2FzZSAnZCc6IC8vIGhhc2ggZGlnZXN0IGVuY29kZWQgaW4gYmFzZSAlYlxuICAgICAgICByZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKG11bHRpYmFzZS5lbmNvZGUoYmFzZSwgbXVsdGloYXNoLmRlY29kZShjaWQubXVsdGloYXNoKS5kaWdlc3QpKVxuICAgICAgY2FzZSAnRCc6IC8vIGhhc2ggZGlnZXN0IGVuY29kZWQgaW4gYmFzZSAlYiB3aXRob3V0IGJhc2UgcHJlZml4XG4gICAgICAgIHJldHVybiB1aW50OEFycmF5VG9TdHJpbmcobXVsdGloYXNoLmRlY29kZShjaWQubXVsdGloYXNoKS5kaWdlc3QsIGJhc2UpXG4gICAgICBjYXNlICdzJzogLy8gY2lkIHN0cmluZyBlbmNvZGVkIGluIGJhc2UgJWJcbiAgICAgICAgcmV0dXJuIGNpZC50b1N0cmluZyhiYXNlKVxuICAgICAgY2FzZSAnUyc6IC8vIGNpZCBzdHJpbmcgd2l0aG91dCBiYXNlIHByZWZpeFxuICAgICAgICByZXR1cm4gY2lkLnZlcnNpb24gPT09IDFcbiAgICAgICAgICA/IGNpZC50b1N0cmluZyhiYXNlKS5zbGljZSgxKVxuICAgICAgICAgIDogdWludDhBcnJheVRvU3RyaW5nKGNpZC5ieXRlcywgYmFzZSlcbiAgICAgIGNhc2UgJ1AnOiAvLyBwcmVmaXhcbiAgICAgICAgcmV0dXJuIHByZWZpeChjaWQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5yZWNvZ25pemVkIHNwZWNpZmllciBpbiBmb3JtYXQgc3RyaW5nOiAke3NwZWNpZmllcn1gKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXBsYWNlXG59XG5cbi8qKlxuICogQHBhcmFtIHtCYXNlTmFtZU9yQ29kZX0gbmFtZU9yQ29kZVxuICovXG5mdW5jdGlvbiBmaW5kQmFzZSAobmFtZU9yQ29kZSkge1xuICBjb25zdCBiYXNlTmFtZUNvZGUgPSBiYXNlcygpLmZpbmQoYiA9PiAoYi5jb2RlID09PSBuYW1lT3JDb2RlKSB8fCBiLm5hbWUgPT09IG5hbWVPckNvZGUpXG5cbiAgaWYgKCFiYXNlTmFtZUNvZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgbXVsdGliYXNlOiAke25hbWVPckNvZGV9YClcbiAgfVxuXG4gIHJldHVybiBiYXNlTmFtZUNvZGVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NJRH0gY2lkXG4gKi9cbmZ1bmN0aW9uIGZpbmRDb2RlYyAoY2lkKSB7XG4gIGNvbnN0IGNvZGVjID0gY29kZWNzKCkuZmluZChjID0+IGMubmFtZSA9PT0gY2lkLmNvZGVjKVxuXG4gIGlmICghY29kZWMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgY29kZWM6ICR7Y2lkLmNvZGVjfWApXG4gIH1cblxuICByZXR1cm4gY29kZWMuY29kZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Q0lEfSBjaWRcbiAqL1xuZnVuY3Rpb24gcHJlZml4IChjaWQpIHtcbiAgY29uc3QgeyBuYW1lLCBsZW5ndGggfSA9IG11bHRpaGFzaC5kZWNvZGUoY2lkLm11bHRpaGFzaClcbiAgcmV0dXJuIGBjaWR2JHtjaWQudmVyc2lvbn0tJHtjaWQuY29kZWN9LSR7bmFtZX0tJHtsZW5ndGh9YFxufVxuIl0sIm5hbWVzIjpbIkNJRCIsInJlcXVpcmUiLCJiYXNlcyIsImNvZGVjcyIsImV4cGxhaW4iLCJtdWx0aWJhc2UiLCJtdWx0aWhhc2giLCJ1aW50OEFycmF5VG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9ybWF0IiwiY2lkIiwib3B0aW9ucyIsImZvcm1hdFN0ciIsImlzU3RyaW5nIiwiaW5kZXhPZiIsIkVycm9yIiwib3JpZ2luYWxDaWQiLCJlcnIiLCJjaWRWZXJzaW9uIiwidmVyc2lvbiIsInRvVjAiLCJ0b1YxIiwiYmFzZSIsImZpbmRCYXNlIiwibmFtZSIsImlzRW5jb2RlZCIsInJlcGxhY2UiLCJyZXBsYWNlciIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIm1hdGNoIiwic3BlY2lmaWVyIiwiY29kZSIsImNvZGVjIiwiZmluZENvZGVjIiwiZGVjb2RlIiwibGVuZ3RoIiwiZW5jb2RlIiwiZGlnZXN0Iiwic2xpY2UiLCJieXRlcyIsInByZWZpeCIsIm5hbWVPckNvZGUiLCJiYXNlTmFtZUNvZGUiLCJmaW5kIiwiYiIsImMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/format.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/hashes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/hashes.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst multihash = __webpack_require__(/*! multihashes */ \"(ssr)/./node_modules/.pnpm/multihashes@4.0.3/node_modules/multihashes/src/index.js\");\n// TODO: list only safe hashes https://github.com/ipfs/go-verifcid\nmodule.exports = function hashes() {\n    const output = [];\n    for (const [name, code] of Object.entries(multihash.names)){\n        output.push({\n            name,\n            code\n        });\n    }\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2hhc2hlcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFlBQVlDLG1CQUFPQSxDQUFDO0FBRTFCLGtFQUFrRTtBQUNsRUMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDO0lBQ3hCLE1BQU1DLFNBQVMsRUFBRTtJQUVqQixLQUFLLE1BQU0sQ0FBQ0MsTUFBTUMsS0FBSyxJQUFJQyxPQUFPQyxPQUFPLENBQUNULFVBQVVVLEtBQUssRUFBRztRQUMxREwsT0FBT00sSUFBSSxDQUFDO1lBQUVMO1lBQU1DO1FBQUs7SUFDM0I7SUFFQSxPQUFPRjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2NpZC10b29sQDMuMC4wL25vZGVfbW9kdWxlcy9jaWQtdG9vbC9zcmMvY29yZS9oYXNoZXMuanM/NDFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgbXVsdGloYXNoID0gcmVxdWlyZSgnbXVsdGloYXNoZXMnKVxuXG4vLyBUT0RPOiBsaXN0IG9ubHkgc2FmZSBoYXNoZXMgaHR0cHM6Ly9naXRodWIuY29tL2lwZnMvZ28tdmVyaWZjaWRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzaGVzICgpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW11cblxuICBmb3IgKGNvbnN0IFtuYW1lLCBjb2RlXSBvZiBPYmplY3QuZW50cmllcyhtdWx0aWhhc2gubmFtZXMpKSB7XG4gICAgb3V0cHV0LnB1c2goeyBuYW1lLCBjb2RlIH0pXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG4iXSwibmFtZXMiOlsibXVsdGloYXNoIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJoYXNoZXMiLCJvdXRwdXQiLCJuYW1lIiwiY29kZSIsIk9iamVjdCIsImVudHJpZXMiLCJuYW1lcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/hashes.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.base32 = __webpack_require__(/*! ./base32 */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/base32.js\");\nexports.bases = __webpack_require__(/*! ./bases */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/bases.js\");\nexports.codecs = __webpack_require__(/*! ./codecs */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/codecs.js\");\nexports.format = __webpack_require__(/*! ./format */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/format.js\");\nexports.hashes = __webpack_require__(/*! ./hashes */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/hashes.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9jb3JlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLDBJQUF5QjtBQUN6QkEsdUlBQXdCO0FBQ3hCQSwwSUFBeUI7QUFDekJBLDBJQUF5QjtBQUN6QkEsMElBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2NpZC10b29sQDMuMC4wL25vZGVfbW9kdWxlcy9jaWQtdG9vbC9zcmMvY29yZS9pbmRleC5qcz9kYWJjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJhc2UzMiA9IHJlcXVpcmUoJy4vYmFzZTMyJylcbmV4cG9ydHMuYmFzZXMgPSByZXF1aXJlKCcuL2Jhc2VzJylcbmV4cG9ydHMuY29kZWNzID0gcmVxdWlyZSgnLi9jb2RlY3MnKVxuZXhwb3J0cy5mb3JtYXQgPSByZXF1aXJlKCcuL2Zvcm1hdCcpXG5leHBvcnRzLmhhc2hlcyA9IHJlcXVpcmUoJy4vaGFzaGVzJylcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiYmFzZTMyIiwicmVxdWlyZSIsImJhc2VzIiwiY29kZWNzIiwiZm9ybWF0IiwiaGFzaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/index.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/**\n * @typedef {import('./core/types').FormatOptions} FormatOptions\n */ module.exports = __webpack_require__(/*! ./core */ \"(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/core/index.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2lkLXRvb2xAMy4wLjAvbm9kZV9tb2R1bGVzL2NpZC10b29sL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBOztDQUVDLEdBRURBLHVJQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jaWQtdG9vbEAzLjAuMC9ub2RlX21vZHVsZXMvY2lkLXRvb2wvc3JjL2luZGV4LmpzPzdjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3R5cGVzJykuRm9ybWF0T3B0aW9uc30gRm9ybWF0T3B0aW9uc1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb3JlJylcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cid-tool@3.0.0/node_modules/cid-tool/src/index.js\n");

/***/ })

};
;