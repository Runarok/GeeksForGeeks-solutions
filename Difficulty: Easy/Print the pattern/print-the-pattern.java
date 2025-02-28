//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int n = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            List<String> ans = ob.pattern(n);
            for(int i = 0;i < n;i++)
                System.out.println(ans.get(i));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    static List<String> pattern(int n) {
        // Create an array list to hold the pattern strings
        ArrayList<String> list = new ArrayList<>();
        int num = 1;

        // Generate the first half of the pattern
        for (int i = 1; i <= n; i++) {
            String str = "";

            // Add dashes for indentation
            for (int j = 1; j < i; j++) str += "--";

            // Add numbers with '*' separator
            for (int j = 0; j <= n - i; j++) {
                str += num++ + "*";
            }
            list.add(str);
        }

        // Generate the second half of the pattern by using a stack for reversal
        Stack<String> stack = new Stack<>();
        for (int i = n - 1; i >= 0; i--) {
            String str = list.get(i);

            // Add remaining numbers with '*' separator
            for (int j = 0; j < n - i; j++) {
                if (j == n - i - 1) {
                    str += num++;
                } else {
                    str += num++ + "*";
                }
            }
            stack.push(str);
        }

        // Clear the list and push the reversed stack content to it
        list.clear();
        while (!stack.empty()) {
            list.add(stack.pop());
        }
        
        // Return the pattern list
        return list;
    }
}
