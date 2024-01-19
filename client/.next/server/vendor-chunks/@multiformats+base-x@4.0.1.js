"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@multiformats+base-x@4.0.1";
exports.ids = ["vendor-chunks/@multiformats+base-x@4.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@multiformats+base-x@4.0.1/node_modules/@multiformats/base-x/src/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@multiformats+base-x@4.0.1/node_modules/@multiformats/base-x/src/index.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

eval("\n// base-x encoding / decoding\n// Copyright (c) 2018 base-x contributors\n// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)\n// Distributed under the MIT software license, see the accompanying\n// file LICENSE or http://www.opensource.org/licenses/mit-license.php.\nfunction base(ALPHABET) {\n    if (ALPHABET.length >= 255) {\n        throw new TypeError(\"Alphabet too long\");\n    }\n    var BASE_MAP = new Uint8Array(256);\n    for(var j = 0; j < BASE_MAP.length; j++){\n        BASE_MAP[j] = 255;\n    }\n    for(var i = 0; i < ALPHABET.length; i++){\n        var x = ALPHABET.charAt(i);\n        var xc = x.charCodeAt(0);\n        if (BASE_MAP[xc] !== 255) {\n            throw new TypeError(x + \" is ambiguous\");\n        }\n        BASE_MAP[xc] = i;\n    }\n    var BASE = ALPHABET.length;\n    var LEADER = ALPHABET.charAt(0);\n    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up\n    ;\n    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up\n    ;\n    function encode(source) {\n        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {\n            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);\n        } else if (Array.isArray(source)) {\n            source = Uint8Array.from(source);\n        }\n        if (!(source instanceof Uint8Array)) {\n            throw new TypeError(\"Expected Uint8Array\");\n        }\n        if (source.length === 0) {\n            return \"\";\n        }\n        // Skip & count leading zeroes.\n        var zeroes = 0;\n        var length = 0;\n        var pbegin = 0;\n        var pend = source.length;\n        while(pbegin !== pend && source[pbegin] === 0){\n            pbegin++;\n            zeroes++;\n        }\n        // Allocate enough space in big-endian base58 representation.\n        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;\n        var b58 = new Uint8Array(size);\n        // Process the bytes.\n        while(pbegin !== pend){\n            var carry = source[pbegin];\n            // Apply \"b58 = b58 * 256 + ch\".\n            var i = 0;\n            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){\n                carry += 256 * b58[it1] >>> 0;\n                b58[it1] = carry % BASE >>> 0;\n                carry = carry / BASE >>> 0;\n            }\n            if (carry !== 0) {\n                throw new Error(\"Non-zero carry\");\n            }\n            length = i;\n            pbegin++;\n        }\n        // Skip leading zeroes in base58 result.\n        var it2 = size - length;\n        while(it2 !== size && b58[it2] === 0){\n            it2++;\n        }\n        // Translate the result into a string.\n        var str = LEADER.repeat(zeroes);\n        for(; it2 < size; ++it2){\n            str += ALPHABET.charAt(b58[it2]);\n        }\n        return str;\n    }\n    function decodeUnsafe(source) {\n        if (typeof source !== \"string\") {\n            throw new TypeError(\"Expected String\");\n        }\n        if (source.length === 0) {\n            return new Uint8Array();\n        }\n        var psz = 0;\n        // Skip leading spaces.\n        if (source[psz] === \" \") {\n            return;\n        }\n        // Skip and count leading '1's.\n        var zeroes = 0;\n        var length = 0;\n        while(source[psz] === LEADER){\n            zeroes++;\n            psz++;\n        }\n        // Allocate enough space in big-endian base256 representation.\n        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.\n        ;\n        var b256 = new Uint8Array(size);\n        // Process the characters.\n        while(source[psz]){\n            // Decode character\n            var carry = BASE_MAP[source.charCodeAt(psz)];\n            // Invalid character\n            if (carry === 255) {\n                return;\n            }\n            var i = 0;\n            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){\n                carry += BASE * b256[it3] >>> 0;\n                b256[it3] = carry % 256 >>> 0;\n                carry = carry / 256 >>> 0;\n            }\n            if (carry !== 0) {\n                throw new Error(\"Non-zero carry\");\n            }\n            length = i;\n            psz++;\n        }\n        // Skip trailing spaces.\n        if (source[psz] === \" \") {\n            return;\n        }\n        // Skip leading zeroes in b256.\n        var it4 = size - length;\n        while(it4 !== size && b256[it4] === 0){\n            it4++;\n        }\n        var vch = new Uint8Array(zeroes + (size - it4));\n        var j = zeroes;\n        while(it4 !== size){\n            vch[j++] = b256[it4++];\n        }\n        return vch;\n    }\n    function decode(string) {\n        var buffer = decodeUnsafe(string);\n        if (buffer) {\n            return buffer;\n        }\n        throw new Error(\"Non-base\" + BASE + \" character\");\n    }\n    return {\n        encode: encode,\n        decodeUnsafe: decodeUnsafe,\n        decode: decode\n    };\n}\nmodule.exports = base;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG11bHRpZm9ybWF0cytiYXNlLXhANC4wLjEvbm9kZV9tb2R1bGVzL0BtdWx0aWZvcm1hdHMvYmFzZS14L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDZCQUE2QjtBQUM3Qix5Q0FBeUM7QUFDekMsbUVBQW1FO0FBQ25FLG1FQUFtRTtBQUNuRSxzRUFBc0U7QUFDdEUsU0FBU0EsS0FBTUMsUUFBUTtJQUNyQixJQUFJQSxTQUFTQyxNQUFNLElBQUksS0FBSztRQUFFLE1BQU0sSUFBSUMsVUFBVTtJQUFxQjtJQUN2RSxJQUFJQyxXQUFXLElBQUlDLFdBQVc7SUFDOUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFNBQVNGLE1BQU0sRUFBRUksSUFBSztRQUN4Q0YsUUFBUSxDQUFDRSxFQUFFLEdBQUc7SUFDaEI7SUFDQSxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSU4sU0FBU0MsTUFBTSxFQUFFSyxJQUFLO1FBQ3hDLElBQUlDLElBQUlQLFNBQVNRLE1BQU0sQ0FBQ0Y7UUFDeEIsSUFBSUcsS0FBS0YsRUFBRUcsVUFBVSxDQUFDO1FBQ3RCLElBQUlQLFFBQVEsQ0FBQ00sR0FBRyxLQUFLLEtBQUs7WUFBRSxNQUFNLElBQUlQLFVBQVVLLElBQUk7UUFBaUI7UUFDckVKLFFBQVEsQ0FBQ00sR0FBRyxHQUFHSDtJQUNqQjtJQUNBLElBQUlLLE9BQU9YLFNBQVNDLE1BQU07SUFDMUIsSUFBSVcsU0FBU1osU0FBU1EsTUFBTSxDQUFDO0lBQzdCLElBQUlLLFNBQVNDLEtBQUtDLEdBQUcsQ0FBQ0osUUFBUUcsS0FBS0MsR0FBRyxDQUFDLEtBQUssbUNBQW1DOztJQUMvRSxJQUFJQyxVQUFVRixLQUFLQyxHQUFHLENBQUMsT0FBT0QsS0FBS0MsR0FBRyxDQUFDSixNQUFNLG1DQUFtQzs7SUFDaEYsU0FBU00sT0FBUUMsTUFBTTtRQUNyQixJQUFJQSxrQkFBa0JkLFlBQVksQ0FDbEMsT0FBTyxJQUFJ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QUNSLElBQUssSUFBSW1DLE1BQU1YLE9BQU8sR0FBRyxDQUFDRSxVQUFVLEtBQUsxQixJQUFJTCxNQUFLLEtBQU93QyxRQUFRLENBQUMsR0FBSUEsT0FBT25DLElBQUs7Z0JBQ2hGMEIsU0FBUyxPQUFRUSxJQUFJLENBQUNDLElBQUksS0FBTTtnQkFDaENELElBQUksQ0FBQ0MsSUFBSSxHQUFHLFFBQVMsUUFBUztnQkFDOUJULFFBQVEsUUFBUyxRQUFTO1lBQzVCO1lBQ0EsSUFBSUEsVUFBVSxHQUFHO2dCQUFFLE1BQU0sSUFBSUUsTUFBTTtZQUFrQjtZQUNyRGpDLFNBQVNLO1lBQ1RpQztRQUNGO1FBQ0ksd0JBQXdCO1FBQzVCLElBQUlyQixNQUFNLENBQUNxQixJQUFJLEtBQUssS0FBSztZQUFFO1FBQU87UUFDOUIsK0JBQStCO1FBQ25DLElBQUlHLE1BQU1aLE9BQU83QjtRQUNqQixNQUFPeUMsUUFBUVosUUFBUVUsSUFBSSxDQUFDRSxJQUFJLEtBQUssRUFBRztZQUN0Q0E7UUFDRjtRQUNBLElBQUlDLE1BQU0sSUFBSXZDLFdBQVd1QixTQUFVRyxDQUFBQSxPQUFPWSxHQUFFO1FBQzVDLElBQUlyQyxJQUFJc0I7UUFDUixNQUFPZSxRQUFRWixLQUFNO1lBQ25CYSxHQUFHLENBQUN0QyxJQUFJLEdBQUdtQyxJQUFJLENBQUNFLE1BQU07UUFDeEI7UUFDQSxPQUFPQztJQUNUO0lBQ0EsU0FBU0MsT0FBUUMsTUFBTTtRQUNyQixJQUFJeEIsU0FBU2lCLGFBQWFPO1FBQzFCLElBQUl4QixRQUFRO1lBQUUsT0FBT0E7UUFBTztRQUM1QixNQUFNLElBQUlhLE1BQU0sYUFBYXZCLE9BQU87SUFDdEM7SUFDQSxPQUFPO1FBQ0xNLFFBQVFBO1FBQ1JxQixjQUFjQTtRQUNkTSxRQUFRQTtJQUNWO0FBQ0Y7QUFDQUUsT0FBT0MsT0FBTyxHQUFHaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vQG11bHRpZm9ybWF0cytiYXNlLXhANC4wLjEvbm9kZV9tb2R1bGVzL0BtdWx0aWZvcm1hdHMvYmFzZS14L3NyYy9pbmRleC5qcz8zYzRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuLy8gYmFzZS14IGVuY29kaW5nIC8gZGVjb2Rpbmdcbi8vIENvcHlyaWdodCAoYykgMjAxOCBiYXNlLXggY29udHJpYnV0b3JzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxOCBUaGUgQml0Y29pbiBDb3JlIGRldmVsb3BlcnMgKGJhc2U1OC5jcHApXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIHNvZnR3YXJlIGxpY2Vuc2UsIHNlZSB0aGUgYWNjb21wYW55aW5nXG4vLyBmaWxlIExJQ0VOU0Ugb3IgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHAuXG5mdW5jdGlvbiBiYXNlIChBTFBIQUJFVCkge1xuICBpZiAoQUxQSEFCRVQubGVuZ3RoID49IDI1NSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHBoYWJldCB0b28gbG9uZycpIH1cbiAgdmFyIEJBU0VfTUFQID0gbmV3IFVpbnQ4QXJyYXkoMjU2KVxuICBmb3IgKHZhciBqID0gMDsgaiA8IEJBU0VfTUFQLmxlbmd0aDsgaisrKSB7XG4gICAgQkFTRV9NQVBbal0gPSAyNTVcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHggPSBBTFBIQUJFVC5jaGFyQXQoaSlcbiAgICB2YXIgeGMgPSB4LmNoYXJDb2RlQXQoMClcbiAgICBpZiAoQkFTRV9NQVBbeGNdICE9PSAyNTUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcih4ICsgJyBpcyBhbWJpZ3VvdXMnKSB9XG4gICAgQkFTRV9NQVBbeGNdID0gaVxuICB9XG4gIHZhciBCQVNFID0gQUxQSEFCRVQubGVuZ3RoXG4gIHZhciBMRUFERVIgPSBBTFBIQUJFVC5jaGFyQXQoMClcbiAgdmFyIEZBQ1RPUiA9IE1hdGgubG9nKEJBU0UpIC8gTWF0aC5sb2coMjU2KSAvLyBsb2coQkFTRSkgLyBsb2coMjU2KSwgcm91bmRlZCB1cFxuICB2YXIgaUZBQ1RPUiA9IE1hdGgubG9nKDI1NikgLyBNYXRoLmxvZyhCQVNFKSAvLyBsb2coMjU2KSAvIGxvZyhCQVNFKSwgcm91bmRlZCB1cFxuICBmdW5jdGlvbiBlbmNvZGUgKHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc291cmNlKSkge1xuICAgICAgc291cmNlID0gbmV3IFVpbnQ4QXJyYXkoc291cmNlLmJ1ZmZlciwgc291cmNlLmJ5dGVPZmZzZXQsIHNvdXJjZS5ieXRlTGVuZ3RoKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICBzb3VyY2UgPSBVaW50OEFycmF5LmZyb20oc291cmNlKVxuICAgIH1cbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBVaW50OEFycmF5JykgfVxuICAgIGlmIChzb3VyY2UubGVuZ3RoID09PSAwKSB7IHJldHVybiAnJyB9XG4gICAgICAgIC8vIFNraXAgJiBjb3VudCBsZWFkaW5nIHplcm9lcy5cbiAgICB2YXIgemVyb2VzID0gMFxuICAgIHZhciBsZW5ndGggPSAwXG4gICAgdmFyIHBiZWdpbiA9IDBcbiAgICB2YXIgcGVuZCA9IHNvdXJjZS5sZW5ndGhcbiAgICB3aGlsZSAocGJlZ2luICE9PSBwZW5kICYmIHNvdXJjZVtwYmVnaW5dID09PSAwKSB7XG4gICAgICBwYmVnaW4rK1xuICAgICAgemVyb2VzKytcbiAgICB9XG4gICAgICAgIC8vIEFsbG9jYXRlIGVub3VnaCBzcGFjZSBpbiBiaWctZW5kaWFuIGJhc2U1OCByZXByZXNlbnRhdGlvbi5cbiAgICB2YXIgc2l6ZSA9ICgocGVuZCAtIHBiZWdpbikgKiBpRkFDVE9SICsgMSkgPj4+IDBcbiAgICB2YXIgYjU4ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgYnl0ZXMuXG4gICAgd2hpbGUgKHBiZWdpbiAhPT0gcGVuZCkge1xuICAgICAgdmFyIGNhcnJ5ID0gc291cmNlW3BiZWdpbl1cbiAgICAgICAgICAgIC8vIEFwcGx5IFwiYjU4ID0gYjU4ICogMjU2ICsgY2hcIi5cbiAgICAgIHZhciBpID0gMFxuICAgICAgZm9yICh2YXIgaXQxID0gc2l6ZSAtIDE7IChjYXJyeSAhPT0gMCB8fCBpIDwgbGVuZ3RoKSAmJiAoaXQxICE9PSAtMSk7IGl0MS0tLCBpKyspIHtcbiAgICAgICAgY2FycnkgKz0gKDI1NiAqIGI1OFtpdDFdKSA+Pj4gMFxuICAgICAgICBiNThbaXQxXSA9IChjYXJyeSAlIEJBU0UpID4+PiAwXG4gICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gQkFTRSkgPj4+IDBcbiAgICAgIH1cbiAgICAgIGlmIChjYXJyeSAhPT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ05vbi16ZXJvIGNhcnJ5JykgfVxuICAgICAgbGVuZ3RoID0gaVxuICAgICAgcGJlZ2luKytcbiAgICB9XG4gICAgICAgIC8vIFNraXAgbGVhZGluZyB6ZXJvZXMgaW4gYmFzZTU4IHJlc3VsdC5cbiAgICB2YXIgaXQyID0gc2l6ZSAtIGxlbmd0aFxuICAgIHdoaWxlIChpdDIgIT09IHNpemUgJiYgYjU4W2l0Ml0gPT09IDApIHtcbiAgICAgIGl0MisrXG4gICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgdGhlIHJlc3VsdCBpbnRvIGEgc3RyaW5nLlxuICAgIHZhciBzdHIgPSBMRUFERVIucmVwZWF0KHplcm9lcylcbiAgICBmb3IgKDsgaXQyIDwgc2l6ZTsgKytpdDIpIHsgc3RyICs9IEFMUEhBQkVULmNoYXJBdChiNThbaXQyXSkgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuICBmdW5jdGlvbiBkZWNvZGVVbnNhZmUgKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnc3RyaW5nJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBTdHJpbmcnKSB9XG4gICAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHsgcmV0dXJuIG5ldyBVaW50OEFycmF5KCkgfVxuICAgIHZhciBwc3ogPSAwXG4gICAgICAgIC8vIFNraXAgbGVhZGluZyBzcGFjZXMuXG4gICAgaWYgKHNvdXJjZVtwc3pdID09PSAnICcpIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gU2tpcCBhbmQgY291bnQgbGVhZGluZyAnMSdzLlxuICAgIHZhciB6ZXJvZXMgPSAwXG4gICAgdmFyIGxlbmd0aCA9IDBcbiAgICB3aGlsZSAoc291cmNlW3Bzel0gPT09IExFQURFUikge1xuICAgICAgemVyb2VzKytcbiAgICAgIHBzeisrXG4gICAgfVxuICAgICAgICAvLyBBbGxvY2F0ZSBlbm91Z2ggc3BhY2UgaW4gYmlnLWVuZGlhbiBiYXNlMjU2IHJlcHJlc2VudGF0aW9uLlxuICAgIHZhciBzaXplID0gKCgoc291cmNlLmxlbmd0aCAtIHBzeikgKiBGQUNUT1IpICsgMSkgPj4+IDAgLy8gbG9nKDU4KSAvIGxvZygyNTYpLCByb3VuZGVkIHVwLlxuICAgIHZhciBiMjU2ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgY2hhcmFjdGVycy5cbiAgICB3aGlsZSAoc291cmNlW3Bzel0pIHtcbiAgICAgICAgICAgIC8vIERlY29kZSBjaGFyYWN0ZXJcbiAgICAgIHZhciBjYXJyeSA9IEJBU0VfTUFQW3NvdXJjZS5jaGFyQ29kZUF0KHBzeildXG4gICAgICAgICAgICAvLyBJbnZhbGlkIGNoYXJhY3RlclxuICAgICAgaWYgKGNhcnJ5ID09PSAyNTUpIHsgcmV0dXJuIH1cbiAgICAgIHZhciBpID0gMFxuICAgICAgZm9yICh2YXIgaXQzID0gc2l6ZSAtIDE7IChjYXJyeSAhPT0gMCB8fCBpIDwgbGVuZ3RoKSAmJiAoaXQzICE9PSAtMSk7IGl0My0tLCBpKyspIHtcbiAgICAgICAgY2FycnkgKz0gKEJBU0UgKiBiMjU2W2l0M10pID4+PiAwXG4gICAgICAgIGIyNTZbaXQzXSA9IChjYXJyeSAlIDI1NikgPj4+IDBcbiAgICAgICAgY2FycnkgPSAoY2FycnkgLyAyNTYpID4+PiAwXG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdOb24temVybyBjYXJyeScpIH1cbiAgICAgIGxlbmd0aCA9IGlcbiAgICAgIHBzeisrXG4gICAgfVxuICAgICAgICAvLyBTa2lwIHRyYWlsaW5nIHNwYWNlcy5cbiAgICBpZiAoc291cmNlW3Bzel0gPT09ICcgJykgeyByZXR1cm4gfVxuICAgICAgICAvLyBTa2lwIGxlYWRpbmcgemVyb2VzIGluIGIyNTYuXG4gICAgdmFyIGl0NCA9IHNpemUgLSBsZW5ndGhcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplICYmIGIyNTZbaXQ0XSA9PT0gMCkge1xuICAgICAgaXQ0KytcbiAgICB9XG4gICAgdmFyIHZjaCA9IG5ldyBVaW50OEFycmF5KHplcm9lcyArIChzaXplIC0gaXQ0KSlcbiAgICB2YXIgaiA9IHplcm9lc1xuICAgIHdoaWxlIChpdDQgIT09IHNpemUpIHtcbiAgICAgIHZjaFtqKytdID0gYjI1NltpdDQrK11cbiAgICB9XG4gICAgcmV0dXJuIHZjaFxuICB9XG4gIGZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgdmFyIGJ1ZmZlciA9IGRlY29kZVVuc2FmZShzdHJpbmcpXG4gICAgaWYgKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vbi1iYXNlJyArIEJBU0UgKyAnIGNoYXJhY3RlcicpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBkZWNvZGVVbnNhZmU6IGRlY29kZVVuc2FmZSxcbiAgICBkZWNvZGU6IGRlY29kZVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VcbiJdLCJuYW1lcyI6WyJiYXNlIiwiQUxQSEFCRVQiLCJsZW5ndGgiLCJUeXBlRXJyb3IiLCJCQVNFX01BUCIsIlVpbnQ4QXJyYXkiLCJqIiwiaSIsIngiLCJjaGFyQXQiLCJ4YyIsImNoYXJDb2RlQXQiLCJCQVNFIiwiTEVBREVSIiwiRkFDVE9SIiwiTWF0aCIsImxvZyIsImlGQUNUT1IiLCJlbmNvZGUiLCJzb3VyY2UiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbSIsInplcm9lcyIsInBiZWdpbiIsInBlbmQiLCJzaXplIiwiYjU4IiwiY2FycnkiLCJpdDEiLCJFcnJvciIsIml0MiIsInN0ciIsInJlcGVhdCIsImRlY29kZVVuc2FmZSIsInBzeiIsImIyNTYiLCJpdDMiLCJpdDQiLCJ2Y2giLCJkZWNvZGUiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@multiformats+base-x@4.0.1/node_modules/@multiformats/base-x/src/index.js\n");

/***/ })

};
;