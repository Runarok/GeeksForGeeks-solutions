//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            int N = Integer.parseInt(S[0]);
            int K = Integer.parseInt(S[1]);
            
            String S1[] = read.readLine().split(" ");
            
            int arr[] = new int[N];
            
            for(int i=0; i<N; i++)
                arr[i] = Integer.parseInt(S1[i]);

            Solution ob = new Solution();
            System.out.println(ob.maxGroupSize(arr,N,K));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Function to calculate the maximum group size based on the given conditions
    static int maxGroupSize(int[] arr, int N, int K) {
        // If K is less than or equal to 1, the group size can only be 1
        if (K <= 1) {
            return 1;
        }

        // Array to store the frequency of each remainder when divided by K
        int a[] = new int[K];

        // Loop through the array and calculate the remainder of each element when divided by K
        for (int i = 0; i < N; i++) {
            int mod = arr[i] % K;
            a[mod]++;
        }

        // Initialize the answer variable
        int ans = 0;

        // If there are any elements divisible by K, count one group for them
        if (a[0] > 0) {
            ans = ans + 1;
        }

        // Use two pointers: one starting from 1 and the other from K-1
        int low = 1;
        int high = K - 1;

        // Iterate until the pointers cross each other
        while (low <= high) {
            // If the two pointers meet, take care of the case where both point to the same remainder
            if (low == high) {
                if (a[low] > 0) {
                    ans = ans + 1;
                    break;
                }
            }
            // Otherwise, take the maximum frequency from the two remainders and add it to the answer
            ans = ans + Math.max(a[low], a[high]);

            // Move the pointers inward
            low++;
            high--;
        }

        // Return the final group size
        return ans;
    }
}
