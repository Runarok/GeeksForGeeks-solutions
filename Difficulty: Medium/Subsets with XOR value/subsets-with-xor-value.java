//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

// } Driver Code Ends
//User function Template for Java
class Solution {
    static int subsetXOR(int arr[], int N, int K) {
        // Start the recursive helper function to count subsets
        return helper(arr, N - 1, K, 0);
    }

    static int helper(int[] arr, int index, int targetXOR, int currentXOR) {
        // Base case: If we have considered all elements
        if (index < 0) {
            return currentXOR == targetXOR ? 1 : 0; // Count valid subsets
        }

        // Include the current element in the subset (XOR it)
        int includeElement = helper(arr, index - 1, targetXOR, currentXOR ^ arr[index]);

        // Exclude the current element from the subset (keep XOR unchanged)
        int excludeElement = helper(arr, index - 1, targetXOR, currentXOR);

        // Return total count of valid subsets
        return includeElement + excludeElement;
    }
}



//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner s = new Scanner(System.in);
        int t = s.nextInt();
        while(t-- > 0)
        {
            int N = s.nextInt();
            int K = s.nextInt();
            int arr[] = new int[N];
            for(int i =0;i<N;i++)
            {
                arr[i] =s.nextInt();
            }
            Solution ob = new Solution();
            System.out.println(ob.subsetXOR(arr,N,K));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends