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
            int m = sc.nextInt();
            Solution obj = new Solution();
            int ans[] = obj.passedBy(n, m);

            System.out.println(ans[0] + " " + ans[1]);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to return an array with modified values of a and b
    static int[] passedBy(int a, int b) {
        // Create an array to store the results
        int[] res = new int[2];
        
        // Increment a by 1 and store it in the first index
        res[0] = a + 1;
        
        // Increment b by 2 and store it in the second index
        res[1] = b + 2;
        
        // Return the result array
        return res;
    }
}
