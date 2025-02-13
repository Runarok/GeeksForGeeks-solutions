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
            int N = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.totalAnimal(N);
            System.out.println(ans);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

class Solution {
    public int totalAnimal(int n) {
        // Initialize an array to store the number of animals for each step
        int arr[] = new int[n + 1];
        
        // Base cases
        arr[0] = 1;  // There is 1 way to have 0 animals (do nothing)
        arr[1] = arr[0];  // There is 1 way to have 1 animal (just one animal)

        // Fill the array using the recurrence relation
        // The number of animals at step i is the sum of the animals at step (i-1) and (i-2)
        for (int i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        
        // Return the total number of animals for step n
        return arr[n];
    }
}
