//{ Driver Code Starts
//Initial Template for Java//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int N = sc.nextInt();

            Solution ob = new Solution();
            int ans  = ob.palindromicNumbers(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

//User function Template for Java
class Solution {
    
    static int palindromicNumbers(int N) {
        int count = 0;
        
        // Loop through all numbers from 1 to N-1
        for (int i = 1; i < N; i++) {
            if (isPalindrome(i)) {
                count++;
            }
        }
        return count;
    }

    // Helper function to check if a number is palindrome
    static boolean isPalindrome(int num) {
        int originalNum = num;
        int reversedNum = 0;
        
        // Reverse the number
        while (num > 0) {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num /= 10;
        }
        
        // Check if original number equals its reverse
        return originalNum == reversedNum;
    }
}
