/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public boolean hasCycle(ListNode head) {
       if(head.next == null || head == null){
        return false;
       }
        ListNode curr = head.next.next;
       if (curr == null || curr.next == null){
        return false;
       }
        while(curr != null){
            
            if(curr != head && curr.next.next != head){
                curr = curr.next.next;
                head = head.next;
            }
            else {
                return true;
            }
        
        }
        return false;
    }
}
