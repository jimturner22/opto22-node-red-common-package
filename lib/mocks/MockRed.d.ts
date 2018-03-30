/// <reference types="node" />
import * as NodeRed from '../../typings/nodered';
import { MockNodes } from './MockNodes';
import * as events from 'events';
export declare class MockRed implements NodeRed.RED {
    auth: any;
    comms: any;
    events: events.EventEmitter;
    httpAdmin: any;
    httpNode: any;
    library: any;
    server: any;
    version: any;
    nodes: MockNodes;
    util: NodeRed.Util;
    log: NodeRed.Log;
    settings: {
        userDir: string;
    };
    constructor();
}
