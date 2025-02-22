//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            long N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.isDeciBinPalin(N));
        }
    }
}
// } Driver Code Ends

class Solution {
    static String isDeciBinPalin(long N){
        // Check if the decimal representation is a palindrome
        String decimalStr = Long.toString(N);
        if (!isPalindrome(decimalStr)) {
            return "No";
        }
        
        // Check if the binary representation is a palindrome
        String binaryStr = Long.toBinaryString(N);
        if (!isPalindrome(binaryStr)) {
            return "No";
        }
        
        return "Yes";
    }
    
    // Helper function to check if a string is a palindrome
    static boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
