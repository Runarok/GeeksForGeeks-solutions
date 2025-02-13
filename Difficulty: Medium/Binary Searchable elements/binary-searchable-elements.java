//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int n = Integer.parseInt(read.readLine());
            
            String S[] = read.readLine().split(" ");
            int[] Arr = new int[n];
            
            for(int i=0; i<n; i++)
                Arr[i] = Integer.parseInt(S[i]);

            Solution ob = new Solution();
            System.out.println(ob.binarySearchable(Arr,n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int binarySearchable(int[] arr, int n) {
        // Arrays to store the maximum value seen so far from the left 
        // and the minimum value seen so far from the right
        int maxTillNow[] = new int[n];
        int minTillNow[] = new int[n];

        // Initialize first element of maxTillNow
        maxTillNow[0] = arr[0];

        // Initialize last element of minTillNow
        minTillNow[n - 1] = arr[n - 1];

        // Fill maxTillNow array: stores the maximum value from the left up to index i
        for (int i = 1; i < n; i++) {
            maxTillNow[i] = Math.max(arr[i], maxTillNow[i - 1]);
        }

        // Fill minTillNow array: stores the minimum value from the right up to index i
        for (int i = n - 2; i >= 0; i--) {
            minTillNow[i] = Math.min(arr[i], minTillNow[i + 1]);
        }

        int count = 0;

        // Check if each element can be found using binary search
        for (int i = 0; i < n; i++) {
            int left = (i == 0) ? Integer.MIN_VALUE : maxTillNow[i - 1];
            int right = (i == n - 1) ? Integer.MAX_VALUE : minTillNow[i + 1];

            // A number is binary searchable if it is greater than all elements before it
            // and smaller than all elements after it
            if (arr[i] > left && arr[i] < right) {
                count++;
            }
        }

        return count;
    }
};
