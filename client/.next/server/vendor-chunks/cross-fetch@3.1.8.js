"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cross-fetch@3.1.8";
exports.ids = ["vendor-chunks/cross-fetch@3.1.8"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/node-ponyfill.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/node-ponyfill.js ***!
  \*********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nconst nodeFetch = __webpack_require__(/*! node-fetch */ \"(ssr)/./node_modules/.pnpm/node-fetch@2.7.0/node_modules/node-fetch/lib/index.mjs\");\nconst realFetch = nodeFetch.default || nodeFetch;\nconst fetch = function(url, options) {\n    // Support schemaless URIs on the server for parity with the browser.\n    // Ex: //github.com/ -> https://github.com/\n    if (/^\\/\\//.test(url)) {\n        url = \"https:\" + url;\n    }\n    return realFetch.call(this, url, options);\n};\nfetch.ponyfill = true;\nmodule.exports = exports = fetch;\nexports.fetch = fetch;\nexports.Headers = nodeFetch.Headers;\nexports.Request = nodeFetch.Request;\nexports.Response = nodeFetch.Response;\n// Needed for TypeScript consumers without esModuleInterop.\nexports[\"default\"] = fetch;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY3Jvc3MtZmV0Y2hAMy4xLjgvbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb255ZmlsbC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWUMsbUJBQU9BLENBQUM7QUFDMUIsTUFBTUMsWUFBWUYsVUFBVUcsT0FBTyxJQUFJSDtBQUV2QyxNQUFNSSxRQUFRLFNBQVVDLEdBQUcsRUFBRUMsT0FBTztJQUNsQyxxRUFBcUU7SUFDckUsMkNBQTJDO0lBQzNDLElBQUksUUFBUUMsSUFBSSxDQUFDRixNQUFNO1FBQ3JCQSxNQUFNLFdBQVdBO0lBQ25CO0lBQ0EsT0FBT0gsVUFBVU0sSUFBSSxDQUFDLElBQUksRUFBRUgsS0FBS0M7QUFDbkM7QUFFQUYsTUFBTUssUUFBUSxHQUFHO0FBRWpCQyxPQUFPQyxPQUFPLEdBQUdBLFVBQVVQO0FBQzNCTyxhQUFhLEdBQUdQO0FBQ2hCTyxlQUFlLEdBQUdYLFVBQVVZLE9BQU87QUFDbkNELGVBQWUsR0FBR1gsVUFBVWEsT0FBTztBQUNuQ0YsZ0JBQWdCLEdBQUdYLFVBQVVjLFFBQVE7QUFFckMsMkRBQTJEO0FBQzNESCxrQkFBZSxHQUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jcm9zcy1mZXRjaEAzLjEuOC9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbnlmaWxsLmpzPzg5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZUZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXG5jb25zdCByZWFsRmV0Y2ggPSBub2RlRmV0Y2guZGVmYXVsdCB8fCBub2RlRmV0Y2hcblxuY29uc3QgZmV0Y2ggPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIC8vIFN1cHBvcnQgc2NoZW1hbGVzcyBVUklzIG9uIHRoZSBzZXJ2ZXIgZm9yIHBhcml0eSB3aXRoIHRoZSBicm93c2VyLlxuICAvLyBFeDogLy9naXRodWIuY29tLyAtPiBodHRwczovL2dpdGh1Yi5jb20vXG4gIGlmICgvXlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gJ2h0dHBzOicgKyB1cmxcbiAgfVxuICByZXR1cm4gcmVhbEZldGNoLmNhbGwodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG5mZXRjaC5wb255ZmlsbCA9IHRydWVcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmV0Y2hcbmV4cG9ydHMuZmV0Y2ggPSBmZXRjaFxuZXhwb3J0cy5IZWFkZXJzID0gbm9kZUZldGNoLkhlYWRlcnNcbmV4cG9ydHMuUmVxdWVzdCA9IG5vZGVGZXRjaC5SZXF1ZXN0XG5leHBvcnRzLlJlc3BvbnNlID0gbm9kZUZldGNoLlJlc3BvbnNlXG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBjb25zdW1lcnMgd2l0aG91dCBlc01vZHVsZUludGVyb3AuXG5leHBvcnRzLmRlZmF1bHQgPSBmZXRjaFxuIl0sIm5hbWVzIjpbIm5vZGVGZXRjaCIsInJlcXVpcmUiLCJyZWFsRmV0Y2giLCJkZWZhdWx0IiwiZmV0Y2giLCJ1cmwiLCJvcHRpb25zIiwidGVzdCIsImNhbGwiLCJwb255ZmlsbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJIZWFkZXJzIiwiUmVxdWVzdCIsIlJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/node-ponyfill.js\n");

/***/ })

};
;