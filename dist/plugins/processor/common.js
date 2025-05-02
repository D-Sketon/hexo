"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTmpFile = isTmpFile;
exports.isHiddenFile = isHiddenFile;
exports.isExcludedFile = isExcludedFile;
exports.toDate = toDate;
exports.adjustDateForTimezone = adjustDateForTimezone;
exports.isMatch = isMatch;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const micromatch_1 = __importDefault(require("micromatch"));
const DURATION_MINUTE = 1000 * 60;
function isMatch(path, patterns) {
    if (!patterns)
        return false;
    return micromatch_1.default.isMatch(path, patterns);
}
function isTmpFile(path) {
    return path.endsWith('%') || path.endsWith('~');
}
function isHiddenFile(path) {
    return /(^|\/)[_.]/.test(path);
}
function isExcludedFile(path, config) {
    if (isTmpFile(path))
        return true;
    if (isMatch(path, config.exclude))
        return true;
    if (isHiddenFile(path) && !isMatch(path, config.include))
        return true;
    return false;
}
function toDate(date) {
    if (!date || moment_timezone_1.default.isMoment(date))
        return date;
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    if (isNaN(date.getTime()))
        return;
    return date;
}
function adjustDateForTimezone(date, timezone) {
    if (moment_timezone_1.default.isMoment(date))
        date = date.toDate();
    const offset = date.getTimezoneOffset();
    const ms = date.getTime();
    const target = moment_timezone_1.default.tz.zone(timezone).utcOffset(ms);
    const diff = (offset - target) * DURATION_MINUTE;
    return new Date(ms - diff);
}
//# sourceMappingURL=common.js.map