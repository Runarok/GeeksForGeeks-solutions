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
            List<Integer> ans = new ArrayList<Integer>();
            StringBuilder out = new StringBuilder();
            ans = ob.connellSequence(n);
            for(int i = 0;i < ans.size();i++)
                out.append(ans.get(i) + " ");
            System.out.println(out);
        }
    }
}
// } Driver Code Ends

class Solution {
    static List<Integer> connellSequence(int n) {
        // Initialize the first element in the sequence
        int currentElement = 1;

        // Flag to track if the current element is odd (not actually needed here, can be removed)
        boolean isOddElement = true;

        // List to store the result sequence
        List<Integer> resultSequence = new ArrayList<>();

        // Outer loop to control rows (triangular sequence structure)
        for (int row = 1; row <= n; row++) {

            // Inner loop to add elements within the current row
            int count = 0;
            while (count < row && resultSequence.size() < n) {
                resultSequence.add(currentElement);
                count++;

                // Move to the next odd number (skipping even numbers)
                if (count < row) {
                    currentElement += 2;
                }
            }

            // After finishing a row, move to the next number (which will be even if needed)
            currentElement += 1;

            // Toggle the odd flag (though this logic is not actually required)
            if (isOddElement) {
                isOddElement = false;
            } else {
                isOddElement = true;
            }
        }

        return resultSequence;
    }
}
