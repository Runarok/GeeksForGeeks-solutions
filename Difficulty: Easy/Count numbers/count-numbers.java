//{ Driver Code Starts
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
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.count(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution{
    
    // Function to check if a number contains the digit 3
    static boolean containThree(int num){
        // Loop through the digits of the number
        while(num > 0){
            // Check if the last digit is 3
            if(num % 10 == 3) return true;
            num /= 10;  // Remove the last digit
        }
        return false;  // Return false if no 3 is found
    }

    // Function to count how many numbers from 1 to N do not contain the digit 3
    static long count(int N) {
        int cnt = 0;  // Variable to count numbers that contain 3
        
        // Loop through all numbers from 1 to N
        for(int i = 1; i <= N; i++){
            if(containThree(i)){  // If the number contains a 3, increment the count
                cnt++;
            }
        }
        
        // Return the number of numbers that do not contain 3
        return (long) N - cnt;
    }
}
