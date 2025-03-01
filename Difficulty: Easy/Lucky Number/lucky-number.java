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
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.isLuckyOrNot(N));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if the number is lucky or not
    static int isLuckyOrNot(Long N) {
        // Initialize a temporary variable for N and a HashSet to store product results
        long temp = N;
        HashSet<Integer> set = new HashSet<>();
        
        // Loop through each digit of the number
        while(temp > 0){
            // Get the number of digits in the current part of temp
            int i = (int)Math.log10(temp);
            int j = i;

            // Loop through each possible sub-number formed by removing digits
            while( j >= 0){
                // Get the sub-number formed by the current digits
                int sub_num =  (int)temp /(int) Math.pow(10,j);
                int product = 1;

                // Calculate the product of the digits of the sub-number
                while(sub_num > 0){
                    int sub_num_digit = sub_num % 10;
                    product *= sub_num_digit;
                    sub_num = sub_num / 10;
                }

                // If the product has already been encountered, return 0 (not lucky)
                if(!set.isEmpty() && set.contains(product))
                    return 0;
                else
                    set.add(product);  // Add the product to the set
                
                j--;  // Move to the next sub-number
            }

            // Remove the left-most digit and process the next part of the number
            temp = temp % (int)Math.pow(10,i);
        }
        
        // Return 1 if the number is lucky
        return 1;
    }
}
