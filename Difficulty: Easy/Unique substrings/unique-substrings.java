//{ Driver Code Starts
//Initial Template for Java


import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();
        while(T-->0)
        {
            String S = sc.nextLine();
            String[] S1 = S.split(" ");
            String s = S1[0];
            int k = Integer.parseInt(S1[1]);
            Solution ob = new Solution();
            long  res  = ob.unique_substring_sum(s, k);
            System.out.println(res);
        }
    }
}


// } Driver Code Ends

// User function Template for Java

class Solution {
    public long unique_substring_sum(String s, int k) {
        // If the length of the string is not divisible by k, return -1
        if (s.length() % k != 0)
            return -1;
        
        // Use a Set to store unique substrings of length k
        Set<String> uniqueSubstrings = new HashSet<>();
        String temp = "";

        // Loop through the string to extract substrings of length k
        for (int i = 0; i < s.length(); i++) {
            temp += s.charAt(i);
            // When we have a substring of length k, add it to the set and reset temp
            if (temp.length() == k) {
                uniqueSubstrings.add(temp);
                temp = "";
            }
        }

        // Calculate the sum of the binary values of the unique substrings
        long sum = 0;
        for (String binaryString : uniqueSubstrings) {
            // Convert each binary string to a decimal integer and add to the sum
            sum += Integer.parseInt(binaryString, 2);
        }
        
        return sum;
    }
}
