"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var NodeRedUtil = require('node-red/red/runtime/util'); // the real Node-RED util code
var MockNodes_1 = require("./MockNodes");
var events = require("events");
// Don't need test coverage for the mock classes.
/* istanbul ignore next */
var MockRed = /** @class */ (function () {
    function MockRed() {
        this.util = NodeRedUtil;
        this.nodes = new MockNodes_1.MockNodes();
        this.events = new events.EventEmitter();
        this.settings = {
            userDir: ''
        };
    }
    return MockRed;
}());
exports.MockRed = MockRed;
//# sourceMappingURL=MockRed.js.map