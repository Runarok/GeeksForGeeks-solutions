//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.find(n);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

//User function Template for Java
class Solution
{
    // Public method to start the process of finding the answer
    public int find(int N) {
        return findHelper(N, 1, 0); // Start the helper method with the initial sum and index
    }

    // Private helper method to recursively find the smallest integer such that the sum of the integers
    // from 1 to that integer equals N
    private int findHelper(int N, int s, int sum) {
        if (sum == N) return s - 1;  // If the sum matches N, return the current index (adjusted by -1)
        if (sum > N) return -1;  // If the sum exceeds N, no valid answer, so return -1

        // Recursive call by adding the next integer (s + 1) to the sum and moving to the next index
        return findHelper(N, s + 1, sum + s);
    }
}
