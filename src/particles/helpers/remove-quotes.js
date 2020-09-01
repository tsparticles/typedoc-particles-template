(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeQuotes = void 0;
    /**
     * Removes any double-quotes from the input string
     *
     * @param str  The string that should be updated.
     * @return     The original string, omitting double quotes (`"`).
     */
    function removeQuotes(str) {
        return str.replace(/"/g, '');
    }
    exports.removeQuotes = removeQuotes;
});