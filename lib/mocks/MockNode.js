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
var should = require("should");
// Don't need test coverage for the mock classes.
/* istanbul ignore next */
var MockNode = /** @class */ (function () {
    function MockNode(type, onSend, onError) {
        this.type = type;
        this.onSend = onSend;
        this.onError = onError;
        this.statusObj = {};
        this.credentials = {};
    }
    MockNode.prototype.on = function (type, callback) {
    };
    MockNode.prototype.error = function (errorText, nodeMessage) {
        // By default, fail if we get here. Override the method, if needed.
        if (this.onError) {
            this.onError(errorText, nodeMessage);
        }
        else {
            console.log('Unexpected error: ' + errorText);
            should.equal(true, false); // fail
        }
    };
    MockNode.prototype.warn = function (text) {
        // By default, fail if we get here. Override the method, if needed.
        should.equal(true, false); // fail
    };
    MockNode.prototype.log = function (text) {
    };
    MockNode.prototype.status = function (statusObj) {
        this.statusObj = statusObj;
    };
    MockNode.prototype.getStatus = function () {
        return this.statusObj;
    };
    MockNode.prototype.send = function (nodeMessage) {
        // "Send" the message to the callback, which is where the bulk of the testing often occurs.
        if (this.onSend) {
            this.onSend(nodeMessage);
        }
    };
    return MockNode;
}());
exports.MockNode = MockNode;
//# sourceMappingURL=MockNode.js.map