//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*; 
class GFG{
    public static void main(String args[]) throws IOException { 
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0){
            int N = Integer.parseInt(read.readLine().trim());
            String input_line[] = read.readLine().trim().split("\\s+");
            int A[]= new int[N];
            for(int i = 0; i < N; i++)
                A[i] = Integer.parseInt(input_line[i]);
            input_line = read.readLine().trim().split("\\s+");
            int B[]= new int[N];
            for(int i = 0; i < N; i++)
                B[i] = Integer.parseInt(input_line[i]);

            Solution ob = new Solution();
            long ans = ob.maxPossibleValue(N, A, B); 
            System.out.println(ans);
        
System.out.println("~");
}
    } 
} 
// } Driver Code Ends

// User function Template for Java

class Solution {
    // maxPossibleValue calculates the maximum possible value based on given lengths and frequencies
    // N: Number of elements
    // L: Array containing the lengths
    // F: Array containing the frequencies of the respective lengths
    public long maxPossibleValue(int N, int[] L, int[] F) {
        long total = 0;  // Variable to store the total value
        int sum = 0;     // Variable to accumulate the sum of frequencies considered
        int min = Integer.MAX_VALUE; // Variable to store the minimum length encountered

        // Iterate through all elements in the lengths array
        for (int i = 0; i < L.length; i++) {
            // Case when the frequency is at least 2
            if (F[i] >= 2) {
                // If the frequency is even
                if (F[i] % 2 == 0) {
                    total += F[i] * L[i]; // Add the total value for this length
                    sum += F[i];           // Add the full frequency to sum
                } else {
                    // If the frequency is odd, take one less to make it even
                    total += (F[i] - 1) * L[i];  // Add the total value for this length (excluding 1)
                    sum += F[i] - 1;              // Add the reduced frequency to sum
                }
                // Update the minimum length encountered so far
                min = Math.min(min, L[i]);
            }
        }

        // If the sum of selected frequencies is not a multiple of 4, subtract the value of the smallest length
        if (sum % 4 != 0) total -= (2 * min);

        return total; // Return the calculated maximum possible value
    }
}
