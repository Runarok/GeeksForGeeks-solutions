//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            String str = br.readLine().trim();

            Vector<Integer> ans = new Solve().findRange(str, n);
            if (ans.size() == 1) {
                System.out.println(ans.get(0));
            } else {
                System.out.println(ans.get(0) + " " + ans.get(1));
            }
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solve {

    // Function to find the range of the longest subarray with more 0s than 1s
    Vector<Integer> findRange(String str, int n) {
        // Initialize the result vector
        Vector<Integer> res = new Vector<>();
        
        // Initialize variables to track the current sum, maximum sum, and the start/end of the range
        int maxSum = Integer.MIN_VALUE;
        int currSum = 0;
        int start = 0, end = -1, tempStart = 0;
        boolean hasZero = false;

        // Traverse the string to find the subarray with the maximum difference
        for (int i = 0; i < n; i++) {
            // If the character is '0', count it as +1, else count '1' as -1
            int val = (str.charAt(i) == '0') ? 1 : -1;

            // Mark if the string contains at least one '0'
            if (str.charAt(i) == '0') hasZero = true;

            // Add the current value to the current sum
            currSum += val;

            // Update the maximum sum and the corresponding range if the current sum exceeds the previous max
            if (currSum > maxSum) {
                maxSum = currSum;
                start = tempStart;
                end = i;
            }

            // If the current sum is negative, reset it and update the temporary start index
            if (currSum < 0) {
                currSum = 0;
                tempStart = i + 1;
            }
        }

        // If there was no '0' in the string, return [-1]
        if (!hasZero) {
            res.add(-1);
            return res;
        }

        // Add the 1-based indices of the range to the result
        res.add(start + 1);
        res.add(end + 1);
        
        // Return the result containing the range
        return res;
    }
}
