"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Don't need test coverage for the mock classes.
/* istanbul ignore next */
var MockNodes = /** @class */ (function () {
    function MockNodes() {
        this.nodes = [];
        this.credentials = [];
    }
    MockNodes.prototype.addNode = function (node) {
        this.nodes[node.id] = node;
    };
    MockNodes.prototype.createNode = function (node, config) {
        if (this.credentials[config.id]) {
            node.credentials = this.credentials[config.id];
        }
        else {
            node.credentials = {};
        }
    };
    MockNodes.prototype.getNode = function (id) {
        return this.nodes[id];
    };
    MockNodes.prototype.registerType = function (nodeType, constructor, opts) {
    };
    MockNodes.prototype.addCredentials = function (id, creds) {
        this.credentials[id] = creds;
    };
    return MockNodes;
}());
exports.MockNodes = MockNodes;
//# sourceMappingURL=MockNodes.js.map