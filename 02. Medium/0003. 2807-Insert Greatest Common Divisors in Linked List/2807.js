function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var insertGreatestCommonDivisors = function (head) {
    let prev = head;

    while (prev !== null && prev.next !== null) {
        let firstNode = prev;
        let secondNode = firstNode.next;

        let result = helper(firstNode.val, secondNode.val);
        const node = new ListNode(result);
        node.next = secondNode;
        firstNode.next = node;

        prev = secondNode;
    }

    return head;
};

const helper = (a, b) => {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    let holdValue = min;

    let findAnswer = false;
    let answer = 0;

    while (holdValue !== 0 && findAnswer === false) {
        if (max % holdValue === 0 && min % holdValue === 0) {
            answer = holdValue;
            findAnswer = true;
        }

        holdValue = holdValue - 1;
    }

    return answer;
};

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

let list1 = createLinkedList([18, 6, 10, 3]);
let modifiedList1 = insertGreatestCommonDivisors(list1);
console.log(modifiedList1);
