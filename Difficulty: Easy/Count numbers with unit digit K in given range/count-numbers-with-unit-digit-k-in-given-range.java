//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            Long low = Long.parseLong(S[0]);
            Long high = Long.parseLong(S[1]);
            Long K = Long.parseLong(S[2]);

            Solution ob = new Solution();
            System.out.println(ob.countLastDigitK(low,high,K));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count numbers between low and high (inclusive) whose last digit is K
    static int countLastDigitK(Long low, Long high, Long K) {
        int count = 0;
        
        // Store original values of low and high
        long prevLow = low;
        long prevHigh = high;

        // Special handling when K is 0
        if(K == 0) {
            // Count 0's in the range starting from low
            while(low % 10 != 0) {
                if(low % 10 == K) {
                    count++;
                }
                low++;
            }

            // Count 0's in the range ending at high
            while(high % 10 != 0) {
                if(high % 10 == K) {
                    count++;
                }
                high--;
            }
        }
        
        // General case for K not equal to 0
        while(K != 0 && low % 10 != 0) {
            if(low % 10 == K) {
                count++;
            }
            low++;
        }
    
        while(K != 0 && high % 10 != 0) {
            if(high % 10 == K) {
                count++;
            }
            high--;
        }
        
        // Calculate the number of multiples of 10 between low and high
        long diff = 0;
        
        if(K == 0) {
            // Special handling for K = 0, as it includes one extra value
            diff = (high - low) / 10 + count + 1;
        } else {
            diff = (high - low) / 10 + count;
        }
    
        return (int) (diff);
    }
}
