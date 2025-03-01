//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine().trim());
        while(t-- > 0){
            long N = Long.parseLong(in.readLine().trim());
            
            Solution ob = new Solution();
            List<String> ans = new ArrayList<String>();
            ans = ob.flipBits(N);
            System.out.println(ans.get(0) + " " + ans.get(1));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


class Solution{
    static List<String> flipBits(long N){
        // Calculate the number that flips all the bits of N
        long completeNum = pow(2, 32) - 1; // This gives the number with all 32 bits set to 1
        long flippedNum = completeNum - N; // Flip the bits by subtracting from the full 32-bit number
        
        // Convert flipped number to a string (decimal) and binary representation
        String decimalResult = String.valueOf(flippedNum);
        String binaryResult = reverse(Long.toBinaryString(flippedNum)); // Reverse binary string
        
        // Add both results to a list and return
        List<String> result = new ArrayList<String>();
        result.add(decimalResult);  // Decimal form
        result.add(binaryResult);   // Binary form
        return result;
    }
    
    // Custom method to calculate power (x^n)
    public static long pow(int base, int exponent){
        long result = 1;
        long temp = base;
        
        // Exponentiation by squaring
        while(exponent > 0){
            if(exponent % 2 == 1){
                result *= temp;
            }
            temp *= temp;
            exponent /= 2;
        }
        return result;
    }
    
    // Method to reverse a string
    public static String reverse(String str){
        String reversed = "";
        for(int i = 0; i < str.length(); i++){
            reversed = str.charAt(i) + reversed; // Append each character at the beginning
        }
        return reversed;
    }
}
