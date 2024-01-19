"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stablelib+constant-time@1.0.1";
exports.ids = ["vendor-chunks/@stablelib+constant-time@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@stablelib+constant-time@1.0.1/node_modules/@stablelib/constant-time/lib/constant-time.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@stablelib+constant-time@1.0.1/node_modules/@stablelib/constant-time/lib/constant-time.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n/**\n * Package constant-time provides functions for performing algorithmically constant-time operations.\n */ /**\n * NOTE! Due to the inability to guarantee real constant time evaluation of\n * anything in JavaScript VM, this is module is the best effort.\n */ /**\n * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.\n *\n * Supports only 32-bit integers, so resultIfOne or resultIfZero are not\n * integers, they'll be converted to them with bitwise operations.\n */ function select(subject, resultIfOne, resultIfZero) {\n    return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;\n}\nexports.select = select;\n/**\n * Returns 1 if a <= b, or 0 if not.\n * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.\n */ function lessOrEqual(a, b) {\n    return (a | 0) - (b | 0) - 1 >>> 31 & 1;\n}\nexports.lessOrEqual = lessOrEqual;\n/**\n * Returns 1 if a and b are of equal length and their contents\n * are equal, or 0 otherwise.\n *\n * Note that unlike in equal(), zero-length inputs are considered\n * the same, so this function will return 1.\n */ function compare(a, b) {\n    if (a.length !== b.length) {\n        return 0;\n    }\n    var result = 0;\n    for(var i = 0; i < a.length; i++){\n        result |= a[i] ^ b[i];\n    }\n    return 1 & result - 1 >>> 8;\n}\nexports.compare = compare;\n/**\n * Returns true if a and b are of equal non-zero length,\n * and their contents are equal, or false otherwise.\n *\n * Note that unlike in compare() zero-length inputs are considered\n * _not_ equal, so this function will return false.\n */ function equal(a, b) {\n    if (a.length === 0 || b.length === 0) {\n        return false;\n    }\n    return compare(a, b) !== 0;\n}\nexports.equal = equal; //# sourceMappingURL=constant-time.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitjb25zdGFudC10aW1lQDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2NvbnN0YW50LXRpbWUvbGliL2NvbnN0YW50LXRpbWUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBQzdDQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RDs7Q0FFQyxHQUNEOzs7Q0FHQyxHQUNEOzs7OztDQUtDLEdBQ0QsU0FBU0MsT0FBT0MsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7SUFDOUMsT0FBTyxDQUFHRixDQUFBQSxVQUFVLEtBQUtDLGNBQWdCLFVBQVcsSUFBS0M7QUFDN0Q7QUFDQUwsY0FBYyxHQUFHRTtBQUNqQjs7O0NBR0MsR0FDRCxTQUFTSSxZQUFZQyxDQUFDLEVBQUVDLENBQUM7SUFDckIsT0FBTyxDQUFHRCxJQUFJLEtBQU1DLENBQUFBLElBQUksS0FBSyxNQUFPLEtBQU07QUFDOUM7QUFDQVIsbUJBQW1CLEdBQUdNO0FBQ3RCOzs7Ozs7Q0FNQyxHQUNELFNBQVNHLFFBQVFGLENBQUMsRUFBRUMsQ0FBQztJQUNqQixJQUFJRCxFQUFFRyxNQUFNLEtBQUtGLEVBQUVFLE1BQU0sRUFBRTtRQUN2QixPQUFPO0lBQ1g7SUFDQSxJQUFJQyxTQUFTO0lBQ2IsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlMLEVBQUVHLE1BQU0sRUFBRUUsSUFBSztRQUMvQkQsVUFBVUosQ0FBQyxDQUFDSyxFQUFFLEdBQUdKLENBQUMsQ0FBQ0ksRUFBRTtJQUN6QjtJQUNBLE9BQVEsSUFBSyxTQUFVLE1BQU87QUFDbEM7QUFDQVosZUFBZSxHQUFHUztBQUNsQjs7Ozs7O0NBTUMsR0FDRCxTQUFTSSxNQUFNTixDQUFDLEVBQUVDLENBQUM7SUFDZixJQUFJRCxFQUFFRyxNQUFNLEtBQUssS0FBS0YsRUFBRUUsTUFBTSxLQUFLLEdBQUc7UUFDbEMsT0FBTztJQUNYO0lBQ0EsT0FBT0QsUUFBUUYsR0FBR0MsT0FBTztBQUM3QjtBQUNBUixhQUFhLEdBQUdhLE9BQ2hCLHlDQUF5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RhYmxlbGliK2NvbnN0YW50LXRpbWVAMS4wLjEvbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvY29uc3RhbnQtdGltZS9saWIvY29uc3RhbnQtdGltZS5qcz83OTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIGNvbnN0YW50LXRpbWUgcHJvdmlkZXMgZnVuY3Rpb25zIGZvciBwZXJmb3JtaW5nIGFsZ29yaXRobWljYWxseSBjb25zdGFudC10aW1lIG9wZXJhdGlvbnMuXG4gKi9cbi8qKlxuICogTk9URSEgRHVlIHRvIHRoZSBpbmFiaWxpdHkgdG8gZ3VhcmFudGVlIHJlYWwgY29uc3RhbnQgdGltZSBldmFsdWF0aW9uIG9mXG4gKiBhbnl0aGluZyBpbiBKYXZhU2NyaXB0IFZNLCB0aGlzIGlzIG1vZHVsZSBpcyB0aGUgYmVzdCBlZmZvcnQuXG4gKi9cbi8qKlxuICogUmV0dXJucyByZXN1bHRJZk9uZSBpZiBzdWJqZWN0IGlzIDEsIG9yIHJlc3VsdElmWmVybyBpZiBzdWJqZWN0IGlzIDAuXG4gKlxuICogU3VwcG9ydHMgb25seSAzMi1iaXQgaW50ZWdlcnMsIHNvIHJlc3VsdElmT25lIG9yIHJlc3VsdElmWmVybyBhcmUgbm90XG4gKiBpbnRlZ2VycywgdGhleSdsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlbSB3aXRoIGJpdHdpc2Ugb3BlcmF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KHN1YmplY3QsIHJlc3VsdElmT25lLCByZXN1bHRJZlplcm8pIHtcbiAgICByZXR1cm4gKH4oc3ViamVjdCAtIDEpICYgcmVzdWx0SWZPbmUpIHwgKChzdWJqZWN0IC0gMSkgJiByZXN1bHRJZlplcm8pO1xufVxuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG4vKipcbiAqIFJldHVybnMgMSBpZiBhIDw9IGIsIG9yIDAgaWYgbm90LlxuICogQXJndW1lbnRzIG11c3QgYmUgcG9zaXRpdmUgMzItYml0IGludGVnZXJzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAyXjMxIC0gMS5cbiAqL1xuZnVuY3Rpb24gbGVzc09yRXF1YWwoYSwgYikge1xuICAgIHJldHVybiAoKChhIHwgMCkgLSAoYiB8IDApIC0gMSkgPj4+IDMxKSAmIDE7XG59XG5leHBvcnRzLmxlc3NPckVxdWFsID0gbGVzc09yRXF1YWw7XG4vKipcbiAqIFJldHVybnMgMSBpZiBhIGFuZCBiIGFyZSBvZiBlcXVhbCBsZW5ndGggYW5kIHRoZWlyIGNvbnRlbnRzXG4gKiBhcmUgZXF1YWwsIG9yIDAgb3RoZXJ3aXNlLlxuICpcbiAqIE5vdGUgdGhhdCB1bmxpa2UgaW4gZXF1YWwoKSwgemVyby1sZW5ndGggaW5wdXRzIGFyZSBjb25zaWRlcmVkXG4gKiB0aGUgc2FtZSwgc28gdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiAxLlxuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0IHw9IGFbaV0gXiBiW2ldO1xuICAgIH1cbiAgICByZXR1cm4gKDEgJiAoKHJlc3VsdCAtIDEpID4+PiA4KSk7XG59XG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBhbmQgYiBhcmUgb2YgZXF1YWwgbm9uLXplcm8gbGVuZ3RoLFxuICogYW5kIHRoZWlyIGNvbnRlbnRzIGFyZSBlcXVhbCwgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIE5vdGUgdGhhdCB1bmxpa2UgaW4gY29tcGFyZSgpIHplcm8tbGVuZ3RoIGlucHV0cyBhcmUgY29uc2lkZXJlZFxuICogX25vdF8gZXF1YWwsIHNvIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gZmFsc2UuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggPT09IDAgfHwgYi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGFyZShhLCBiKSAhPT0gMDtcbn1cbmV4cG9ydHMuZXF1YWwgPSBlcXVhbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50LXRpbWUuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwic2VsZWN0Iiwic3ViamVjdCIsInJlc3VsdElmT25lIiwicmVzdWx0SWZaZXJvIiwibGVzc09yRXF1YWwiLCJhIiwiYiIsImNvbXBhcmUiLCJsZW5ndGgiLCJyZXN1bHQiLCJpIiwiZXF1YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@stablelib+constant-time@1.0.1/node_modules/@stablelib/constant-time/lib/constant-time.js\n");

/***/ })

};
;