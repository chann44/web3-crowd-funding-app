"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wrappy@1.0.2";
exports.ids = ["vendor-chunks/wrappy@1.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/wrappy@1.0.2/node_modules/wrappy/wrappy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/wrappy@1.0.2/node_modules/wrappy/wrappy.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("// Returns a wrapper function that returns a wrapped callback\n// The wrapper function should do some stuff, and return a\n// presumably different callback function.\n// This makes sure that own properties are retained, so that\n// decorations and such are not lost along the way.\n\nmodule.exports = wrappy;\nfunction wrappy(fn, cb) {\n    if (fn && cb) return wrappy(fn)(cb);\n    if (typeof fn !== \"function\") throw new TypeError(\"need wrapper function\");\n    Object.keys(fn).forEach(function(k) {\n        wrapper[k] = fn[k];\n    });\n    return wrapper;\n    function wrapper() {\n        var args = new Array(arguments.length);\n        for(var i = 0; i < args.length; i++){\n            args[i] = arguments[i];\n        }\n        var ret = fn.apply(this, args);\n        var cb = args[args.length - 1];\n        if (typeof ret === \"function\" && ret !== cb) {\n            Object.keys(cb).forEach(function(k) {\n                ret[k] = cb[k];\n            });\n        }\n        return ret;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vd3JhcHB5QDEuMC4yL25vZGVfbW9kdWxlcy93cmFwcHkvd3JhcHB5LmpzIiwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCwwREFBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLDREQUE0RDtBQUM1RCxtREFBbUQ7O0FBQ25EQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCLFNBQVNBLE9BQVFDLEVBQUUsRUFBRUMsRUFBRTtJQUNyQixJQUFJRCxNQUFNQyxJQUFJLE9BQU9GLE9BQU9DLElBQUlDO0lBRWhDLElBQUksT0FBT0QsT0FBTyxZQUNoQixNQUFNLElBQUlFLFVBQVU7SUFFdEJDLE9BQU9DLElBQUksQ0FBQ0osSUFBSUssT0FBTyxDQUFDLFNBQVVDLENBQUM7UUFDakNDLE9BQU8sQ0FBQ0QsRUFBRSxHQUFHTixFQUFFLENBQUNNLEVBQUU7SUFDcEI7SUFFQSxPQUFPQztJQUVQLFNBQVNBO1FBQ1AsSUFBSUMsT0FBTyxJQUFJQyxNQUFNQyxVQUFVQyxNQUFNO1FBQ3JDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSixLQUFLRyxNQUFNLEVBQUVDLElBQUs7WUFDcENKLElBQUksQ0FBQ0ksRUFBRSxHQUFHRixTQUFTLENBQUNFLEVBQUU7UUFDeEI7UUFDQSxJQUFJQyxNQUFNYixHQUFHYyxLQUFLLENBQUMsSUFBSSxFQUFFTjtRQUN6QixJQUFJUCxLQUFLTyxJQUFJLENBQUNBLEtBQUtHLE1BQU0sR0FBQyxFQUFFO1FBQzVCLElBQUksT0FBT0UsUUFBUSxjQUFjQSxRQUFRWixJQUFJO1lBQzNDRSxPQUFPQyxJQUFJLENBQUNILElBQUlJLE9BQU8sQ0FBQyxTQUFVQyxDQUFDO2dCQUNqQ08sR0FBRyxDQUFDUCxFQUFFLEdBQUdMLEVBQUUsQ0FBQ0ssRUFBRTtZQUNoQjtRQUNGO1FBQ0EsT0FBT087SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL3dyYXBweUAxLjAuMi9ub2RlX21vZHVsZXMvd3JhcHB5L3dyYXBweS5qcz9hMmQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHdyYXBwZWQgY2FsbGJhY2tcbi8vIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHNob3VsZCBkbyBzb21lIHN0dWZmLCBhbmQgcmV0dXJuIGFcbi8vIHByZXN1bWFibHkgZGlmZmVyZW50IGNhbGxiYWNrIGZ1bmN0aW9uLlxuLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgb3duIHByb3BlcnRpZXMgYXJlIHJldGFpbmVkLCBzbyB0aGF0XG4vLyBkZWNvcmF0aW9ucyBhbmQgc3VjaCBhcmUgbm90IGxvc3QgYWxvbmcgdGhlIHdheS5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5XG5mdW5jdGlvbiB3cmFwcHkgKGZuLCBjYikge1xuICBpZiAoZm4gJiYgY2IpIHJldHVybiB3cmFwcHkoZm4pKGNiKVxuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmVlZCB3cmFwcGVyIGZ1bmN0aW9uJylcblxuICBPYmplY3Qua2V5cyhmbikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHdyYXBwZXJba10gPSBmbltrXVxuICB9KVxuXG4gIHJldHVybiB3cmFwcGVyXG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICB2YXIgcmV0ID0gZm4uYXBwbHkodGhpcywgYXJncylcbiAgICB2YXIgY2IgPSBhcmdzW2FyZ3MubGVuZ3RoLTFdXG4gICAgaWYgKHR5cGVvZiByZXQgPT09ICdmdW5jdGlvbicgJiYgcmV0ICE9PSBjYikge1xuICAgICAgT2JqZWN0LmtleXMoY2IpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0W2tdID0gY2Jba11cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3cmFwcHkiLCJmbiIsImNiIiwiVHlwZUVycm9yIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwid3JhcHBlciIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImkiLCJyZXQiLCJhcHBseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/wrappy@1.0.2/node_modules/wrappy/wrappy.js\n");

/***/ })

};
;