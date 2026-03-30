/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
    if (head == null) return null;

    // Map from old node -> new node
    Map<Node, Node> map = new HashMap<>();

    // 1st pass: clone nodes (just val, not links yet)
    Node curr = head;
    while (curr != null) {
        map.put(curr, new Node(curr.val));
        curr = curr.next;
    }

    // 2nd pass: assign next & random using map
    curr = head;
    while (curr != null) {
        Node copy = map.get(curr);
        copy.next = map.get(curr.next);       // new node of curr.next
        copy.random = map.get(curr.random);   // new node of curr.random
        curr = curr.next;
    }

    return map.get(head);
}

}
