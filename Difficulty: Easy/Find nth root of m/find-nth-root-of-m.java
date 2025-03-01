//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            int m = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.nthRoot(n, m);
            System.out.println(ans);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int nthRoot(int n, int m) {
        
        // If n is 1, the nth root of any number m is just m.
        if(n == 1) return m;

        // Set the low and high bounds for the binary search
        int low = 1, high = m / 2;
        
        // Perform binary search to find the nth root
        while(low <= high){
            int mid = (low + high) / 2;  // Calculate the mid value
            int val = (int) Math.pow(mid, n);  // Calculate mid raised to the power of n
            
            // If mid raised to the power of n equals m, return mid as the answer
            if(val == m) {
                return mid;
            }
            // If mid raised to the power of n is less than m, increase the low bound
            else if(val < m){
                low = mid + 1;
            }
            // If mid raised to the power of n is greater than m, decrease the high bound
            else {
                high = mid - 1;
            }
        }
        
        // If no exact nth root is found, return -1
        return -1;
    }
}
