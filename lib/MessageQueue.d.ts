import * as NodeRed from '../typings/nodered';
/**
 * Function pointer definition for Node msg 'input' event handlers.
 */
export interface MsgInputFunc {
    (msg: any): void;
}
export interface MessageHolder {
    msg: any;
    node: NodeRed.Node;
    inputEventObject: any;
    inputEventCallback: MsgInputFunc;
}
/**
 * Class for throttling messages associated with an external resource.
 * The owner of the queue can manage the relationship between its resource and the queue.
 * The SNAP PAC nodes need it so that we can control certain error conditions, and also not overwhelm a
 * slower controller when using HTTPS.
 */
export default class MessageQueue {
    private queue;
    private maxLength;
    private currentMessage;
    private numMessagesPerNode;
    constructor(maxLength: number);
    /**
     * Empty the queue.
     */
    dump(): void;
    /**
     * Returns the current message.
     */
    getCurrentMessage(): MessageHolder;
    /**
     * Adds a message for the given node.
     */
    add(msg: any, node: NodeRed.Node, inputEventObject: any, inputEventCallback: MsgInputFunc): number;
    /**
     *  Must be called by the node handler when it's done with the message.
     */
    done(delay: number): number;
}
