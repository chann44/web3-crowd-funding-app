"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ethereum-bloom-filters@1.0.10";
exports.ids = ["vendor-chunks/ethereum-bloom-filters@1.0.10"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/utils.js\");\n/**\r\n * Returns true if the bloom is a valid bloom\r\n * @param bloom The bloom\r\n */ function isBloom(bloom) {\n    if (typeof bloom !== \"string\") {\n        return false;\n    }\n    if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {\n        return false;\n    }\n    if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {\n        return true;\n    }\n    return false;\n}\nexports.isBloom = isBloom;\n/**\r\n * Returns true if the value is part of the given bloom\r\n * note: false positives are possible.\r\n * @param bloom encoded bloom\r\n * @param value The value\r\n */ function isInBloom(bloom, value) {\n    if (typeof value === \"object\" && value.constructor === Uint8Array) {\n        value = utils_1.bytesToHex(value);\n    }\n    const hash = utils_1.keccak256(value).replace(\"0x\", \"\");\n    for(let i = 0; i < 12; i += 4){\n        // calculate bit position in bloom filter that must be active\n        const bitpos = (parseInt(hash.substr(i, 2), 16) << 8) + parseInt(hash.substr(i + 2, 2), 16) & 2047;\n        // test if bitpos in bloom is active\n        const code = codePointToInt(bloom.charCodeAt(bloom.length - 1 - Math.floor(bitpos / 4)));\n        const offset = 1 << bitpos % 4;\n        if ((code & offset) !== offset) {\n            return false;\n        }\n    }\n    return true;\n}\nexports.isInBloom = isInBloom;\n/**\r\n * Code points to int\r\n * @param codePoint The code point\r\n */ function codePointToInt(codePoint) {\n    if (codePoint >= 48 && codePoint <= 57) {\n        /* ['0'..'9'] -> [0..9] */ return codePoint - 48;\n    }\n    if (codePoint >= 65 && codePoint <= 70) {\n        /* ['A'..'F'] -> [10..15] */ return codePoint - 55;\n    }\n    if (codePoint >= 97 && codePoint <= 102) {\n        /* ['a'..'f'] -> [10..15] */ return codePoint - 87;\n    }\n    throw new Error(\"invalid bloom\");\n}\n/**\r\n * Returns true if the ethereum users address is part of the given bloom.\r\n * note: false positives are possible.\r\n * @param bloom encoded bloom\r\n * @param address the address to test\r\n */ function isUserEthereumAddressInBloom(bloom, ethereumAddress) {\n    if (!isBloom(bloom)) {\n        throw new Error(\"Invalid bloom given\");\n    }\n    if (!isAddress(ethereumAddress)) {\n        throw new Error(`Invalid ethereum address given: \"${ethereumAddress}\"`);\n    }\n    // you have to pad the ethereum address to 32 bytes\n    // else the bloom filter does not work\n    // this is only if your matching the USERS\n    // ethereum address. Contract address do not need this\n    // hence why we have 2 methods\n    // (0x is not in the 2nd parameter of padleft so 64 chars is fine)\n    const address = utils_1.padLeft(ethereumAddress, 64);\n    return isInBloom(bloom, address);\n}\nexports.isUserEthereumAddressInBloom = isUserEthereumAddressInBloom;\n/**\r\n * Returns true if the contract address is part of the given bloom.\r\n * note: false positives are possible.\r\n * @param bloom encoded bloom\r\n * @param contractAddress the contract address to test\r\n */ function isContractAddressInBloom(bloom, contractAddress) {\n    if (!isBloom(bloom)) {\n        throw new Error(\"Invalid bloom given\");\n    }\n    if (!isAddress(contractAddress)) {\n        throw new Error(`Invalid contract address given: \"${contractAddress}\"`);\n    }\n    return isInBloom(bloom, contractAddress);\n}\nexports.isContractAddressInBloom = isContractAddressInBloom;\n/**\r\n * Returns true if the topic is part of the given bloom.\r\n * note: false positives are possible.\r\n * @param bloom encoded bloom\r\n * @param topic the topic encoded hex\r\n */ function isTopicInBloom(bloom, topic) {\n    if (!isBloom(bloom)) {\n        throw new Error(\"Invalid bloom given\");\n    }\n    if (!isTopic(topic)) {\n        throw new Error(\"Invalid topic\");\n    }\n    return isInBloom(bloom, topic);\n}\nexports.isTopicInBloom = isTopicInBloom;\n/**\r\n * Checks if its a valid topic\r\n * @param topic encoded hex topic\r\n */ function isTopic(topic) {\n    if (typeof topic !== \"string\") {\n        return false;\n    }\n    if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {\n        return false;\n    } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {\n        return true;\n    }\n    return false;\n}\nexports.isTopic = isTopic;\n/**\r\n * Is valid address\r\n * @param address The address\r\n */ function isAddress(address) {\n    if (typeof address !== \"string\") {\n        return false;\n    }\n    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {\n        return true;\n    }\n    if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {\n        return true;\n    }\n    return false;\n}\nexports.isAddress = isAddress;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZXRoZXJldW0tYmxvb20tZmlsdGVyc0AxLjAuMTAvbm9kZV9tb2R1bGVzL2V0aGVyZXVtLWJsb29tLWZpbHRlcnMvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxNQUFNQyxVQUFVQyxtQkFBT0EsQ0FBQywySEFBUztBQUNqQzs7O0NBR0MsR0FDRCxTQUFTQyxRQUFRQyxLQUFLO0lBQ2xCLElBQUksT0FBT0EsVUFBVSxVQUFVO1FBQzNCLE9BQU87SUFDWDtJQUNBLElBQUksQ0FBQyx3QkFBd0JDLElBQUksQ0FBQ0QsUUFBUTtRQUN0QyxPQUFPO0lBQ1g7SUFDQSxJQUFJLHVCQUF1QkMsSUFBSSxDQUFDRCxVQUM1Qix1QkFBdUJDLElBQUksQ0FBQ0QsUUFBUTtRQUNwQyxPQUFPO0lBQ1g7SUFDQSxPQUFPO0FBQ1g7QUFDQUwsZUFBZSxHQUFHSTtBQUNsQjs7Ozs7Q0FLQyxHQUNELFNBQVNHLFVBQVVGLEtBQUssRUFBRUosS0FBSztJQUMzQixJQUFJLE9BQU9BLFVBQVUsWUFBWUEsTUFBTU8sV0FBVyxLQUFLQyxZQUFZO1FBQy9EUixRQUFRQyxRQUFRUSxVQUFVLENBQUNUO0lBQy9CO0lBQ0EsTUFBTVUsT0FBT1QsUUFBUVUsU0FBUyxDQUFDWCxPQUFPWSxPQUFPLENBQUMsTUFBTTtJQUNwRCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxJQUFJQSxLQUFLLEVBQUc7UUFDNUIsNkRBQTZEO1FBQzdELE1BQU1DLFNBQVMsQ0FBRUMsU0FBU0wsS0FBS00sTUFBTSxDQUFDSCxHQUFHLElBQUksT0FBTyxLQUNoREUsU0FBU0wsS0FBS00sTUFBTSxDQUFDSCxJQUFJLEdBQUcsSUFBSSxNQUNoQztRQUNKLG9DQUFvQztRQUNwQyxNQUFNSSxPQUFPQyxlQUFlZCxNQUFNZSxVQUFVLENBQUNmLE1BQU1nQixNQUFNLEdBQUcsSUFBSUMsS0FBS0MsS0FBSyxDQUFDUixTQUFTO1FBQ3BGLE1BQU1TLFNBQVMsS0FBS1QsU0FBUztRQUM3QixJQUFJLENBQUNHLE9BQU9NLE1BQUssTUFBT0EsUUFBUTtZQUM1QixPQUFPO1FBQ1g7SUFDSjtJQUNBLE9BQU87QUFDWDtBQUNBeEIsaUJBQWlCLEdBQUdPO0FBQ3BCOzs7Q0FHQyxHQUNELFNBQVNZLGVBQWVNLFNBQVM7SUFDN0IsSUFBSUEsYUFBYSxNQUFNQSxhQUFhLElBQUk7UUFDcEMsd0JBQXdCLEdBQ3hCLE9BQU9BLFlBQVk7SUFDdkI7SUFDQSxJQUFJQSxhQUFhLE1BQU1BLGFBQWEsSUFBSTtRQUNwQywwQkFBMEIsR0FDMUIsT0FBT0EsWUFBWTtJQUN2QjtJQUNBLElBQUlBLGFBQWEsTUFBTUEsYUFBYSxLQUFLO1FBQ3JDLDBCQUEwQixHQUMxQixPQUFPQSxZQUFZO0lBQ3ZCO0lBQ0EsTUFBTSxJQUFJQyxNQUFNO0FBQ3BCO0FBQ0E7Ozs7O0NBS0MsR0FDRCxTQUFTQyw2QkFBNkJ0QixLQUFLLEVBQUV1QixlQUFlO0lBQ3hELElBQUksQ0FBQ3hCLFFBQVFDLFFBQVE7UUFDakIsTUFBTSxJQUFJcUIsTUFBTTtJQUNwQjtJQUNBLElBQUksQ0FBQ0csVUFBVUQsa0JBQWtCO1FBQzdCLE1BQU0sSUFBSUYsTUFBTSxDQUFDLGlDQUFpQyxFQUFFRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFFO0lBQ0EsbURBQW1EO0lBQ25ELHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsc0RBQXNEO0lBQ3RELDhCQUE4QjtJQUM5QixrRUFBa0U7SUFDbEUsTUFBTUUsVUFBVTVCLFFBQVE2QixPQUFPLENBQUNILGlCQUFpQjtJQUNqRCxPQUFPckIsVUFBVUYsT0FBT3lCO0FBQzVCO0FBQ0E5QixvQ0FBb0MsR0FBRzJCO0FBQ3ZDOzs7OztDQUtDLEdBQ0QsU0FBU0sseUJBQXlCM0IsS0FBSyxFQUFFNEIsZUFBZTtJQUNwRCxJQUFJLENBQUM3QixRQUFRQyxRQUFRO1FBQ2pCLE1BQU0sSUFBSXFCLE1BQU07SUFDcEI7SUFDQSxJQUFJLENBQUNHLFVBQVVJLGtCQUFrQjtRQUM3QixNQUFNLElBQUlQLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRU8sZ0JBQWdCLENBQUMsQ0FBQztJQUMxRTtJQUNBLE9BQU8xQixVQUFVRixPQUFPNEI7QUFDNUI7QUFDQWpDLGdDQUFnQyxHQUFHZ0M7QUFDbkM7Ozs7O0NBS0MsR0FDRCxTQUFTRSxlQUFlN0IsS0FBSyxFQUFFOEIsS0FBSztJQUNoQyxJQUFJLENBQUMvQixRQUFRQyxRQUFRO1FBQ2pCLE1BQU0sSUFBSXFCLE1BQU07SUFDcEI7SUFDQSxJQUFJLENBQUNVLFFBQVFELFFBQVE7UUFDakIsTUFBTSxJQUFJVCxNQUFNO0lBQ3BCO0lBQ0EsT0FBT25CLFVBQVVGLE9BQU84QjtBQUM1QjtBQUNBbkMsc0JBQXNCLEdBQUdrQztBQUN6Qjs7O0NBR0MsR0FDRCxTQUFTRSxRQUFRRCxLQUFLO0lBQ2xCLElBQUksT0FBT0EsVUFBVSxVQUFVO1FBQzNCLE9BQU87SUFDWDtJQUNBLElBQUksQ0FBQyx1QkFBdUI3QixJQUFJLENBQUM2QixRQUFRO1FBQ3JDLE9BQU87SUFDWCxPQUNLLElBQUksc0JBQXNCN0IsSUFBSSxDQUFDNkIsVUFDaEMsc0JBQXNCN0IsSUFBSSxDQUFDNkIsUUFBUTtRQUNuQyxPQUFPO0lBQ1g7SUFDQSxPQUFPO0FBQ1g7QUFDQW5DLGVBQWUsR0FBR29DO0FBQ2xCOzs7Q0FHQyxHQUNELFNBQVNQLFVBQVVDLE9BQU87SUFDdEIsSUFBSSxPQUFPQSxZQUFZLFVBQVU7UUFDN0IsT0FBTztJQUNYO0lBQ0EsSUFBSUEsUUFBUU8sS0FBSyxDQUFDLDJCQUEyQjtRQUN6QyxPQUFPO0lBQ1g7SUFDQSxJQUFJUCxRQUFRTyxLQUFLLENBQUMsbUNBQW1DO1FBQ2pELE9BQU87SUFDWDtJQUNBLE9BQU87QUFDWDtBQUNBckMsaUJBQWlCLEdBQUc2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9ldGhlcmV1bS1ibG9vbS1maWx0ZXJzQDEuMC4xMC9ub2RlX21vZHVsZXMvZXRoZXJldW0tYmxvb20tZmlsdGVycy9kaXN0L2luZGV4LmpzPzM2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBibG9vbSBpcyBhIHZhbGlkIGJsb29tXHJcbiAqIEBwYXJhbSBibG9vbSBUaGUgYmxvb21cclxuICovXHJcbmZ1bmN0aW9uIGlzQmxvb20oYmxvb20pIHtcclxuICAgIGlmICh0eXBlb2YgYmxvb20gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXigweCk/WzAtOWEtZl17NTEyfSQvaS50ZXN0KGJsb29tKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgvXigweCk/WzAtOWEtZl17NTEyfSQvLnRlc3QoYmxvb20pIHx8XHJcbiAgICAgICAgL14oMHgpP1swLTlBLUZdezUxMn0kLy50ZXN0KGJsb29tKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaXNCbG9vbSA9IGlzQmxvb207XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIHBhcnQgb2YgdGhlIGdpdmVuIGJsb29tXHJcbiAqIG5vdGU6IGZhbHNlIHBvc2l0aXZlcyBhcmUgcG9zc2libGUuXHJcbiAqIEBwYXJhbSBibG9vbSBlbmNvZGVkIGJsb29tXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGlzSW5CbG9vbShibG9vbSwgdmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgdmFsdWUgPSB1dGlsc18xLmJ5dGVzVG9IZXgodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFzaCA9IHV0aWxzXzEua2VjY2FrMjU2KHZhbHVlKS5yZXBsYWNlKCcweCcsICcnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkgKz0gNCkge1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBiaXQgcG9zaXRpb24gaW4gYmxvb20gZmlsdGVyIHRoYXQgbXVzdCBiZSBhY3RpdmVcclxuICAgICAgICBjb25zdCBiaXRwb3MgPSAoKHBhcnNlSW50KGhhc2guc3Vic3RyKGksIDIpLCAxNikgPDwgOCkgK1xyXG4gICAgICAgICAgICBwYXJzZUludChoYXNoLnN1YnN0cihpICsgMiwgMiksIDE2KSkgJlxyXG4gICAgICAgICAgICAyMDQ3O1xyXG4gICAgICAgIC8vIHRlc3QgaWYgYml0cG9zIGluIGJsb29tIGlzIGFjdGl2ZVxyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBjb2RlUG9pbnRUb0ludChibG9vbS5jaGFyQ29kZUF0KGJsb29tLmxlbmd0aCAtIDEgLSBNYXRoLmZsb29yKGJpdHBvcyAvIDQpKSk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMSA8PCBiaXRwb3MgJSA0O1xyXG4gICAgICAgIGlmICgoY29kZSAmIG9mZnNldCkgIT09IG9mZnNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0cy5pc0luQmxvb20gPSBpc0luQmxvb207XHJcbi8qKlxyXG4gKiBDb2RlIHBvaW50cyB0byBpbnRcclxuICogQHBhcmFtIGNvZGVQb2ludCBUaGUgY29kZSBwb2ludFxyXG4gKi9cclxuZnVuY3Rpb24gY29kZVBvaW50VG9JbnQoY29kZVBvaW50KSB7XHJcbiAgICBpZiAoY29kZVBvaW50ID49IDQ4ICYmIGNvZGVQb2ludCA8PSA1Nykge1xyXG4gICAgICAgIC8qIFsnMCcuLic5J10gLT4gWzAuLjldICovXHJcbiAgICAgICAgcmV0dXJuIGNvZGVQb2ludCAtIDQ4O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvZGVQb2ludCA+PSA2NSAmJiBjb2RlUG9pbnQgPD0gNzApIHtcclxuICAgICAgICAvKiBbJ0EnLi4nRiddIC0+IFsxMC4uMTVdICovXHJcbiAgICAgICAgcmV0dXJuIGNvZGVQb2ludCAtIDU1O1xyXG4gICAgfVxyXG4gICAgaWYgKGNvZGVQb2ludCA+PSA5NyAmJiBjb2RlUG9pbnQgPD0gMTAyKSB7XHJcbiAgICAgICAgLyogWydhJy4uJ2YnXSAtPiBbMTAuLjE1XSAqL1xyXG4gICAgICAgIHJldHVybiBjb2RlUG9pbnQgLSA4NztcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBibG9vbScpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGV0aGVyZXVtIHVzZXJzIGFkZHJlc3MgaXMgcGFydCBvZiB0aGUgZ2l2ZW4gYmxvb20uXHJcbiAqIG5vdGU6IGZhbHNlIHBvc2l0aXZlcyBhcmUgcG9zc2libGUuXHJcbiAqIEBwYXJhbSBibG9vbSBlbmNvZGVkIGJsb29tXHJcbiAqIEBwYXJhbSBhZGRyZXNzIHRoZSBhZGRyZXNzIHRvIHRlc3RcclxuICovXHJcbmZ1bmN0aW9uIGlzVXNlckV0aGVyZXVtQWRkcmVzc0luQmxvb20oYmxvb20sIGV0aGVyZXVtQWRkcmVzcykge1xyXG4gICAgaWYgKCFpc0Jsb29tKGJsb29tKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBibG9vbSBnaXZlbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FkZHJlc3MoZXRoZXJldW1BZGRyZXNzKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBldGhlcmV1bSBhZGRyZXNzIGdpdmVuOiBcIiR7ZXRoZXJldW1BZGRyZXNzfVwiYCk7XHJcbiAgICB9XHJcbiAgICAvLyB5b3UgaGF2ZSB0byBwYWQgdGhlIGV0aGVyZXVtIGFkZHJlc3MgdG8gMzIgYnl0ZXNcclxuICAgIC8vIGVsc2UgdGhlIGJsb29tIGZpbHRlciBkb2VzIG5vdCB3b3JrXHJcbiAgICAvLyB0aGlzIGlzIG9ubHkgaWYgeW91ciBtYXRjaGluZyB0aGUgVVNFUlNcclxuICAgIC8vIGV0aGVyZXVtIGFkZHJlc3MuIENvbnRyYWN0IGFkZHJlc3MgZG8gbm90IG5lZWQgdGhpc1xyXG4gICAgLy8gaGVuY2Ugd2h5IHdlIGhhdmUgMiBtZXRob2RzXHJcbiAgICAvLyAoMHggaXMgbm90IGluIHRoZSAybmQgcGFyYW1ldGVyIG9mIHBhZGxlZnQgc28gNjQgY2hhcnMgaXMgZmluZSlcclxuICAgIGNvbnN0IGFkZHJlc3MgPSB1dGlsc18xLnBhZExlZnQoZXRoZXJldW1BZGRyZXNzLCA2NCk7XHJcbiAgICByZXR1cm4gaXNJbkJsb29tKGJsb29tLCBhZGRyZXNzKTtcclxufVxyXG5leHBvcnRzLmlzVXNlckV0aGVyZXVtQWRkcmVzc0luQmxvb20gPSBpc1VzZXJFdGhlcmV1bUFkZHJlc3NJbkJsb29tO1xyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cmFjdCBhZGRyZXNzIGlzIHBhcnQgb2YgdGhlIGdpdmVuIGJsb29tLlxyXG4gKiBub3RlOiBmYWxzZSBwb3NpdGl2ZXMgYXJlIHBvc3NpYmxlLlxyXG4gKiBAcGFyYW0gYmxvb20gZW5jb2RlZCBibG9vbVxyXG4gKiBAcGFyYW0gY29udHJhY3RBZGRyZXNzIHRoZSBjb250cmFjdCBhZGRyZXNzIHRvIHRlc3RcclxuICovXHJcbmZ1bmN0aW9uIGlzQ29udHJhY3RBZGRyZXNzSW5CbG9vbShibG9vbSwgY29udHJhY3RBZGRyZXNzKSB7XHJcbiAgICBpZiAoIWlzQmxvb20oYmxvb20pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJsb29tIGdpdmVuJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQWRkcmVzcyhjb250cmFjdEFkZHJlc3MpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbnRyYWN0IGFkZHJlc3MgZ2l2ZW46IFwiJHtjb250cmFjdEFkZHJlc3N9XCJgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0luQmxvb20oYmxvb20sIGNvbnRyYWN0QWRkcmVzcyk7XHJcbn1cclxuZXhwb3J0cy5pc0NvbnRyYWN0QWRkcmVzc0luQmxvb20gPSBpc0NvbnRyYWN0QWRkcmVzc0luQmxvb207XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRvcGljIGlzIHBhcnQgb2YgdGhlIGdpdmVuIGJsb29tLlxyXG4gKiBub3RlOiBmYWxzZSBwb3NpdGl2ZXMgYXJlIHBvc3NpYmxlLlxyXG4gKiBAcGFyYW0gYmxvb20gZW5jb2RlZCBibG9vbVxyXG4gKiBAcGFyYW0gdG9waWMgdGhlIHRvcGljIGVuY29kZWQgaGV4XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1RvcGljSW5CbG9vbShibG9vbSwgdG9waWMpIHtcclxuICAgIGlmICghaXNCbG9vbShibG9vbSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmxvb20gZ2l2ZW4nKTtcclxuICAgIH1cclxuICAgIGlmICghaXNUb3BpYyh0b3BpYykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdG9waWMnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0luQmxvb20oYmxvb20sIHRvcGljKTtcclxufVxyXG5leHBvcnRzLmlzVG9waWNJbkJsb29tID0gaXNUb3BpY0luQmxvb207XHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgaXRzIGEgdmFsaWQgdG9waWNcclxuICogQHBhcmFtIHRvcGljIGVuY29kZWQgaGV4IHRvcGljXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1RvcGljKHRvcGljKSB7XHJcbiAgICBpZiAodHlwZW9mIHRvcGljICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghL14oMHgpP1swLTlhLWZdezY0fSQvaS50ZXN0KHRvcGljKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKC9eKDB4KT9bMC05YS1mXXs2NH0kLy50ZXN0KHRvcGljKSB8fFxyXG4gICAgICAgIC9eKDB4KT9bMC05QS1GXXs2NH0kLy50ZXN0KHRvcGljKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaXNUb3BpYyA9IGlzVG9waWM7XHJcbi8qKlxyXG4gKiBJcyB2YWxpZCBhZGRyZXNzXHJcbiAqIEBwYXJhbSBhZGRyZXNzIFRoZSBhZGRyZXNzXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FkZHJlc3MoYWRkcmVzcykge1xyXG4gICAgaWYgKHR5cGVvZiBhZGRyZXNzICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChhZGRyZXNzLm1hdGNoKC9eKDB4KT9bMC05YS1mQS1GXXs0MH0kLykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChhZGRyZXNzLm1hdGNoKC9eWEVbMC05XXsyfVswLTlBLVphLXpdezMwLDMxfSQvKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaXNBZGRyZXNzID0gaXNBZGRyZXNzO1xyXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ1dGlsc18xIiwicmVxdWlyZSIsImlzQmxvb20iLCJibG9vbSIsInRlc3QiLCJpc0luQmxvb20iLCJjb25zdHJ1Y3RvciIsIlVpbnQ4QXJyYXkiLCJieXRlc1RvSGV4IiwiaGFzaCIsImtlY2NhazI1NiIsInJlcGxhY2UiLCJpIiwiYml0cG9zIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJjb2RlIiwiY29kZVBvaW50VG9JbnQiLCJjaGFyQ29kZUF0IiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwib2Zmc2V0IiwiY29kZVBvaW50IiwiRXJyb3IiLCJpc1VzZXJFdGhlcmV1bUFkZHJlc3NJbkJsb29tIiwiZXRoZXJldW1BZGRyZXNzIiwiaXNBZGRyZXNzIiwiYWRkcmVzcyIsInBhZExlZnQiLCJpc0NvbnRyYWN0QWRkcmVzc0luQmxvb20iLCJjb250cmFjdEFkZHJlc3MiLCJpc1RvcGljSW5CbG9vbSIsInRvcGljIiwiaXNUb3BpYyIsIm1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/utils.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/utils.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst sha3 = __webpack_require__(/*! js-sha3 */ \"(ssr)/./node_modules/.pnpm/js-sha3@0.8.0/node_modules/js-sha3/src/sha3.js\");\n/**\r\n * Keccak256 hash\r\n * @param data The data\r\n */ function keccak256(data) {\n    return \"0x\" + sha3.keccak_256(toByteArray(data));\n}\nexports.keccak256 = keccak256;\n/**\r\n * Adding padding to string on the left\r\n * @param value The value\r\n * @param chars The chars\r\n */ exports.padLeft = (value, chars)=>{\n    const hasPrefix = /^0x/i.test(value) || typeof value === \"number\";\n    value = value.toString().replace(/^0x/i, \"\");\n    const padding = chars - value.length + 1 >= 0 ? chars - value.length + 1 : 0;\n    return (hasPrefix ? \"0x\" : \"\") + new Array(padding).join(\"0\") + value;\n};\n/**\r\n * Convert bytes to hex\r\n * @param bytes The bytes\r\n */ function bytesToHex(bytes) {\n    const hex = [];\n    for(let i = 0; i < bytes.length; i++){\n        hex.push((bytes[i] >>> 4).toString(16));\n        hex.push((bytes[i] & 0xf).toString(16));\n    }\n    return `0x${hex.join(\"\").replace(/^0+/, \"\")}`;\n}\nexports.bytesToHex = bytesToHex;\n/**\r\n * To byte array\r\n * @param value The value\r\n */ function toByteArray(value) {\n    if (value == null) {\n        throw new Error(\"cannot convert null value to array\");\n    }\n    if (typeof value === \"string\") {\n        const match = value.match(/^(0x)?[0-9a-fA-F]*$/);\n        if (!match) {\n            throw new Error(\"invalid hexidecimal string\");\n        }\n        if (match[1] !== \"0x\") {\n            throw new Error(\"hex string must have 0x prefix\");\n        }\n        value = value.substring(2);\n        if (value.length % 2) {\n            value = \"0\" + value;\n        }\n        const result = [];\n        for(let i = 0; i < value.length; i += 2){\n            result.push(parseInt(value.substr(i, 2), 16));\n        }\n        return addSlice(new Uint8Array(result));\n    }\n    if (isByteArray(value)) {\n        return addSlice(new Uint8Array(value));\n    }\n    throw new Error(\"invalid arrayify value\");\n}\nexports.toByteArray = toByteArray;\n/**\r\n * Is byte array\r\n * @param value The value\r\n */ function isByteArray(value) {\n    if (!value || // tslint:disable-next-line: radix\n    parseInt(String(value.length)) != value.length || typeof value === \"string\") {\n        return false;\n    }\n    for(let i = 0; i < value.length; i++){\n        const v = value[i];\n        // tslint:disable-next-line: radix\n        if (v < 0 || v >= 256 || parseInt(String(v)) != v) {\n            return false;\n        }\n    }\n    return true;\n}\n/**\r\n * Add slice to array\r\n * @param array The array\r\n */ function addSlice(array) {\n    if (array.slice !== undefined) {\n        return array;\n    }\n    array.slice = ()=>{\n        const args = Array.prototype.slice.call(arguments);\n        return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));\n    };\n    return array;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZXRoZXJldW0tYmxvb20tZmlsdGVyc0AxLjAuMTAvbm9kZV9tb2R1bGVzL2V0aGVyZXVtLWJsb29tLWZpbHRlcnMvZGlzdC91dGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxNQUFNQyxPQUFPQyxtQkFBT0EsQ0FBQywwRkFBUztBQUM5Qjs7O0NBR0MsR0FDRCxTQUFTQyxVQUFVQyxJQUFJO0lBQ25CLE9BQU8sT0FBT0gsS0FBS0ksVUFBVSxDQUFDQyxZQUFZRjtBQUM5QztBQUNBTCxpQkFBaUIsR0FBR0k7QUFDcEI7Ozs7Q0FJQyxHQUNESixlQUFlLEdBQUcsQ0FBQ0MsT0FBT1E7SUFDdEIsTUFBTUMsWUFBWSxPQUFPQyxJQUFJLENBQUNWLFVBQVUsT0FBT0EsVUFBVTtJQUN6REEsUUFBUUEsTUFBTVcsUUFBUSxHQUFHQyxPQUFPLENBQUMsUUFBUTtJQUN6QyxNQUFNQyxVQUFVTCxRQUFRUixNQUFNYyxNQUFNLEdBQUcsS0FBSyxJQUFJTixRQUFRUixNQUFNYyxNQUFNLEdBQUcsSUFBSTtJQUMzRSxPQUFPLENBQUNMLFlBQVksT0FBTyxFQUFDLElBQUssSUFBSU0sTUFBTUYsU0FBU0csSUFBSSxDQUFDLE9BQU9oQjtBQUNwRTtBQUNBOzs7Q0FHQyxHQUNELFNBQVNpQixXQUFXQyxLQUFLO0lBQ3JCLE1BQU1DLE1BQU0sRUFBRTtJQUNkLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixNQUFNSixNQUFNLEVBQUVNLElBQUs7UUFDbkNELElBQUlFLElBQUksQ0FBQyxDQUFDSCxLQUFLLENBQUNFLEVBQUUsS0FBSyxHQUFHVCxRQUFRLENBQUM7UUFDbkNRLElBQUlFLElBQUksQ0FBQyxDQUFDSCxLQUFLLENBQUNFLEVBQUUsR0FBRyxHQUFFLEVBQUdULFFBQVEsQ0FBQztJQUN2QztJQUNBLE9BQU8sQ0FBQyxFQUFFLEVBQUVRLElBQUlILElBQUksQ0FBQyxJQUFJSixPQUFPLENBQUMsT0FBTyxJQUFJLENBQUM7QUFDakQ7QUFDQWIsa0JBQWtCLEdBQUdrQjtBQUNyQjs7O0NBR0MsR0FDRCxTQUFTWCxZQUFZTixLQUFLO0lBQ3RCLElBQUlBLFNBQVMsTUFBTTtRQUNmLE1BQU0sSUFBSXNCLE1BQU07SUFDcEI7SUFDQSxJQUFJLE9BQU90QixVQUFVLFVBQVU7UUFDM0IsTUFBTXVCLFFBQVF2QixNQUFNdUIsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQ0EsT0FBTztZQUNSLE1BQU0sSUFBSUQsTUFBTTtRQUNwQjtRQUNBLElBQUlDLEtBQUssQ0FBQyxFQUFFLEtBQUssTUFBTTtZQUNuQixNQUFNLElBQUlELE1BQU07UUFDcEI7UUFDQXRCLFFBQVFBLE1BQU13QixTQUFTLENBQUM7UUFDeEIsSUFBSXhCLE1BQU1jLE1BQU0sR0FBRyxHQUFHO1lBQ2xCZCxRQUFRLE1BQU1BO1FBQ2xCO1FBQ0EsTUFBTXlCLFNBQVMsRUFBRTtRQUNqQixJQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSXBCLE1BQU1jLE1BQU0sRUFBRU0sS0FBSyxFQUFHO1lBQ3RDSyxPQUFPSixJQUFJLENBQUNLLFNBQVMxQixNQUFNMkIsTUFBTSxDQUFDUCxHQUFHLElBQUk7UUFDN0M7UUFDQSxPQUFPUSxTQUFTLElBQUlDLFdBQVdKO0lBQ25DO0lBQ0EsSUFBSUssWUFBWTlCLFFBQVE7UUFDcEIsT0FBTzRCLFNBQVMsSUFBSUMsV0FBVzdCO0lBQ25DO0lBQ0EsTUFBTSxJQUFJc0IsTUFBTTtBQUNwQjtBQUNBdkIsbUJBQW1CLEdBQUdPO0FBQ3RCOzs7Q0FHQyxHQUNELFNBQVN3QixZQUFZOUIsS0FBSztJQUN0QixJQUFJLENBQUNBLFNBQ0Qsa0NBQWtDO0lBQ2xDMEIsU0FBU0ssT0FBTy9CLE1BQU1jLE1BQU0sTUFBTWQsTUFBTWMsTUFBTSxJQUM5QyxPQUFPZCxVQUFVLFVBQVU7UUFDM0IsT0FBTztJQUNYO0lBQ0EsSUFBSyxJQUFJb0IsSUFBSSxHQUFHQSxJQUFJcEIsTUFBTWMsTUFBTSxFQUFFTSxJQUFLO1FBQ25DLE1BQU1ZLElBQUloQyxLQUFLLENBQUNvQixFQUFFO1FBQ2xCLGtDQUFrQztRQUNsQyxJQUFJWSxJQUFJLEtBQUtBLEtBQUssT0FBT04sU0FBU0ssT0FBT0MsT0FBT0EsR0FBRztZQUMvQyxPQUFPO1FBQ1g7SUFDSjtJQUNBLE9BQU87QUFDWDtBQUNBOzs7Q0FHQyxHQUNELFNBQVNKLFNBQVNLLEtBQUs7SUFDbkIsSUFBSUEsTUFBTUMsS0FBSyxLQUFLQyxXQUFXO1FBQzNCLE9BQU9GO0lBQ1g7SUFDQUEsTUFBTUMsS0FBSyxHQUFHO1FBQ1YsTUFBTUUsT0FBT3JCLE1BQU1zQixTQUFTLENBQUNILEtBQUssQ0FBQ0ksSUFBSSxDQUFDQztRQUN4QyxPQUFPWCxTQUFTLElBQUlDLFdBQVdkLE1BQU1zQixTQUFTLENBQUNILEtBQUssQ0FBQ00sS0FBSyxDQUFDUCxPQUFPRztJQUN0RTtJQUNBLE9BQU9IO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vZXRoZXJldW0tYmxvb20tZmlsdGVyc0AxLjAuMTAvbm9kZV9tb2R1bGVzL2V0aGVyZXVtLWJsb29tLWZpbHRlcnMvZGlzdC91dGlscy5qcz9lZDk2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNoYTMgPSByZXF1aXJlKFwianMtc2hhM1wiKTtcclxuLyoqXHJcbiAqIEtlY2NhazI1NiBoYXNoXHJcbiAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhXHJcbiAqL1xyXG5mdW5jdGlvbiBrZWNjYWsyNTYoZGF0YSkge1xyXG4gICAgcmV0dXJuICcweCcgKyBzaGEzLmtlY2Nha18yNTYodG9CeXRlQXJyYXkoZGF0YSkpO1xyXG59XHJcbmV4cG9ydHMua2VjY2FrMjU2ID0ga2VjY2FrMjU2O1xyXG4vKipcclxuICogQWRkaW5nIHBhZGRpbmcgdG8gc3RyaW5nIG9uIHRoZSBsZWZ0XHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWVcclxuICogQHBhcmFtIGNoYXJzIFRoZSBjaGFyc1xyXG4gKi9cclxuZXhwb3J0cy5wYWRMZWZ0ID0gKHZhbHVlLCBjaGFycykgPT4ge1xyXG4gICAgY29uc3QgaGFzUHJlZml4ID0gL14weC9pLnRlc3QodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXjB4L2ksICcnKTtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSBjaGFycyAtIHZhbHVlLmxlbmd0aCArIDEgPj0gMCA/IGNoYXJzIC0gdmFsdWUubGVuZ3RoICsgMSA6IDA7XHJcbiAgICByZXR1cm4gKGhhc1ByZWZpeCA/ICcweCcgOiAnJykgKyBuZXcgQXJyYXkocGFkZGluZykuam9pbignMCcpICsgdmFsdWU7XHJcbn07XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGJ5dGVzIHRvIGhleFxyXG4gKiBAcGFyYW0gYnl0ZXMgVGhlIGJ5dGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBieXRlc1RvSGV4KGJ5dGVzKSB7XHJcbiAgICBjb25zdCBoZXggPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gPj4+IDQpLnRvU3RyaW5nKDE2KSk7XHJcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhmKS50b1N0cmluZygxNikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAweCR7aGV4LmpvaW4oJycpLnJlcGxhY2UoL14wKy8sICcnKX1gO1xyXG59XHJcbmV4cG9ydHMuYnl0ZXNUb0hleCA9IGJ5dGVzVG9IZXg7XHJcbi8qKlxyXG4gKiBUbyBieXRlIGFycmF5XHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIHRvQnl0ZUFycmF5KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGNvbnZlcnQgbnVsbCB2YWx1ZSB0byBhcnJheScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHZhbHVlLm1hdGNoKC9eKDB4KT9bMC05YS1mQS1GXSokLyk7XHJcbiAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaGV4aWRlY2ltYWwgc3RyaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXRjaFsxXSAhPT0gJzB4Jykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hleCBzdHJpbmcgbXVzdCBoYXZlIDB4IHByZWZpeCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygyKTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoICUgMikge1xyXG4gICAgICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHZhbHVlLnN1YnN0cihpLCAyKSwgMTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkZFNsaWNlKG5ldyBVaW50OEFycmF5KHJlc3VsdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQnl0ZUFycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBhZGRTbGljZShuZXcgVWludDhBcnJheSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFycmF5aWZ5IHZhbHVlJyk7XHJcbn1cclxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5O1xyXG4vKipcclxuICogSXMgYnl0ZSBhcnJheVxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0J5dGVBcnJheSh2YWx1ZSkge1xyXG4gICAgaWYgKCF2YWx1ZSB8fFxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcclxuICAgICAgICBwYXJzZUludChTdHJpbmcodmFsdWUubGVuZ3RoKSkgIT0gdmFsdWUubGVuZ3RoIHx8XHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWVbaV07XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiByYWRpeFxyXG4gICAgICAgIGlmICh2IDwgMCB8fCB2ID49IDI1NiB8fCBwYXJzZUludChTdHJpbmcodikpICE9IHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbi8qKlxyXG4gKiBBZGQgc2xpY2UgdG8gYXJyYXlcclxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkU2xpY2UoYXJyYXkpIHtcclxuICAgIGlmIChhcnJheS5zbGljZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgYXJyYXkuc2xpY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIGFkZFNsaWNlKG5ldyBVaW50OEFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhcnJheSwgYXJncykpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwic2hhMyIsInJlcXVpcmUiLCJrZWNjYWsyNTYiLCJkYXRhIiwia2VjY2FrXzI1NiIsInRvQnl0ZUFycmF5IiwicGFkTGVmdCIsImNoYXJzIiwiaGFzUHJlZml4IiwidGVzdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInBhZGRpbmciLCJsZW5ndGgiLCJBcnJheSIsImpvaW4iLCJieXRlc1RvSGV4IiwiYnl0ZXMiLCJoZXgiLCJpIiwicHVzaCIsIkVycm9yIiwibWF0Y2giLCJzdWJzdHJpbmciLCJyZXN1bHQiLCJwYXJzZUludCIsInN1YnN0ciIsImFkZFNsaWNlIiwiVWludDhBcnJheSIsImlzQnl0ZUFycmF5IiwiU3RyaW5nIiwidiIsImFycmF5Iiwic2xpY2UiLCJ1bmRlZmluZWQiLCJhcmdzIiwicHJvdG90eXBlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFwcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/ethereum-bloom-filters@1.0.10/node_modules/ethereum-bloom-filters/dist/utils.js\n");

/***/ })

};
;