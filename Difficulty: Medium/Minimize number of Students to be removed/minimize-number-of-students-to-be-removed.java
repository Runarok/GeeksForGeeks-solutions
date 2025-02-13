//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
            PrintWriter out=new PrintWriter(System.out);
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            
            String S[] = read.readLine().split(" ");
            int[] H = new int[N];
            
            for(int i=0; i<N; i++)
                H[i] = Integer.parseInt(S[i]);

            Solution ob = new Solution();
            out.println(ob.removeStudents(H,N));
        
out.println("~");
}
        out.close();
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // removeStudents function to determine the minimum number of students to be removed
    // H: Array of heights of students
    // N: Total number of students
    public int removeStudents(int[] H, int N) {
        int[] dp = new int[H.length];  // dp array to track the Longest Increasing Subsequence (LIS)
        int len = 0;                    // variable to store the length of the LIS

        // Iterate through the heights array
        for (int num : H) {
            // Perform binary search to find the position of the current height in dp array
            int idx = Arrays.binarySearch(dp, 0, len, num);

            // If the height is not found, binarySearch returns a negative value
            if (idx < 0) {
                idx = -(idx + 1);  // If not found, return the position where the number can be inserted
            }

            // Update the dp array at the found or inserted index with the current height
            dp[idx] = num;

            // If the element is inserted at the end of the LIS, increase the length of LIS
            if (idx == len) {
                len++;
            }
        }

        // Return the number of students to be removed, which is the total students minus the length of LIS
        return N - len;
    }
}
