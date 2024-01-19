"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/split2@4.2.0";
exports.ids = ["vendor-chunks/split2@4.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\nCopyright (c) 2014-2021, Matteo Collina <hello@matteocollina.com>\n\nPermission to use, copy, modify, and/or distribute this software for any\npurpose with or without fee is hereby granted, provided that the above\ncopyright notice and this permission notice appear in all copies.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\nWITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\nMERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\nANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\nWHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\nACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR\nIN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n*/ \nconst { Transform } = __webpack_require__(/*! stream */ \"stream\");\nconst { StringDecoder } = __webpack_require__(/*! string_decoder */ \"string_decoder\");\nconst kLast = Symbol(\"last\");\nconst kDecoder = Symbol(\"decoder\");\nfunction transform(chunk, enc, cb) {\n    let list;\n    if (this.overflow) {\n        const buf = this[kDecoder].write(chunk);\n        list = buf.split(this.matcher);\n        if (list.length === 1) return cb() // Line ending not found. Discard entire chunk.\n        ;\n        // Line ending found. Discard trailing fragment of previous line and reset overflow state.\n        list.shift();\n        this.overflow = false;\n    } else {\n        this[kLast] += this[kDecoder].write(chunk);\n        list = this[kLast].split(this.matcher);\n    }\n    this[kLast] = list.pop();\n    for(let i = 0; i < list.length; i++){\n        try {\n            push(this, this.mapper(list[i]));\n        } catch (error) {\n            return cb(error);\n        }\n    }\n    this.overflow = this[kLast].length > this.maxLength;\n    if (this.overflow && !this.skipOverflow) {\n        cb(new Error(\"maximum buffer reached\"));\n        return;\n    }\n    cb();\n}\nfunction flush(cb) {\n    // forward any gibberish left in there\n    this[kLast] += this[kDecoder].end();\n    if (this[kLast]) {\n        try {\n            push(this, this.mapper(this[kLast]));\n        } catch (error) {\n            return cb(error);\n        }\n    }\n    cb();\n}\nfunction push(self, val) {\n    if (val !== undefined) {\n        self.push(val);\n    }\n}\nfunction noop(incoming) {\n    return incoming;\n}\nfunction split(matcher, mapper, options) {\n    // Set defaults for any arguments not supplied.\n    matcher = matcher || /\\r?\\n/;\n    mapper = mapper || noop;\n    options = options || {};\n    // Test arguments explicitly.\n    switch(arguments.length){\n        case 1:\n            // If mapper is only argument.\n            if (typeof matcher === \"function\") {\n                mapper = matcher;\n                matcher = /\\r?\\n/;\n            // If options is only argument.\n            } else if (typeof matcher === \"object\" && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {\n                options = matcher;\n                matcher = /\\r?\\n/;\n            }\n            break;\n        case 2:\n            // If mapper and options are arguments.\n            if (typeof matcher === \"function\") {\n                options = mapper;\n                mapper = matcher;\n                matcher = /\\r?\\n/;\n            // If matcher and options are arguments.\n            } else if (typeof mapper === \"object\") {\n                options = mapper;\n                mapper = noop;\n            }\n    }\n    options = Object.assign({}, options);\n    options.autoDestroy = true;\n    options.transform = transform;\n    options.flush = flush;\n    options.readableObjectMode = true;\n    const stream = new Transform(options);\n    stream[kLast] = \"\";\n    stream[kDecoder] = new StringDecoder(\"utf8\");\n    stream.matcher = matcher;\n    stream.mapper = mapper;\n    stream.maxLength = options.maxLength;\n    stream.skipOverflow = options.skipOverflow || false;\n    stream.overflow = false;\n    stream._destroy = function(err, cb) {\n        // Weird Node v12 bug that we need to work around\n        this._writableState.errorEmitted = false;\n        cb(err);\n    };\n    return stream;\n}\nmodule.exports = split;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc3BsaXQyQDQuMi4wL25vZGVfbW9kdWxlcy9zcGxpdDIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsR0FFQTtBQUVBLE1BQU0sRUFBRUEsU0FBUyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQzlCLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdELG1CQUFPQSxDQUFDO0FBQ2xDLE1BQU1FLFFBQVFDLE9BQU87QUFDckIsTUFBTUMsV0FBV0QsT0FBTztBQUV4QixTQUFTRSxVQUFXQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsRUFBRTtJQUNoQyxJQUFJQztJQUNKLElBQUksSUFBSSxDQUFDQyxRQUFRLEVBQUU7UUFDakIsTUFBTUMsTUFBTSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsS0FBSyxDQUFDTjtRQUNqQ0csT0FBT0UsSUFBSUUsS0FBSyxDQUFDLElBQUksQ0FBQ0MsT0FBTztRQUU3QixJQUFJTCxLQUFLTSxNQUFNLEtBQUssR0FBRyxPQUFPUCxLQUFLLCtDQUErQzs7UUFFbEYsMEZBQTBGO1FBQzFGQyxLQUFLTyxLQUFLO1FBQ1YsSUFBSSxDQUFDTixRQUFRLEdBQUc7SUFDbEIsT0FBTztRQUNMLElBQUksQ0FBQ1IsTUFBTSxJQUFJLElBQUksQ0FBQ0UsU0FBUyxDQUFDUSxLQUFLLENBQUNOO1FBQ3BDRyxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDVyxLQUFLLENBQUMsSUFBSSxDQUFDQyxPQUFPO0lBQ3ZDO0lBRUEsSUFBSSxDQUFDWixNQUFNLEdBQUdPLEtBQUtRLEdBQUc7SUFFdEIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlULEtBQUtNLE1BQU0sRUFBRUcsSUFBSztRQUNwQyxJQUFJO1lBQ0ZDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDWCxJQUFJLENBQUNTLEVBQUU7UUFDaEMsRUFBRSxPQUFPRyxPQUFPO1lBQ2QsT0FBT2IsR0FBR2E7UUFDWjtJQUNGO0lBRUEsSUFBSSxDQUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDUixNQUFNLENBQUNhLE1BQU0sR0FBRyxJQUFJLENBQUNPLFNBQVM7SUFDbkQsSUFBSSxJQUFJLENBQUNaLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQ2EsWUFBWSxFQUFFO1FBQ3ZDZixHQUFHLElBQUlnQixNQUFNO1FBQ2I7SUFDRjtJQUVBaEI7QUFDRjtBQUVBLFNBQVNpQixNQUFPakIsRUFBRTtJQUNoQixzQ0FBc0M7SUFDdEMsSUFBSSxDQUFDTixNQUFNLElBQUksSUFBSSxDQUFDRSxTQUFTLENBQUNzQixHQUFHO0lBRWpDLElBQUksSUFBSSxDQUFDeEIsTUFBTSxFQUFFO1FBQ2YsSUFBSTtZQUNGaUIsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDbEIsTUFBTTtRQUNwQyxFQUFFLE9BQU9tQixPQUFPO1lBQ2QsT0FBT2IsR0FBR2E7UUFDWjtJQUNGO0lBRUFiO0FBQ0Y7QUFFQSxTQUFTVyxLQUFNUSxJQUFJLEVBQUVDLEdBQUc7SUFDdEIsSUFBSUEsUUFBUUMsV0FBVztRQUNyQkYsS0FBS1IsSUFBSSxDQUFDUztJQUNaO0FBQ0Y7QUFFQSxTQUFTRSxLQUFNQyxRQUFRO0lBQ3JCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTbEIsTUFBT0MsT0FBTyxFQUFFTSxNQUFNLEVBQUVZLE9BQU87SUFDdEMsK0NBQStDO0lBQy9DbEIsVUFBVUEsV0FBVztJQUNyQk0sU0FBU0EsVUFBVVU7SUFDbkJFLFVBQVVBLFdBQVcsQ0FBQztJQUV0Qiw2QkFBNkI7SUFDN0IsT0FBUUMsVUFBVWxCLE1BQU07UUFDdEIsS0FBSztZQUNILDhCQUE4QjtZQUM5QixJQUFJLE9BQU9ELFlBQVksWUFBWTtnQkFDakNNLFNBQVNOO2dCQUNUQSxVQUFVO1lBQ1osK0JBQStCO1lBQy9CLE9BQU8sSUFBSSxPQUFPQSxZQUFZLFlBQVksQ0FBRUEsQ0FBQUEsbUJBQW1Cb0IsTUFBSyxLQUFNLENBQUNwQixPQUFPLENBQUNYLE9BQU9VLEtBQUssQ0FBQyxFQUFFO2dCQUNoR21CLFVBQVVsQjtnQkFDVkEsVUFBVTtZQUNaO1lBQ0E7UUFFRixLQUFLO1lBQ0gsdUNBQXVDO1lBQ3ZDLElBQUksT0FBT0EsWUFBWSxZQUFZO2dCQUNqQ2tCLFVBQVVaO2dCQUNWQSxTQUFTTjtnQkFDVEEsVUFBVTtZQUNaLHdDQUF3QztZQUN4QyxPQUFPLElBQUksT0FBT00sV0FBVyxVQUFVO2dCQUNyQ1ksVUFBVVo7Z0JBQ1ZBLFNBQVNVO1lBQ1g7SUFDSjtJQUVBRSxVQUFVRyxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHSjtJQUM1QkEsUUFBUUssV0FBVyxHQUFHO0lBQ3RCTCxRQUFRM0IsU0FBUyxHQUFHQTtJQUNwQjJCLFFBQVFQLEtBQUssR0FBR0E7SUFDaEJPLFFBQVFNLGtCQUFrQixHQUFHO0lBRTdCLE1BQU1DLFNBQVMsSUFBSXhDLFVBQVVpQztJQUU3Qk8sTUFBTSxDQUFDckMsTUFBTSxHQUFHO0lBQ2hCcUMsTUFBTSxDQUFDbkMsU0FBUyxHQUFHLElBQUlILGNBQWM7SUFDckNzQyxPQUFPekIsT0FBTyxHQUFHQTtJQUNqQnlCLE9BQU9uQixNQUFNLEdBQUdBO0lBQ2hCbUIsT0FBT2pCLFNBQVMsR0FBR1UsUUFBUVYsU0FBUztJQUNwQ2lCLE9BQU9oQixZQUFZLEdBQUdTLFFBQVFULFlBQVksSUFBSTtJQUM5Q2dCLE9BQU83QixRQUFRLEdBQUc7SUFDbEI2QixPQUFPQyxRQUFRLEdBQUcsU0FBVUMsR0FBRyxFQUFFakMsRUFBRTtRQUNqQyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDa0MsY0FBYyxDQUFDQyxZQUFZLEdBQUc7UUFDbkNuQyxHQUFHaUM7SUFDTDtJQUVBLE9BQU9GO0FBQ1Q7QUFFQUssT0FBT0MsT0FBTyxHQUFHaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vc3BsaXQyQDQuMi4wL25vZGVfbW9kdWxlcy9zcGxpdDIvaW5kZXguanM/ZDljZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEsIE1hdHRlbyBDb2xsaW5hIDxoZWxsb0BtYXR0ZW9jb2xsaW5hLmNvbT5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG5jb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFU1xuV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1JcbkFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVNcbldIQVRTT0VWRVIgUkVTVUxUSU5HIEZST00gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTlxuQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1JcbklOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgeyBUcmFuc2Zvcm0gfSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5jb25zdCB7IFN0cmluZ0RlY29kZXIgfSA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyJylcbmNvbnN0IGtMYXN0ID0gU3ltYm9sKCdsYXN0JylcbmNvbnN0IGtEZWNvZGVyID0gU3ltYm9sKCdkZWNvZGVyJylcblxuZnVuY3Rpb24gdHJhbnNmb3JtIChjaHVuaywgZW5jLCBjYikge1xuICBsZXQgbGlzdFxuICBpZiAodGhpcy5vdmVyZmxvdykgeyAvLyBMaW5lIGJ1ZmZlciBpcyBmdWxsLiBTa2lwIHRvIHN0YXJ0IG9mIG5leHQgbGluZS5cbiAgICBjb25zdCBidWYgPSB0aGlzW2tEZWNvZGVyXS53cml0ZShjaHVuaylcbiAgICBsaXN0ID0gYnVmLnNwbGl0KHRoaXMubWF0Y2hlcilcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGNiKCkgLy8gTGluZSBlbmRpbmcgbm90IGZvdW5kLiBEaXNjYXJkIGVudGlyZSBjaHVuay5cblxuICAgIC8vIExpbmUgZW5kaW5nIGZvdW5kLiBEaXNjYXJkIHRyYWlsaW5nIGZyYWdtZW50IG9mIHByZXZpb3VzIGxpbmUgYW5kIHJlc2V0IG92ZXJmbG93IHN0YXRlLlxuICAgIGxpc3Quc2hpZnQoKVxuICAgIHRoaXMub3ZlcmZsb3cgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHRoaXNba0xhc3RdICs9IHRoaXNba0RlY29kZXJdLndyaXRlKGNodW5rKVxuICAgIGxpc3QgPSB0aGlzW2tMYXN0XS5zcGxpdCh0aGlzLm1hdGNoZXIpXG4gIH1cblxuICB0aGlzW2tMYXN0XSA9IGxpc3QucG9wKClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgcHVzaCh0aGlzLCB0aGlzLm1hcHBlcihsaXN0W2ldKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNiKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMub3ZlcmZsb3cgPSB0aGlzW2tMYXN0XS5sZW5ndGggPiB0aGlzLm1heExlbmd0aFxuICBpZiAodGhpcy5vdmVyZmxvdyAmJiAhdGhpcy5za2lwT3ZlcmZsb3cpIHtcbiAgICBjYihuZXcgRXJyb3IoJ21heGltdW0gYnVmZmVyIHJlYWNoZWQnKSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNiKClcbn1cblxuZnVuY3Rpb24gZmx1c2ggKGNiKSB7XG4gIC8vIGZvcndhcmQgYW55IGdpYmJlcmlzaCBsZWZ0IGluIHRoZXJlXG4gIHRoaXNba0xhc3RdICs9IHRoaXNba0RlY29kZXJdLmVuZCgpXG5cbiAgaWYgKHRoaXNba0xhc3RdKSB7XG4gICAgdHJ5IHtcbiAgICAgIHB1c2godGhpcywgdGhpcy5tYXBwZXIodGhpc1trTGFzdF0pKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gY2IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2IoKVxufVxuXG5mdW5jdGlvbiBwdXNoIChzZWxmLCB2YWwpIHtcbiAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2VsZi5wdXNoKHZhbClcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wIChpbmNvbWluZykge1xuICByZXR1cm4gaW5jb21pbmdcbn1cblxuZnVuY3Rpb24gc3BsaXQgKG1hdGNoZXIsIG1hcHBlciwgb3B0aW9ucykge1xuICAvLyBTZXQgZGVmYXVsdHMgZm9yIGFueSBhcmd1bWVudHMgbm90IHN1cHBsaWVkLlxuICBtYXRjaGVyID0gbWF0Y2hlciB8fCAvXFxyP1xcbi9cbiAgbWFwcGVyID0gbWFwcGVyIHx8IG5vb3BcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICAvLyBUZXN0IGFyZ3VtZW50cyBleHBsaWNpdGx5LlxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICAvLyBJZiBtYXBwZXIgaXMgb25seSBhcmd1bWVudC5cbiAgICAgIGlmICh0eXBlb2YgbWF0Y2hlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtYXBwZXIgPSBtYXRjaGVyXG4gICAgICAgIG1hdGNoZXIgPSAvXFxyP1xcbi9cbiAgICAgIC8vIElmIG9wdGlvbnMgaXMgb25seSBhcmd1bWVudC5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdvYmplY3QnICYmICEobWF0Y2hlciBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgIW1hdGNoZXJbU3ltYm9sLnNwbGl0XSkge1xuICAgICAgICBvcHRpb25zID0gbWF0Y2hlclxuICAgICAgICBtYXRjaGVyID0gL1xccj9cXG4vXG4gICAgICB9XG4gICAgICBicmVha1xuXG4gICAgY2FzZSAyOlxuICAgICAgLy8gSWYgbWFwcGVyIGFuZCBvcHRpb25zIGFyZSBhcmd1bWVudHMuXG4gICAgICBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucyA9IG1hcHBlclxuICAgICAgICBtYXBwZXIgPSBtYXRjaGVyXG4gICAgICAgIG1hdGNoZXIgPSAvXFxyP1xcbi9cbiAgICAgIC8vIElmIG1hdGNoZXIgYW5kIG9wdGlvbnMgYXJlIGFyZ3VtZW50cy5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1hcHBlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IG1hcHBlclxuICAgICAgICBtYXBwZXIgPSBub29wXG4gICAgICB9XG4gIH1cblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucylcbiAgb3B0aW9ucy5hdXRvRGVzdHJveSA9IHRydWVcbiAgb3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbiAgb3B0aW9ucy5mbHVzaCA9IGZsdXNoXG4gIG9wdGlvbnMucmVhZGFibGVPYmplY3RNb2RlID0gdHJ1ZVxuXG4gIGNvbnN0IHN0cmVhbSA9IG5ldyBUcmFuc2Zvcm0ob3B0aW9ucylcblxuICBzdHJlYW1ba0xhc3RdID0gJydcbiAgc3RyZWFtW2tEZWNvZGVyXSA9IG5ldyBTdHJpbmdEZWNvZGVyKCd1dGY4JylcbiAgc3RyZWFtLm1hdGNoZXIgPSBtYXRjaGVyXG4gIHN0cmVhbS5tYXBwZXIgPSBtYXBwZXJcbiAgc3RyZWFtLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoXG4gIHN0cmVhbS5za2lwT3ZlcmZsb3cgPSBvcHRpb25zLnNraXBPdmVyZmxvdyB8fCBmYWxzZVxuICBzdHJlYW0ub3ZlcmZsb3cgPSBmYWxzZVxuICBzdHJlYW0uX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICAgIC8vIFdlaXJkIE5vZGUgdjEyIGJ1ZyB0aGF0IHdlIG5lZWQgdG8gd29yayBhcm91bmRcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IGZhbHNlXG4gICAgY2IoZXJyKVxuICB9XG5cbiAgcmV0dXJuIHN0cmVhbVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0XG4iXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwicmVxdWlyZSIsIlN0cmluZ0RlY29kZXIiLCJrTGFzdCIsIlN5bWJvbCIsImtEZWNvZGVyIiwidHJhbnNmb3JtIiwiY2h1bmsiLCJlbmMiLCJjYiIsImxpc3QiLCJvdmVyZmxvdyIsImJ1ZiIsIndyaXRlIiwic3BsaXQiLCJtYXRjaGVyIiwibGVuZ3RoIiwic2hpZnQiLCJwb3AiLCJpIiwicHVzaCIsIm1hcHBlciIsImVycm9yIiwibWF4TGVuZ3RoIiwic2tpcE92ZXJmbG93IiwiRXJyb3IiLCJmbHVzaCIsImVuZCIsInNlbGYiLCJ2YWwiLCJ1bmRlZmluZWQiLCJub29wIiwiaW5jb21pbmciLCJvcHRpb25zIiwiYXJndW1lbnRzIiwiUmVnRXhwIiwiT2JqZWN0IiwiYXNzaWduIiwiYXV0b0Rlc3Ryb3kiLCJyZWFkYWJsZU9iamVjdE1vZGUiLCJzdHJlYW0iLCJfZGVzdHJveSIsImVyciIsIl93cml0YWJsZVN0YXRlIiwiZXJyb3JFbWl0dGVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js\n");

/***/ })

};
;