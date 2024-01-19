"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stablelib+hmac@1.0.1";
exports.ids = ["vendor-chunks/@stablelib+hmac@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@stablelib+hmac@1.0.1/node_modules/@stablelib/hmac/lib/hmac.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/@stablelib+hmac@1.0.1/node_modules/@stablelib/hmac/lib/hmac.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n/**\n * Package hmac implements HMAC algorithm.\n */ var hash_1 = __webpack_require__(/*! @stablelib/hash */ \"(ssr)/./node_modules/.pnpm/@stablelib+hash@1.0.1/node_modules/@stablelib/hash/lib/hash.js\");\nvar constant_time_1 = __webpack_require__(/*! @stablelib/constant-time */ \"(ssr)/./node_modules/.pnpm/@stablelib+constant-time@1.0.1/node_modules/@stablelib/constant-time/lib/constant-time.js\");\nvar wipe_1 = __webpack_require__(/*! @stablelib/wipe */ \"(ssr)/./node_modules/.pnpm/@stablelib+wipe@1.0.1/node_modules/@stablelib/wipe/lib/wipe.js\");\n/**\n *  HMAC implements hash-based message authentication algorithm.\n */ var HMAC = /** @class */ function() {\n    /**\n     * Constructs a new HMAC with the given Hash and secret key.\n     */ function HMAC(hash, key) {\n        this._finished = false; // true if HMAC was finalized\n        // Initialize inner and outer hashes.\n        this._inner = new hash();\n        this._outer = new hash();\n        // Set block and digest sizes for this HMAC\n        // instance to values from the hash.\n        this.blockSize = this._outer.blockSize;\n        this.digestLength = this._outer.digestLength;\n        // Pad temporary stores a key (or its hash) padded with zeroes.\n        var pad = new Uint8Array(this.blockSize);\n        if (key.length > this.blockSize) {\n            // If key is bigger than hash block size, it must be\n            // hashed and this hash is used as a key instead.\n            this._inner.update(key).finish(pad).clean();\n        } else {\n            // Otherwise, copy the key into pad.\n            pad.set(key);\n        }\n        // Now two different keys are derived from padded key\n        // by xoring a different byte value to each.\n        // To make inner hash key, xor byte 0x36 into pad.\n        for(var i = 0; i < pad.length; i++){\n            pad[i] ^= 0x36;\n        }\n        // Update inner hash with the result.\n        this._inner.update(pad);\n        // To make outer hash key, xor byte 0x5c into pad.\n        // But since we already xored 0x36 there, we must\n        // first undo this by xoring it again.\n        for(var i = 0; i < pad.length; i++){\n            pad[i] ^= 0x36 ^ 0x5c;\n        }\n        // Update outer hash with the result.\n        this._outer.update(pad);\n        // Save states of both hashes, so that we can quickly restore\n        // them later in reset() without the need to remember the actual\n        // key and perform this initialization again.\n        if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {\n            this._innerKeyedState = this._inner.saveState();\n            this._outerKeyedState = this._outer.saveState();\n        }\n        // Clean pad.\n        wipe_1.wipe(pad);\n    }\n    /**\n     * Returns HMAC state to the state initialized with key\n     * to make it possible to run HMAC over the other data with the same\n     * key without creating a new instance.\n     */ HMAC.prototype.reset = function() {\n        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {\n            throw new Error(\"hmac: can't reset() because hash doesn't implement restoreState()\");\n        }\n        // Restore keyed states of inner and outer hashes.\n        this._inner.restoreState(this._innerKeyedState);\n        this._outer.restoreState(this._outerKeyedState);\n        this._finished = false;\n        return this;\n    };\n    /**\n     * Cleans HMAC state.\n     */ HMAC.prototype.clean = function() {\n        if (hash_1.isSerializableHash(this._inner)) {\n            this._inner.cleanSavedState(this._innerKeyedState);\n        }\n        if (hash_1.isSerializableHash(this._outer)) {\n            this._outer.cleanSavedState(this._outerKeyedState);\n        }\n        this._inner.clean();\n        this._outer.clean();\n    };\n    /**\n     * Updates state with provided data.\n     */ HMAC.prototype.update = function(data) {\n        this._inner.update(data);\n        return this;\n    };\n    /**\n     * Finalizes HMAC and puts the result in out.\n     */ HMAC.prototype.finish = function(out) {\n        if (this._finished) {\n            // If HMAC was finalized, outer hash is also finalized,\n            // so it produces the same digest it produced when it\n            // was finalized.\n            this._outer.finish(out);\n            return this;\n        }\n        // Finalize inner hash and store the result temporarily.\n        this._inner.finish(out);\n        // Update outer hash with digest of inner hash and and finalize it.\n        this._outer.update(out.subarray(0, this.digestLength)).finish(out);\n        this._finished = true;\n        return this;\n    };\n    /**\n     * Returns the computed message authentication code.\n     */ HMAC.prototype.digest = function() {\n        var out = new Uint8Array(this.digestLength);\n        this.finish(out);\n        return out;\n    };\n    /**\n     * Saves HMAC state.\n     * This function is needed for PBKDF2 optimization.\n     */ HMAC.prototype.saveState = function() {\n        if (!hash_1.isSerializableHash(this._inner)) {\n            throw new Error(\"hmac: can't saveState() because hash doesn't implement it\");\n        }\n        return this._inner.saveState();\n    };\n    HMAC.prototype.restoreState = function(savedState) {\n        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {\n            throw new Error(\"hmac: can't restoreState() because hash doesn't implement it\");\n        }\n        this._inner.restoreState(savedState);\n        this._outer.restoreState(this._outerKeyedState);\n        this._finished = false;\n        return this;\n    };\n    HMAC.prototype.cleanSavedState = function(savedState) {\n        if (!hash_1.isSerializableHash(this._inner)) {\n            throw new Error(\"hmac: can't cleanSavedState() because hash doesn't implement it\");\n        }\n        this._inner.cleanSavedState(savedState);\n    };\n    return HMAC;\n}();\nexports.HMAC = HMAC;\n/**\n * Returns HMAC using the given hash constructor for the key over data.\n */ function hmac(hash, key, data) {\n    var h = new HMAC(hash, key);\n    h.update(data);\n    var digest = h.digest();\n    h.clean();\n    return digest;\n}\nexports.hmac = hmac;\n/**\n * Returns true if two HMAC digests are equal.\n * Uses constant-time comparison to avoid leaking timing information.\n *\n * Example:\n *\n *    const receivedDigest = ...\n *    const realDigest = hmac(SHA256, key, data);\n *    if (!equal(receivedDigest, realDigest)) {\n *        throw new Error(\"Authentication error\");\n *    }\n */ exports.equal = constant_time_1.equal; //# sourceMappingURL=hmac.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitobWFjQDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2htYWMvbGliL2htYWMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBQzdDQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RDs7Q0FFQyxHQUNELElBQUlDLFNBQVNDLG1CQUFPQSxDQUFDLGtIQUFpQjtBQUN0QyxJQUFJQyxrQkFBa0JELG1CQUFPQSxDQUFDLHNKQUEwQjtBQUN4RCxJQUFJRSxTQUFTRixtQkFBT0EsQ0FBQyxrSEFBaUI7QUFDdEM7O0NBRUMsR0FDRCxJQUFJRyxPQUFPLFdBQVcsR0FBSTtJQUN0Qjs7S0FFQyxHQUNELFNBQVNBLEtBQUtDLElBQUksRUFBRUMsR0FBRztRQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBRyxPQUFPLDZCQUE2QjtRQUNyRCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSUg7UUFDbEIsSUFBSSxDQUFDSSxNQUFNLEdBQUcsSUFBSUo7UUFDbEIsMkNBQTJDO1FBQzNDLG9DQUFvQztRQUNwQyxJQUFJLENBQUNLLFNBQVMsR0FBRyxJQUFJLENBQUNELE1BQU0sQ0FBQ0MsU0FBUztRQUN0QyxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNGLE1BQU0sQ0FBQ0UsWUFBWTtRQUM1QywrREFBK0Q7UUFDL0QsSUFBSUMsTUFBTSxJQUFJQyxXQUFXLElBQUksQ0FBQ0gsU0FBUztRQUN2QyxJQUFJSixJQUFJUSxNQUFNLEdBQUcsSUFBSSxDQUFDSixTQUFTLEVBQUU7WUFDN0Isb0RBQW9EO1lBQ3BELGlEQUFpRDtZQUNqRCxJQUFJLENBQUNGLE1BQU0sQ0FBQ08sTUFBTSxDQUFDVCxLQUFLVSxNQUFNLENBQUNKLEtBQUtLLEtBQUs7UUFDN0MsT0FDSztZQUNELG9DQUFvQztZQUNwQ0wsSUFBSU0sR0FBRyxDQUFDWjtR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QU85QjtBQUNYO0FBQ0FOLFlBQVksR0FBR007QUFDZjs7Q0FFQyxHQUNELFNBQVMrQixLQUFLOUIsSUFBSSxFQUFFQyxHQUFHLEVBQUV3QixJQUFJO0lBQ3pCLElBQUlNLElBQUksSUFBSWhDLEtBQUtDLE1BQU1DO0lBQ3ZCOEIsRUFBRXJCLE1BQU0sQ0FBQ2U7SUFDVCxJQUFJRyxTQUFTRyxFQUFFSCxNQUFNO0lBQ3JCRyxFQUFFbkIsS0FBSztJQUNQLE9BQU9nQjtBQUNYO0FBQ0FuQyxZQUFZLEdBQUdxQztBQUNmOzs7Ozs7Ozs7OztDQVdDLEdBQ0RyQyxhQUFhLEdBQUdJLGdCQUFnQm1DLEtBQUssRUFDckMsZ0NBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdGFibGVsaWIraG1hY0AxLjAuMS9ub2RlX21vZHVsZXMvQHN0YWJsZWxpYi9obWFjL2xpYi9obWFjLmpzPzgyYjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgKEMpIDIwMTYgRG1pdHJ5IENoZXN0bnlraFxuLy8gTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgZm9yIGRldGFpbHMuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFBhY2thZ2UgaG1hYyBpbXBsZW1lbnRzIEhNQUMgYWxnb3JpdGhtLlxuICovXG52YXIgaGFzaF8xID0gcmVxdWlyZShcIkBzdGFibGVsaWIvaGFzaFwiKTtcbnZhciBjb25zdGFudF90aW1lXzEgPSByZXF1aXJlKFwiQHN0YWJsZWxpYi9jb25zdGFudC10aW1lXCIpO1xudmFyIHdpcGVfMSA9IHJlcXVpcmUoXCJAc3RhYmxlbGliL3dpcGVcIik7XG4vKipcbiAqICBITUFDIGltcGxlbWVudHMgaGFzaC1iYXNlZCBtZXNzYWdlIGF1dGhlbnRpY2F0aW9uIGFsZ29yaXRobS5cbiAqL1xudmFyIEhNQUMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhIG5ldyBITUFDIHdpdGggdGhlIGdpdmVuIEhhc2ggYW5kIHNlY3JldCBrZXkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gSE1BQyhoYXNoLCBrZXkpIHtcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTsgLy8gdHJ1ZSBpZiBITUFDIHdhcyBmaW5hbGl6ZWRcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBpbm5lciBhbmQgb3V0ZXIgaGFzaGVzLlxuICAgICAgICB0aGlzLl9pbm5lciA9IG5ldyBoYXNoKCk7XG4gICAgICAgIHRoaXMuX291dGVyID0gbmV3IGhhc2goKTtcbiAgICAgICAgLy8gU2V0IGJsb2NrIGFuZCBkaWdlc3Qgc2l6ZXMgZm9yIHRoaXMgSE1BQ1xuICAgICAgICAvLyBpbnN0YW5jZSB0byB2YWx1ZXMgZnJvbSB0aGUgaGFzaC5cbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSB0aGlzLl9vdXRlci5ibG9ja1NpemU7XG4gICAgICAgIHRoaXMuZGlnZXN0TGVuZ3RoID0gdGhpcy5fb3V0ZXIuZGlnZXN0TGVuZ3RoO1xuICAgICAgICAvLyBQYWQgdGVtcG9yYXJ5IHN0b3JlcyBhIGtleSAob3IgaXRzIGhhc2gpIHBhZGRlZCB3aXRoIHplcm9lcy5cbiAgICAgICAgdmFyIHBhZCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPiB0aGlzLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgLy8gSWYga2V5IGlzIGJpZ2dlciB0aGFuIGhhc2ggYmxvY2sgc2l6ZSwgaXQgbXVzdCBiZVxuICAgICAgICAgICAgLy8gaGFzaGVkIGFuZCB0aGlzIGhhc2ggaXMgdXNlZCBhcyBhIGtleSBpbnN0ZWFkLlxuICAgICAgICAgICAgdGhpcy5faW5uZXIudXBkYXRlKGtleSkuZmluaXNoKHBhZCkuY2xlYW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY29weSB0aGUga2V5IGludG8gcGFkLlxuICAgICAgICAgICAgcGFkLnNldChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyB0d28gZGlmZmVyZW50IGtleXMgYXJlIGRlcml2ZWQgZnJvbSBwYWRkZWQga2V5XG4gICAgICAgIC8vIGJ5IHhvcmluZyBhIGRpZmZlcmVudCBieXRlIHZhbHVlIHRvIGVhY2guXG4gICAgICAgIC8vIFRvIG1ha2UgaW5uZXIgaGFzaCBrZXksIHhvciBieXRlIDB4MzYgaW50byBwYWQuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWRbaV0gXj0gMHgzNjtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgaW5uZXIgaGFzaCB3aXRoIHRoZSByZXN1bHQuXG4gICAgICAgIHRoaXMuX2lubmVyLnVwZGF0ZShwYWQpO1xuICAgICAgICAvLyBUbyBtYWtlIG91dGVyIGhhc2gga2V5LCB4b3IgYnl0ZSAweDVjIGludG8gcGFkLlxuICAgICAgICAvLyBCdXQgc2luY2Ugd2UgYWxyZWFkeSB4b3JlZCAweDM2IHRoZXJlLCB3ZSBtdXN0XG4gICAgICAgIC8vIGZpcnN0IHVuZG8gdGhpcyBieSB4b3JpbmcgaXQgYWdhaW4uXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWRbaV0gXj0gMHgzNiBeIDB4NWM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIG91dGVyIGhhc2ggd2l0aCB0aGUgcmVzdWx0LlxuICAgICAgICB0aGlzLl9vdXRlci51cGRhdGUocGFkKTtcbiAgICAgICAgLy8gU2F2ZSBzdGF0ZXMgb2YgYm90aCBoYXNoZXMsIHNvIHRoYXQgd2UgY2FuIHF1aWNrbHkgcmVzdG9yZVxuICAgICAgICAvLyB0aGVtIGxhdGVyIGluIHJlc2V0KCkgd2l0aG91dCB0aGUgbmVlZCB0byByZW1lbWJlciB0aGUgYWN0dWFsXG4gICAgICAgIC8vIGtleSBhbmQgcGVyZm9ybSB0aGlzIGluaXRpYWxpemF0aW9uIGFnYWluLlxuICAgICAgICBpZiAoaGFzaF8xLmlzU2VyaWFsaXphYmxlSGFzaCh0aGlzLl9pbm5lcikgJiYgaGFzaF8xLmlzU2VyaWFsaXphYmxlSGFzaCh0aGlzLl9vdXRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuX2lubmVyS2V5ZWRTdGF0ZSA9IHRoaXMuX2lubmVyLnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5fb3V0ZXJLZXllZFN0YXRlID0gdGhpcy5fb3V0ZXIuc2F2ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xlYW4gcGFkLlxuICAgICAgICB3aXBlXzEud2lwZShwYWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEhNQUMgc3RhdGUgdG8gdGhlIHN0YXRlIGluaXRpYWxpemVkIHdpdGgga2V5XG4gICAgICogdG8gbWFrZSBpdCBwb3NzaWJsZSB0byBydW4gSE1BQyBvdmVyIHRoZSBvdGhlciBkYXRhIHdpdGggdGhlIHNhbWVcbiAgICAgKiBrZXkgd2l0aG91dCBjcmVhdGluZyBhIG5ldyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBITUFDLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFoYXNoXzEuaXNTZXJpYWxpemFibGVIYXNoKHRoaXMuX2lubmVyKSB8fCAhaGFzaF8xLmlzU2VyaWFsaXphYmxlSGFzaCh0aGlzLl9vdXRlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImhtYWM6IGNhbid0IHJlc2V0KCkgYmVjYXVzZSBoYXNoIGRvZXNuJ3QgaW1wbGVtZW50IHJlc3RvcmVTdGF0ZSgpXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc3RvcmUga2V5ZWQgc3RhdGVzIG9mIGlubmVyIGFuZCBvdXRlciBoYXNoZXMuXG4gICAgICAgIHRoaXMuX2lubmVyLnJlc3RvcmVTdGF0ZSh0aGlzLl9pbm5lcktleWVkU3RhdGUpO1xuICAgICAgICB0aGlzLl9vdXRlci5yZXN0b3JlU3RhdGUodGhpcy5fb3V0ZXJLZXllZFN0YXRlKTtcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhbnMgSE1BQyBzdGF0ZS5cbiAgICAgKi9cbiAgICBITUFDLnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhhc2hfMS5pc1NlcmlhbGl6YWJsZUhhc2godGhpcy5faW5uZXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbm5lci5jbGVhblNhdmVkU3RhdGUodGhpcy5faW5uZXJLZXllZFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzaF8xLmlzU2VyaWFsaXphYmxlSGFzaCh0aGlzLl9vdXRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuX291dGVyLmNsZWFuU2F2ZWRTdGF0ZSh0aGlzLl9vdXRlcktleWVkU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lubmVyLmNsZWFuKCk7XG4gICAgICAgIHRoaXMuX291dGVyLmNsZWFuKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHN0YXRlIHdpdGggcHJvdmlkZWQgZGF0YS5cbiAgICAgKi9cbiAgICBITUFDLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLl9pbm5lci51cGRhdGUoZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluYWxpemVzIEhNQUMgYW5kIHB1dHMgdGhlIHJlc3VsdCBpbiBvdXQuXG4gICAgICovXG4gICAgSE1BQy5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKG91dCkge1xuICAgICAgICBpZiAodGhpcy5fZmluaXNoZWQpIHtcbiAgICAgICAgICAgIC8vIElmIEhNQUMgd2FzIGZpbmFsaXplZCwgb3V0ZXIgaGFzaCBpcyBhbHNvIGZpbmFsaXplZCxcbiAgICAgICAgICAgIC8vIHNvIGl0IHByb2R1Y2VzIHRoZSBzYW1lIGRpZ2VzdCBpdCBwcm9kdWNlZCB3aGVuIGl0XG4gICAgICAgICAgICAvLyB3YXMgZmluYWxpemVkLlxuICAgICAgICAgICAgdGhpcy5fb3V0ZXIuZmluaXNoKG91dCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5hbGl6ZSBpbm5lciBoYXNoIGFuZCBzdG9yZSB0aGUgcmVzdWx0IHRlbXBvcmFyaWx5LlxuICAgICAgICB0aGlzLl9pbm5lci5maW5pc2gob3V0KTtcbiAgICAgICAgLy8gVXBkYXRlIG91dGVyIGhhc2ggd2l0aCBkaWdlc3Qgb2YgaW5uZXIgaGFzaCBhbmQgYW5kIGZpbmFsaXplIGl0LlxuICAgICAgICB0aGlzLl9vdXRlci51cGRhdGUob3V0LnN1YmFycmF5KDAsIHRoaXMuZGlnZXN0TGVuZ3RoKSkuZmluaXNoKG91dCk7XG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCBtZXNzYWdlIGF1dGhlbnRpY2F0aW9uIGNvZGUuXG4gICAgICovXG4gICAgSE1BQy5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kaWdlc3RMZW5ndGgpO1xuICAgICAgICB0aGlzLmZpbmlzaChvdXQpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2F2ZXMgSE1BQyBzdGF0ZS5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIG5lZWRlZCBmb3IgUEJLREYyIG9wdGltaXphdGlvbi5cbiAgICAgKi9cbiAgICBITUFDLnByb3RvdHlwZS5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaGFzaF8xLmlzU2VyaWFsaXphYmxlSGFzaCh0aGlzLl9pbm5lcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImhtYWM6IGNhbid0IHNhdmVTdGF0ZSgpIGJlY2F1c2UgaGFzaCBkb2Vzbid0IGltcGxlbWVudCBpdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5uZXIuc2F2ZVN0YXRlKCk7XG4gICAgfTtcbiAgICBITUFDLnByb3RvdHlwZS5yZXN0b3JlU3RhdGUgPSBmdW5jdGlvbiAoc2F2ZWRTdGF0ZSkge1xuICAgICAgICBpZiAoIWhhc2hfMS5pc1NlcmlhbGl6YWJsZUhhc2godGhpcy5faW5uZXIpIHx8ICFoYXNoXzEuaXNTZXJpYWxpemFibGVIYXNoKHRoaXMuX291dGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaG1hYzogY2FuJ3QgcmVzdG9yZVN0YXRlKCkgYmVjYXVzZSBoYXNoIGRvZXNuJ3QgaW1wbGVtZW50IGl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lubmVyLnJlc3RvcmVTdGF0ZShzYXZlZFN0YXRlKTtcbiAgICAgICAgdGhpcy5fb3V0ZXIucmVzdG9yZVN0YXRlKHRoaXMuX291dGVyS2V5ZWRTdGF0ZSk7XG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgSE1BQy5wcm90b3R5cGUuY2xlYW5TYXZlZFN0YXRlID0gZnVuY3Rpb24gKHNhdmVkU3RhdGUpIHtcbiAgICAgICAgaWYgKCFoYXNoXzEuaXNTZXJpYWxpemFibGVIYXNoKHRoaXMuX2lubmVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaG1hYzogY2FuJ3QgY2xlYW5TYXZlZFN0YXRlKCkgYmVjYXVzZSBoYXNoIGRvZXNuJ3QgaW1wbGVtZW50IGl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lubmVyLmNsZWFuU2F2ZWRTdGF0ZShzYXZlZFN0YXRlKTtcbiAgICB9O1xuICAgIHJldHVybiBITUFDO1xufSgpKTtcbmV4cG9ydHMuSE1BQyA9IEhNQUM7XG4vKipcbiAqIFJldHVybnMgSE1BQyB1c2luZyB0aGUgZ2l2ZW4gaGFzaCBjb25zdHJ1Y3RvciBmb3IgdGhlIGtleSBvdmVyIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGhtYWMoaGFzaCwga2V5LCBkYXRhKSB7XG4gICAgdmFyIGggPSBuZXcgSE1BQyhoYXNoLCBrZXkpO1xuICAgIGgudXBkYXRlKGRhdGEpO1xuICAgIHZhciBkaWdlc3QgPSBoLmRpZ2VzdCgpO1xuICAgIGguY2xlYW4oKTtcbiAgICByZXR1cm4gZGlnZXN0O1xufVxuZXhwb3J0cy5obWFjID0gaG1hYztcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHR3byBITUFDIGRpZ2VzdHMgYXJlIGVxdWFsLlxuICogVXNlcyBjb25zdGFudC10aW1lIGNvbXBhcmlzb24gdG8gYXZvaWQgbGVha2luZyB0aW1pbmcgaW5mb3JtYXRpb24uXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICBjb25zdCByZWNlaXZlZERpZ2VzdCA9IC4uLlxuICogICAgY29uc3QgcmVhbERpZ2VzdCA9IGhtYWMoU0hBMjU2LCBrZXksIGRhdGEpO1xuICogICAgaWYgKCFlcXVhbChyZWNlaXZlZERpZ2VzdCwgcmVhbERpZ2VzdCkpIHtcbiAqICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdXRoZW50aWNhdGlvbiBlcnJvclwiKTtcbiAqICAgIH1cbiAqL1xuZXhwb3J0cy5lcXVhbCA9IGNvbnN0YW50X3RpbWVfMS5lcXVhbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhtYWMuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaGFzaF8xIiwicmVxdWlyZSIsImNvbnN0YW50X3RpbWVfMSIsIndpcGVfMSIsIkhNQUMiLCJoYXNoIiwia2V5IiwiX2ZpbmlzaGVkIiwiX2lubmVyIiwiX291dGVyIiwiYmxvY2tTaXplIiwiZGlnZXN0TGVuZ3RoIiwicGFkIiwiVWludDhBcnJheSIsImxlbmd0aCIsInVwZGF0ZSIsImZpbmlzaCIsImNsZWFuIiwic2V0IiwiaSIsImlzU2VyaWFsaXphYmxlSGFzaCIsIl9pbm5lcktleWVkU3RhdGUiLCJzYXZlU3RhdGUiLCJfb3V0ZXJLZXllZFN0YXRlIiwid2lwZSIsInByb3RvdHlwZSIsInJlc2V0IiwiRXJyb3IiLCJyZXN0b3JlU3RhdGUiLCJjbGVhblNhdmVkU3RhdGUiLCJkYXRhIiwib3V0Iiwic3ViYXJyYXkiLCJkaWdlc3QiLCJzYXZlZFN0YXRlIiwiaG1hYyIsImgiLCJlcXVhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@stablelib+hmac@1.0.1/node_modules/@stablelib/hmac/lib/hmac.js\n");

/***/ })

};
;