"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
   Copyright 2016 Opto 22

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var fs = require("fs");
var path = require("path");
var SystemType_1 = require("./SystemType");
function getCertFile(globalRED, certPath) {
    if (certPath && certPath.length > 0) {
        // See if we have an absolute or relative path
        if (!path.isAbsolute(certPath)) {
            if (SystemType_1.SystemType.isSystemGroovEpic()) {
                // On EPIC, that path is fixed.
                certPath = path.join('/usr/lib/ssl/certs/', certPath);
            }
            else {
                // On AR1, start from Node-RED's userDir + "/certs".
                certPath = path.join(globalRED.settings.userDir, 'certs', certPath);
            }
        }
        return fs.readFileSync(certPath);
    }
    return null;
}
exports.getCertFile = getCertFile;
//# sourceMappingURL=CertificateUtil.js.map