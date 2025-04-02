"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectObject = inspectObject;
exports.log = log;
const util_1 = require("util");
// this format object as string, resolves circular reference
function inspectObject(object, options) {
    return (0, util_1.inspect)(object, options);
}
// wrapper to log to console
function log(...args) {
    return Reflect.apply(console.log, null, args);
}
//# sourceMappingURL=debug.js.map