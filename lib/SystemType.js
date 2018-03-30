"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var isGroovBox;
var isGroovEpic;
var SystemType = /** @class */ (function () {
    function SystemType() {
    }
    SystemType.isSystemGroovBox = function () {
        if (isGroovBox === undefined) {
            // Look for some obvious marks of a groov Box. This is probably overkill.
            var hasMmpServer = fs.existsSync("/etc/init.d/mmpserver");
            var hasSupervisor = fs.existsSync("/usr/sbin/supervisor-get-serial-number");
            var hasOptoapps = fs.existsSync("/var/lib/jetty/optoapps");
            isGroovBox = hasMmpServer && hasSupervisor && hasOptoapps;
        }
        return isGroovBox;
    };
    SystemType.isSystemGroovEpic = function () {
        if (isGroovEpic === undefined) {
            // Look for some obvious marks of an EPIC box.
            var hasOptoApps = fs.existsSync("/usr/share/nxtio/");
            isGroovEpic = hasOptoApps;
        }
        return isGroovEpic;
    };
    return SystemType;
}());
exports.SystemType = SystemType;
//# sourceMappingURL=SystemType.js.map