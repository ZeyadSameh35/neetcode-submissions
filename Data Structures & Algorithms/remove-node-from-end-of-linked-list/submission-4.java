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
    public ListNode removeNthFromEnd(ListNode head, int n) {
   if(head.next == null && n > 0){
    return null;
   }
   else if (head.next == null && n == 0) {
    return head;
   }
    ListNode node = head;
    
    int count = 0;
    while (node != null){
         node = node.next;
         count++;
    }
   
  //  System.out.println(count);
    ListNode node2 = head;
    int count2 = 0;
    if ((count - n) == 0){
        return head.next;
    }
    while (count2 < (count - n)){
        node2 = node2.next;
        count2++;
    }
   // System.out.println(count2);
   // System.out.println(node2.val);
    int count3 = 0;
    ListNode start = head;
    while (start.next != null){
       
        if(start.next == node2){
            start.next = start.next.next;
        }
        else{
            start = start.next;
        }
        

    }
return head;
    }
}
