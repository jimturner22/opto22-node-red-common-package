import * as NodeRed from '../../typings/nodered';
export declare class MockNode implements NodeRed.Node {
    constructor(type: string, onSend?: (msg: any) => void, onError?: (errorText: any, nodeMessage: any) => void);
    id: string;
    type: string;
    z: string;
    name: string;
    credentials: any;
    onSend: (msg: any) => void;
    onError: (errorText: any, nodeMessage: any) => void;
    private statusObj;
    on(type: string, callback: (...rest: any[]) => void): void;
    error(errorText: any, nodeMessage: any): void;
    warn(text: string): void;
    log(text: string): void;
    status(statusObj: any): void;
    getStatus(): any;
    send(nodeMessage: any): void;
}
