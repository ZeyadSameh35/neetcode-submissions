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
    public static String reverse(String str) {
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        return reversed;
    }
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        String list1 = "";
        int sum1 = 0;
        ListNode node1 = l1;
         String list2 = "";
        int sum2 = 0;
        ListNode node2 = l2;
        int sum3 = 0;
        ListNode result = new ListNode(0);
        while (node1 != null){
            list1 += node1.val;
            node1 = node1.next;
        }
         while (node2 != null){
            list2+= node2.val;
            node2 = node2.next;
        }
        if (l1.next == null){
            sum1 = Integer.parseInt(list1);
        }
        else {
            sum1 = Integer.parseInt(reverse(list1));
        }
          if (l2.next == null){
            sum2 = Integer.parseInt(list2);
        }
        else {
            sum2 = Integer.parseInt(reverse(list2));
        }
       
        System.out.println(sum1);
        System.out.println(sum2);
        sum3 = sum1 + sum2;
        if (sum3 == 0){
            return result;
        }
        System.out.println(sum3);
       ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

while (sum3 != 0) {
    int digit = sum3 % 10;             // take last digit
    curr.next = new ListNode(digit);   // make a node
    curr = curr.next;                  // move pointer
    sum3 /= 10;                        // drop last digit
}

return dummy.next;  // skip dummy head

    }
}
