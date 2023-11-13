class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev.next = current.next;
        }
    }

    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(`LinkedList{${values.join(",")}}`);
    }
}


const linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(3);
linkedlist.print();
