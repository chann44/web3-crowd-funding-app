"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/secure-json-parse@2.7.0";
exports.ids = ["vendor-chunks/secure-json-parse@2.7.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/secure-json-parse@2.7.0/node_modules/secure-json-parse/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/secure-json-parse@2.7.0/node_modules/secure-json-parse/index.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("\nconst hasBuffer = typeof Buffer !== \"undefined\";\nconst suspectProtoRx = /\"(?:_|\\\\u005[Ff])(?:_|\\\\u005[Ff])(?:p|\\\\u0070)(?:r|\\\\u0072)(?:o|\\\\u006[Ff])(?:t|\\\\u0074)(?:o|\\\\u006[Ff])(?:_|\\\\u005[Ff])(?:_|\\\\u005[Ff])\"\\s*:/;\nconst suspectConstructorRx = /\"(?:c|\\\\u0063)(?:o|\\\\u006[Ff])(?:n|\\\\u006[Ee])(?:s|\\\\u0073)(?:t|\\\\u0074)(?:r|\\\\u0072)(?:u|\\\\u0075)(?:c|\\\\u0063)(?:t|\\\\u0074)(?:o|\\\\u006[Ff])(?:r|\\\\u0072)\"\\s*:/;\nfunction _parse(text, reviver, options) {\n    // Normalize arguments\n    if (options == null) {\n        if (reviver !== null && typeof reviver === \"object\") {\n            options = reviver;\n            reviver = undefined;\n        }\n    }\n    if (hasBuffer && Buffer.isBuffer(text)) {\n        text = text.toString();\n    }\n    // BOM checker\n    if (text && text.charCodeAt(0) === 0xFEFF) {\n        text = text.slice(1);\n    }\n    // Parse normally, allowing exceptions\n    const obj = JSON.parse(text, reviver);\n    // Ignore null and non-objects\n    if (obj === null || typeof obj !== \"object\") {\n        return obj;\n    }\n    const protoAction = options && options.protoAction || \"error\";\n    const constructorAction = options && options.constructorAction || \"error\";\n    // options: 'error' (default) / 'remove' / 'ignore'\n    if (protoAction === \"ignore\" && constructorAction === \"ignore\") {\n        return obj;\n    }\n    if (protoAction !== \"ignore\" && constructorAction !== \"ignore\") {\n        if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {\n            return obj;\n        }\n    } else if (protoAction !== \"ignore\" && constructorAction === \"ignore\") {\n        if (suspectProtoRx.test(text) === false) {\n            return obj;\n        }\n    } else {\n        if (suspectConstructorRx.test(text) === false) {\n            return obj;\n        }\n    }\n    // Scan result for proto keys\n    return filter(obj, {\n        protoAction,\n        constructorAction,\n        safe: options && options.safe\n    });\n}\nfunction filter(obj, { protoAction = \"error\", constructorAction = \"error\", safe } = {}) {\n    let next = [\n        obj\n    ];\n    while(next.length){\n        const nodes = next;\n        next = [];\n        for (const node of nodes){\n            if (protoAction !== \"ignore\" && Object.prototype.hasOwnProperty.call(node, \"__proto__\")) {\n                if (safe === true) {\n                    return null;\n                } else if (protoAction === \"error\") {\n                    throw new SyntaxError(\"Object contains forbidden prototype property\");\n                }\n                delete node.__proto__ // eslint-disable-line no-proto\n                ;\n            }\n            if (constructorAction !== \"ignore\" && Object.prototype.hasOwnProperty.call(node, \"constructor\") && Object.prototype.hasOwnProperty.call(node.constructor, \"prototype\")) {\n                if (safe === true) {\n                    return null;\n                } else if (constructorAction === \"error\") {\n                    throw new SyntaxError(\"Object contains forbidden prototype property\");\n                }\n                delete node.constructor;\n            }\n            for(const key in node){\n                const value = node[key];\n                if (value && typeof value === \"object\") {\n                    next.push(value);\n                }\n            }\n        }\n    }\n    return obj;\n}\nfunction parse(text, reviver, options) {\n    const stackTraceLimit = Error.stackTraceLimit;\n    Error.stackTraceLimit = 0;\n    try {\n        return _parse(text, reviver, options);\n    } finally{\n        Error.stackTraceLimit = stackTraceLimit;\n    }\n}\nfunction safeParse(text, reviver) {\n    const stackTraceLimit = Error.stackTraceLimit;\n    Error.stackTraceLimit = 0;\n    try {\n        return _parse(text, reviver, {\n            safe: true\n        });\n    } catch (_e) {\n        return null;\n    } finally{\n        Error.stackTraceLimit = stackTraceLimit;\n    }\n}\nmodule.exports = parse;\nmodule.exports[\"default\"] = parse;\nmodule.exports.parse = parse;\nmodule.exports.safeParse = safeParse;\nmodule.exports.scan = filter;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc2VjdXJlLWpzb24tcGFyc2VAMi43LjAvbm9kZV9tb2R1bGVzL3NlY3VyZS1qc29uLXBhcnNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsWUFBWSxPQUFPQyxXQUFXO0FBQ3BDLE1BQU1DLGlCQUFpQjtBQUN2QixNQUFNQyx1QkFBdUI7QUFFN0IsU0FBU0MsT0FBUUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU87SUFDckMsc0JBQXNCO0lBQ3RCLElBQUlBLFdBQVcsTUFBTTtRQUNuQixJQUFJRCxZQUFZLFFBQVEsT0FBT0EsWUFBWSxVQUFVO1lBQ25EQyxVQUFVRDtZQUNWQSxVQUFVRTtRQUNaO0lBQ0Y7SUFFQSxJQUFJUixhQUFhQyxPQUFPUSxRQUFRLENBQUNKLE9BQU87UUFDdENBLE9BQU9BLEtBQUtLLFFBQVE7SUFDdEI7SUFFQSxjQUFjO0lBQ2QsSUFBSUwsUUFBUUEsS0FBS00sVUFBVSxDQUFDLE9BQU8sUUFBUTtRQUN6Q04sT0FBT0EsS0FBS08sS0FBSyxDQUFDO0lBQ3BCO0lBRUEsc0NBQXNDO0lBQ3RDLE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ1YsTUFBTUM7SUFFN0IsOEJBQThCO0lBQzlCLElBQUlPLFFBQVEsUUFBUSxPQUFPQSxRQUFRLFVBQVU7UUFDM0MsT0FBT0E7SUFDVDtJQUVBLE1BQU1HLGNBQWMsV0FBWVQsUUFBUVMsV0FBVyxJQUFLO0lBQ3hELE1BQU1DLG9CQUFvQixXQUFZVixRQUFRVSxpQkFBaUIsSUFBSztJQUVwRSxtREFBbUQ7SUFDbkQsSUFBSUQsZ0JBQWdCLFlBQVlDLHNCQUFzQixVQUFVO1FBQzlELE9BQU9KO0lBQ1Q7SUFFQSxJQUFJRyxnQkFBZ0IsWUFBWUMsc0JBQXNCLFVBQVU7UUFDOUQsSUFBSWYsZUFBZWdCLElBQUksQ0FBQ2IsVUFBVSxTQUFTRixxQkFBcUJlLElBQUksQ0FBQ2IsVUFBVSxPQUFPO1lBQ3BGLE9BQU9RO1FBQ1Q7SUFDRixPQUFPLElBQUlHLGdCQUFnQixZQUFZQyxzQkFBc0IsVUFBVTtRQUNyRSxJQUFJZixlQUFlZ0IsSUFBSSxDQUFDYixVQUFVLE9BQU87WUFDdkMsT0FBT1E7UUFDVDtJQUNGLE9BQU87UUFDTCxJQUFJVixxQkFBcUJlLElBQUksQ0FBQ2IsVUFBVSxPQUFPO1lBQzdDLE9BQU9RO1FBQ1Q7SUFDRjtJQUVBLDZCQUE2QjtJQUM3QixPQUFPTSxPQUFPTixLQUFLO1FBQUVHO1FBQWFDO1FBQW1CRyxNQUFNYixXQUFXQSxRQUFRYSxJQUFJO0lBQUM7QUFDckY7QUFFQSxTQUFTRCxPQUFRTixHQUFHLEVBQUUsRUFBRUcsY0FBYyxPQUFPLEVBQUVDLG9CQUFvQixPQUFPLEVBQUVHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRixJQUFJQyxPQUFPO1FBQUNSO0tBQUk7SUFFaEIsTUFBT1EsS0FBS0MsTUFBTSxDQUFFO1FBQ2xCLE1BQU1DLFFBQVFGO1FBQ2RBLE9BQU8sRUFBRTtRQUVULEtBQUssTUFBTUcsUUFBUUQsTUFBTztZQUN4QixJQUFJUCxnQkFBZ0IsWUFBWVMsT0FBT0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osTUFBTSxjQUFjO2dCQUN2RixJQUFJSixTQUFTLE1BQU07b0JBQ2pCLE9BQU87Z0JBQ1QsT0FBTyxJQUFJSixnQkFBZ0IsU0FBUztvQkFDbEMsTUFBTSxJQUFJYSxZQUFZO2dCQUN4QjtnQkFFQSxPQUFPTCxLQUFLTSxTQUFTLENBQUMsK0JBQStCOztZQUN2RDtZQUVBLElBQUliLHNCQUFzQixZQUN0QlEsT0FBT0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osTUFBTSxrQkFDM0NDLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNKLEtBQUtPLFdBQVcsRUFBRSxjQUFjO2dCQUN2RSxJQUFJWCxTQUFTLE1BQU07b0JBQ2pCLE9BQU87Z0JBQ1QsT0FBTyxJQUFJSCxzQkFBc0IsU0FBUztvQkFDeEMsTUFBTSxJQUFJWSxZQUFZO2dCQUN4QjtnQkFFQSxPQUFPTCxLQUFLTyxXQUFXO1lBQ3pCO1lBRUEsSUFBSyxNQUFNQyxPQUFPUixLQUFNO2dCQUN0QixNQUFNUyxRQUFRVCxJQUFJLENBQUNRLElBQUk7Z0JBQ3ZCLElBQUlDLFNBQVMsT0FBT0EsVUFBVSxVQUFVO29CQUN0Q1osS0FBS2EsSUFBSSxDQUFDRDtnQkFDWjtZQUNGO1FBQ0Y7SUFDRjtJQUNBLE9BQU9wQjtBQUNUO0FBRUEsU0FBU0UsTUFBT1YsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU87SUFDcEMsTUFBTTRCLGtCQUFrQkMsTUFBTUQsZUFBZTtJQUM3Q0MsTUFBTUQsZUFBZSxHQUFHO0lBQ3hCLElBQUk7UUFDRixPQUFPL0IsT0FBT0MsTUFBTUMsU0FBU0M7SUFDL0IsU0FBVTtRQUNSNkIsTUFBTUQsZUFBZSxHQUFHQTtJQUMxQjtBQUNGO0FBRUEsU0FBU0UsVUFBV2hDLElBQUksRUFBRUMsT0FBTztJQUMvQixNQUFNNkIsa0JBQWtCQyxNQUFNRCxlQUFlO0lBQzdDQyxNQUFNRCxlQUFlLEdBQUc7SUFDeEIsSUFBSTtRQUNGLE9BQU8vQixPQUFPQyxNQUFNQyxTQUFTO1lBQUVjLE1BQU07UUFBSztJQUM1QyxFQUFFLE9BQU9rQixJQUFJO1FBQ1gsT0FBTztJQUNULFNBQVU7UUFDUkYsTUFBTUQsZUFBZSxHQUFHQTtJQUMxQjtBQUNGO0FBRUFJLE9BQU9DLE9BQU8sR0FBR3pCO0FBQ2pCd0IseUJBQXNCLEdBQUd4QjtBQUN6QndCLG9CQUFvQixHQUFHeEI7QUFDdkJ3Qix3QkFBd0IsR0FBR0Y7QUFDM0JFLG1CQUFtQixHQUFHcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vc2VjdXJlLWpzb24tcGFyc2VAMi43LjAvbm9kZV9tb2R1bGVzL3NlY3VyZS1qc29uLXBhcnNlL2luZGV4LmpzPzVjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGhhc0J1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnXG5jb25zdCBzdXNwZWN0UHJvdG9SeCA9IC9cIig/Ol98XFxcXHUwMDVbRmZdKSg/Ol98XFxcXHUwMDVbRmZdKSg/OnB8XFxcXHUwMDcwKSg/OnJ8XFxcXHUwMDcyKSg/Om98XFxcXHUwMDZbRmZdKSg/OnR8XFxcXHUwMDc0KSg/Om98XFxcXHUwMDZbRmZdKSg/Ol98XFxcXHUwMDVbRmZdKSg/Ol98XFxcXHUwMDVbRmZdKVwiXFxzKjovXG5jb25zdCBzdXNwZWN0Q29uc3RydWN0b3JSeCA9IC9cIig/OmN8XFxcXHUwMDYzKSg/Om98XFxcXHUwMDZbRmZdKSg/Om58XFxcXHUwMDZbRWVdKSg/OnN8XFxcXHUwMDczKSg/OnR8XFxcXHUwMDc0KSg/OnJ8XFxcXHUwMDcyKSg/OnV8XFxcXHUwMDc1KSg/OmN8XFxcXHUwMDYzKSg/OnR8XFxcXHUwMDc0KSg/Om98XFxcXHUwMDZbRmZdKSg/OnJ8XFxcXHUwMDcyKVwiXFxzKjovXG5cbmZ1bmN0aW9uIF9wYXJzZSAodGV4dCwgcmV2aXZlciwgb3B0aW9ucykge1xuICAvLyBOb3JtYWxpemUgYXJndW1lbnRzXG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBpZiAocmV2aXZlciAhPT0gbnVsbCAmJiB0eXBlb2YgcmV2aXZlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSByZXZpdmVyXG4gICAgICByZXZpdmVyID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0J1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIodGV4dCkpIHtcbiAgICB0ZXh0ID0gdGV4dC50b1N0cmluZygpXG4gIH1cblxuICAvLyBCT00gY2hlY2tlclxuICBpZiAodGV4dCAmJiB0ZXh0LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIHRleHQgPSB0ZXh0LnNsaWNlKDEpXG4gIH1cblxuICAvLyBQYXJzZSBub3JtYWxseSwgYWxsb3dpbmcgZXhjZXB0aW9uc1xuICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHRleHQsIHJldml2ZXIpXG5cbiAgLy8gSWdub3JlIG51bGwgYW5kIG5vbi1vYmplY3RzXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBjb25zdCBwcm90b0FjdGlvbiA9IChvcHRpb25zICYmIG9wdGlvbnMucHJvdG9BY3Rpb24pIHx8ICdlcnJvcidcbiAgY29uc3QgY29uc3RydWN0b3JBY3Rpb24gPSAob3B0aW9ucyAmJiBvcHRpb25zLmNvbnN0cnVjdG9yQWN0aW9uKSB8fCAnZXJyb3InXG5cbiAgLy8gb3B0aW9uczogJ2Vycm9yJyAoZGVmYXVsdCkgLyAncmVtb3ZlJyAvICdpZ25vcmUnXG4gIGlmIChwcm90b0FjdGlvbiA9PT0gJ2lnbm9yZScgJiYgY29uc3RydWN0b3JBY3Rpb24gPT09ICdpZ25vcmUnKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgaWYgKHByb3RvQWN0aW9uICE9PSAnaWdub3JlJyAmJiBjb25zdHJ1Y3RvckFjdGlvbiAhPT0gJ2lnbm9yZScpIHtcbiAgICBpZiAoc3VzcGVjdFByb3RvUngudGVzdCh0ZXh0KSA9PT0gZmFsc2UgJiYgc3VzcGVjdENvbnN0cnVjdG9yUngudGVzdCh0ZXh0KSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvdG9BY3Rpb24gIT09ICdpZ25vcmUnICYmIGNvbnN0cnVjdG9yQWN0aW9uID09PSAnaWdub3JlJykge1xuICAgIGlmIChzdXNwZWN0UHJvdG9SeC50ZXN0KHRleHQpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG9ialxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VzcGVjdENvbnN0cnVjdG9yUngudGVzdCh0ZXh0KSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gIH1cblxuICAvLyBTY2FuIHJlc3VsdCBmb3IgcHJvdG8ga2V5c1xuICByZXR1cm4gZmlsdGVyKG9iaiwgeyBwcm90b0FjdGlvbiwgY29uc3RydWN0b3JBY3Rpb24sIHNhZmU6IG9wdGlvbnMgJiYgb3B0aW9ucy5zYWZlIH0pXG59XG5cbmZ1bmN0aW9uIGZpbHRlciAob2JqLCB7IHByb3RvQWN0aW9uID0gJ2Vycm9yJywgY29uc3RydWN0b3JBY3Rpb24gPSAnZXJyb3InLCBzYWZlIH0gPSB7fSkge1xuICBsZXQgbmV4dCA9IFtvYmpdXG5cbiAgd2hpbGUgKG5leHQubGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBuZXh0XG4gICAgbmV4dCA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgIGlmIChwcm90b0FjdGlvbiAhPT0gJ2lnbm9yZScgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsICdfX3Byb3RvX18nKSkgeyAvLyBBdm9pZCBjYWxsaW5nIG5vZGUuaGFzT3duUHJvcGVydHkgZGlyZWN0bHlcbiAgICAgICAgaWYgKHNhZmUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHByb3RvQWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdPYmplY3QgY29udGFpbnMgZm9yYmlkZGVuIHByb3RvdHlwZSBwcm9wZXJ0eScpXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgbm9kZS5fX3Byb3RvX18gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uc3RydWN0b3JBY3Rpb24gIT09ICdpZ25vcmUnICYmXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsICdjb25zdHJ1Y3RvcicpICYmXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUuY29uc3RydWN0b3IsICdwcm90b3R5cGUnKSkgeyAvLyBBdm9pZCBjYWxsaW5nIG5vZGUuaGFzT3duUHJvcGVydHkgZGlyZWN0bHlcbiAgICAgICAgaWYgKHNhZmUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yQWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdPYmplY3QgY29udGFpbnMgZm9yYmlkZGVuIHByb3RvdHlwZSBwcm9wZXJ0eScpXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgbm9kZS5jb25zdHJ1Y3RvclxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBub2RlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZVtrZXldXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbmV4dC5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gcGFyc2UgKHRleHQsIHJldml2ZXIsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0XG4gIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IDBcbiAgdHJ5IHtcbiAgICByZXR1cm4gX3BhcnNlKHRleHQsIHJldml2ZXIsIG9wdGlvbnMpXG4gIH0gZmluYWxseSB7XG4gICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gc3RhY2tUcmFjZUxpbWl0XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZVBhcnNlICh0ZXh0LCByZXZpdmVyKSB7XG4gIGNvbnN0IHN0YWNrVHJhY2VMaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdFxuICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSAwXG4gIHRyeSB7XG4gICAgcmV0dXJuIF9wYXJzZSh0ZXh0LCByZXZpdmVyLCB7IHNhZmU6IHRydWUgfSlcbiAgfSBjYXRjaCAoX2UpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGZpbmFsbHkge1xuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IHN0YWNrVHJhY2VMaW1pdFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuc2FmZVBhcnNlID0gc2FmZVBhcnNlXG5tb2R1bGUuZXhwb3J0cy5zY2FuID0gZmlsdGVyXG4iXSwibmFtZXMiOlsiaGFzQnVmZmVyIiwiQnVmZmVyIiwic3VzcGVjdFByb3RvUngiLCJzdXNwZWN0Q29uc3RydWN0b3JSeCIsIl9wYXJzZSIsInRleHQiLCJyZXZpdmVyIiwib3B0aW9ucyIsInVuZGVmaW5lZCIsImlzQnVmZmVyIiwidG9TdHJpbmciLCJjaGFyQ29kZUF0Iiwic2xpY2UiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJwcm90b0FjdGlvbiIsImNvbnN0cnVjdG9yQWN0aW9uIiwidGVzdCIsImZpbHRlciIsInNhZmUiLCJuZXh0IiwibGVuZ3RoIiwibm9kZXMiLCJub2RlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ludGF4RXJyb3IiLCJfX3Byb3RvX18iLCJjb25zdHJ1Y3RvciIsImtleSIsInZhbHVlIiwicHVzaCIsInN0YWNrVHJhY2VMaW1pdCIsIkVycm9yIiwic2FmZVBhcnNlIiwiX2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsInNjYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/secure-json-parse@2.7.0/node_modules/secure-json-parse/index.js\n");

/***/ })

};
;