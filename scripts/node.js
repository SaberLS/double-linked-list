export default class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    log() {
        return `{\n\tdata: ${this.data},\n\tnext: ${(this.next ? this.next.data : null)},\n\tprevious: ${(this.previous ? this.previous.data : null)}\n}`;
    }
}