//{ Driver Code Starts
//Initial Template for Java

//Initial Template for Java

//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split("\\s+");
            int  N = Integer.parseInt(input_line[0]);
            Solution ob = new Solution();
            ArrayList<Integer> v = new ArrayList<Integer>();
            v = ob.printNumHavingAltBitPatrn(N);
            for(int i : v)
                System.out.print(i + " ");
            System.out.println();
        }
    }
}



// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to return numbers with alternate bits in binary representation
    ArrayList<Integer> printNumHavingAltBitPatrn(int n) {
        // Create a list to store the result
        ArrayList<Integer> result = new ArrayList<>();
        
        // Iterate through all numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            int j = i;
            boolean flag = true;
            // Check the least significant bit of i
            int prev = j & 1;
            j >>= 1;
            
            // Check if the bits alternate
            while (j > 0) {
                int curr = j & 1;
                if (curr == prev) {
                    // If two consecutive bits are the same, set flag to false
                    flag = false;
                    break;
                }
                prev = curr;
                j >>= 1;
            }
            
            // If the bits alternate, add the number to the result list
            if (flag) {
                result.add(i);
            }
        }
        
        // Return the result list
        return result;
    }
}
