//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.math.*;
import java.io.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int n = sc.nextInt();
            int a[] = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = sc.nextInt();
            }

            Solution obj = new Solution();
            boolean ans = obj.lemonadeChange(n, a);
            System.out.println(ans ? "True" : "False");
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to check if lemonade change can be given for all customers
     * @param N The number of customers
     * @param bills The array of bills received from customers
     * @returns A boolean value indicating whether change can be given to all customers
     */
    static boolean lemonadeChange(int N, int bills[]) {
        int five = 0, ten = 0;  // Variables to track the count of 5 and 10 bills
        
        for (int i : bills) {
            if (i == 5) {
                five++;  // Increase the count of 5 bills when a 5 is received
            } else if (i == 10) {
                five--;  // Give one 5 as change for a 10 bill
                ten++;   // Increase the count of 10 bills
            } else if (ten > 0) {
                ten--;   // Give one 10 and one 5 as change for a 20 bill
                five--;
            } else {
                five -= 3;  // If no 10s, try giving three 5 bills for a 20 bill
            }
            
            // If there are not enough 5 bills for the required change, return false
            if (five < 0) return false;
        }
        
        return true;  // If we successfully provide change for all customers, return true
    }
}
