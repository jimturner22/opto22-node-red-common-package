import * as NodeRed from '../../typings/nodered';
export declare class MockNodes implements NodeRed.Nodes {
    private nodes;
    private credentials;
    constructor();
    addNode(node: NodeRed.Node): void;
    createNode(node: NodeRed.Node, config: any): void;
    getNode(id: string): any;
    registerType(nodeType: string, constructor: (configuration: any) => void, opts?: any): void;
    addCredentials(id: string, creds: any): void;
}
