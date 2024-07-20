var mergeNodes = function (head) {
    let node = new ListNode();
    let current = node;

    let prev = head;
    let sum = 0;

    let newHead = [];

    while (prev.next !== null) {
        prev = prev.next;

        if (prev.val === 0) {
            current.next = new ListNode(sum);
            current = current.next;

            sum = 0;
        } else {
            sum += prev.val;
        }
    }

    return node.next;
};
