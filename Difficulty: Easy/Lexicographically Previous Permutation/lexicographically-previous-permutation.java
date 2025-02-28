//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String s = br.readLine();
            Solution ob = new Solution();
            System.out.println(ob.prevPermutation(s));
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution {
    
    // Function to find the lexicographically previous permutation of the string.
    static String prevPermutation(String s) {
        char[] chars = s.toCharArray();

        // Step 1: Find the first character (from right) that is larger than its next character.
        int i = chars.length - 2;
        while (i >= 0 && chars[i] <= chars[i + 1]) {
            i--;
        }

        // If no such character is found, the string is already the smallest permutation.
        if (i < 0) {
            return "None";
        }

        // Step 2: Find the largest character on the right side of 'i' that is smaller than chars[i].
        int j = chars.length - 1;
        while (j > i && chars[j] >= chars[i]) {
            j--;
        }

        // Step 3: Swap characters at positions 'i' and 'j'.
        swap(chars, i, j);

        // Step 4: Reverse the sequence after position 'i' to get the largest lexicographical order.
        reverse(chars, i + 1);

        return new String(chars);
    }

    // Helper function to swap two characters in the array.
    static void swap(char[] chars, int i, int j) {
        char temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }

    // Helper function to reverse characters from index 'start' to the end of the array.
    static void reverse(char[] chars, int start) {
        int left = start;
        int right = chars.length - 1;
        while (left < right) {
            swap(chars, left, right);
            left++;
            right--;
        }
    }
}
