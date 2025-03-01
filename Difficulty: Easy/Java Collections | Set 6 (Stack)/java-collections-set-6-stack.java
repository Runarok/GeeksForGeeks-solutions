//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException{
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int n = Integer.parseInt(in.readLine());
            String a[] = in.readLine().trim().split("\\s+");
            int arr[] = new int[n];
            for(int i = 0;i < n;i++)
                arr[i] = Integer.parseInt(a[i]);
            Stack<Integer> st = new Stack<>();
            for(int i = 0;i < n;i++)
                st.push(arr[i]);
            
            Solution ob = new Solution();
            Stack<Integer> ans = new Stack<>();
            ans = ob.deleteMid(n, st);
            while(!ans.empty()) {
                int x = ans.pop();
                System.out.print(x + " ");
            }
            System.out.println();
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to delete the middle element from the stack
    static Stack<Integer> deleteMid(int n, Stack<Integer> st) {
        // Calculate the middle index of the stack
        int midIndex = n / 2;
        
        // Call helper function to remove the middle element
        removeMiddle(st, midIndex);
        
        // Return the updated stack
        return st;
    }

    // Helper function to remove the middle element recursively
    private static void removeMiddle(Stack<Integer> st, int mid) {
        // Base case: If mid is 0, pop the middle element from the stack
        if (mid == 0) {
            st.pop();
            return;
        }

        // Store the top element and pop it temporarily
        int top = st.pop();
        
        // Recursive call to remove the middle element
        removeMiddle(st, mid - 1);
        
        // Push the stored element back to maintain the order
        st.push(top);
    }
}
