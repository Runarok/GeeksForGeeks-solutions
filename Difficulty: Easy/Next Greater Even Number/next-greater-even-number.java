//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while (t-- > 0) {
            String str = br.readLine();

            Solution obj = new Solution();
            System.out.println(obj.getNextEven(str));

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    
    public long getNextEven(String x) {
        int n = x.length();
        
        // Infinite loop until we find a valid even permutation or return -1
        while (true) {
            
            int swapIndex = -1;
            
            // Step 1: Find the first decreasing element from the right
            for (int i = n - 2; i >= 0; i--) {
                if (x.charAt(i) < x.charAt(i + 1)) {
                    swapIndex = i;
                    break;
                }
            }
            
            // If no such element is found, no next permutation exists
            if (swapIndex == -1) {
                return -1L;
            }
            
            // Step 2: Find the smallest element greater than arr[swapIndex] to the right
            int nextGreaterIndex = n - 1;
            for (int i = n - 1; i > swapIndex; i--) {
                if (x.charAt(i) > x.charAt(swapIndex)) {
                    nextGreaterIndex = i;
                    break;
                }
            }
            
            // Step 3: Swap these two elements
            char[] arr = x.toCharArray();
            char temp = arr[swapIndex];
            arr[swapIndex] = arr[nextGreaterIndex];
            arr[nextGreaterIndex] = temp;
            
            // Step 4: Sort the suffix after the swapIndex to get the next permutation
            Arrays.sort(arr, swapIndex + 1, n);
            
            // Step 5: Check if this permutation ends with an even digit
            if ((arr[n - 1] - '0') % 2 == 0) {
                return Long.parseLong(new String(arr));
            } else {
                // Otherwise, continue checking with this new permutation
                x = String.valueOf(arr);
            }
        }
    }
}
